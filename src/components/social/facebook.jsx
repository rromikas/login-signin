import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const handleResponse = (response) => {
  console.log(response);
  if (response && response.email) {
    var res = {
      name: response.name,
      email: response.email,
      photoUrl: response.picture.data.url,
    };
    console.log(res);
  }
};

const Facebook = ({ text }) => {
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
