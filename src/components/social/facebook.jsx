import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { facebookSignup } from "../../javascript/requests";
import history from "../../routing/history";

const handleResponse = (response, onError) => {
  console.log(response);
  if (response && response.email) {
    let newUser = {
      name: response.name,
      email: response.email,
      photoUrl: response.picture.data.url,
      accessToken: response.accessToken,
    };
    facebookSignup(newUser, (res) => {
      console.log("facebook response", res);
      if (res.error) {
        onError(res.error);
      } else {
        console.log("token from facebook", res.token);
        localStorage["secret_token"] = res.token;
        history.push({ pathname: "/profile" });
      }
    });
  }
};

const Facebook = ({ text, onError }) => {
  const appId = "267059971103306";
  return (
    <FacebookLogin
      appId={appId}
      autoLoad={false}
      fields="name,email,picture"
      callback={(res) => {
        handleResponse(res);
      }}
      render={(renderProps) => (
        <div
          className="soft-btn py-3 px-4 d-flex justify-content-between align-items-center shn"
          onClick={renderProps.onClick}
        >
          <div>{text}</div>
          <div className="convex-2" style={{ borderRadius: "50%" }}>
            <FaFacebook fontSize="34px" color="#4267b2"></FaFacebook>
          </div>
        </div>
      )}
    ></FacebookLogin>
  );
};

export default Facebook;
