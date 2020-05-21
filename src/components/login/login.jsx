import React from "react";
import Facebook from "../social/facebook";
import Google from "../social/google";
import GirlReading from "../../images/girlReading";
import EmailForm from "./emailForm";
import history from "../../routing/history";
import { toast } from "react-toastify";
const Login = () => {
  return (
    <div className="w-100 overflow-auto bg-theme">
      <div style={{ maxWidth: "1200px" }} className="container-fluid my-4">
        <div className="row no-gutters justify-content-center shift bg-light">
          <div
            className="col py-3 d-none d-md-block"
            style={{
              paddingLeft: "80px",
              paddingRight: "80px",
              background:
                "radial-gradient(circle at left, rgb(255, 140, 140), rgba(255, 140, 140, 0.5))",
            }}
          >
            <GirlReading></GirlReading>
          </div>
          <div
            className="col-12 col-sm-9 col-md-6 p-5 bg-light"
            style={{ maxWidth: "400px" }}
          >
            <div className="mb-3">
              <Facebook
                text="Login with Facebook"
                onError={(message) => toast.error(message)}
              ></Facebook>
            </div>
            <div>
              <Google
                text="Login with Google"
                onError={(message) => toast.error(message)}
              ></Google>
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
              }}
              className="soft-box d-flex justify-content-center align-items-center mx-auto mt-4 mb-1 p-4"
            >
              Or
            </div>
            <EmailForm></EmailForm>
            <div className="text-center mt-5">
              Forgot password?
              <span
                className="btn-link"
                onClick={() => {
                  history.push({ pathname: "/signup" });
                }}
                style={{ color: "#ff8c8c", cursor: "pointer" }}
              >
                {" "}
                Remind
              </span>
            </div>
            <div className="text-center">
              Don't have an account?
              <span
                className="btn-link"
                onClick={() => {
                  history.push({ pathname: "/signup" });
                }}
                style={{ color: "#ff8c8c", cursor: "pointer" }}
              >
                {" "}
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
