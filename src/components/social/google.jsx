import { GoogleLogin } from "react-google-login";
import React from "react";
import GoogleIcon from "./googleIcon";

const handleResponse = (response) => {
  var res = {
    name: response.profileObj.name,
    photoUrl: response.profileObj.imageUrl,
    email: response.profileObj.email,
  };
  console.log(res);
};

const handleFailure = (err) => {
  console.log(err);
};

const Google = ({ text }) => {
  return (
    <GoogleLogin
      clientId="965635793119-nm7ur6ko4nmisbs11ci8ut4q46h0p6fa.apps.googleusercontent.com"
      buttonText="Login"
      render={(renderProps) => (
        <div
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="soft-btn py-3 px-4 d-flex justify-content-between align-items-center shn"
        >
          <div>{text}</div>
          <div className="convex-2" style={{ borderRadius: "50%" }}>
            <GoogleIcon size={32}></GoogleIcon>
          </div>
        </div>
      )}
      onSuccess={(res) => {
        handleResponse(res, "google");
      }}
      onFailure={(er) => {
        handleFailure(er, "google");
      }}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Google;
