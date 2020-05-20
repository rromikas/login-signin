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
  const clientId =
    "49004644590-v8t3iamk2h7a6r3flrkn3cjor47hrlkn.apps.googleusercontent.com";
  return (
    <GoogleLogin
      clientId={clientId}
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
