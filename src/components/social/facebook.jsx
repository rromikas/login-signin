import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { facebookSignup } from "../../javascript/requests";
import history from "../../routing/history";

const handleResponse = (response, setLoading, onError) => {
  if (response && response.email) {
    setLoading(true); //showing loader to user while waiting response from server

    let newUser = {
      name: response.name,
      email: response.email,
      photoUrl: response.picture.data.url,
      accessToken: response.accessToken,
    };
    facebookSignup(newUser, (res) => {
      setLoading(false);

      if (res.error) {
        onError(res.error);
      } else {
        localStorage["secret_token"] = res.token;
        history.push("/profile", res.user);
      }
    });
  }
};

const Facebook = ({ text, onError }) => {
  const appId = "267059971103306";
  const [loading, setLoading] = useState(false);

  return (
    <FacebookLogin
      appId={appId}
      autoLoad={false}
      fields="name,email,picture"
      callback={(res) => {
        handleResponse(res, setLoading, onError);
      }}
      render={(renderProps) => (
        <div
          className="soft-btn py-3 px-4 d-flex justify-content-between align-items-center shn"
          onClick={renderProps.onClick}
        >
          <div>{loading ? "Loading..." : text}</div>
          <div className="convex-2" style={{ borderRadius: "50%" }}>
            <FaFacebook fontSize="34px" color="#4267b2"></FaFacebook>
          </div>
        </div>
      )}
    ></FacebookLogin>
  );
};

export default Facebook;
