import React from "react";
import Facebook from "../social/facebook";
import Google from "../social/google";
import BoyReading from "../../images/boyReading";
import EmailForm from "./emailForm";
import history from "../../routing/history";
const Signup = () => {
  return (
    <div
      className="w-100 overflow-auto"
      style={{
        background: "radial-gradient(at left top, #4c508f, #f37373)",
        backgroundSize: "cover",
        minHeight: "100%",
      }}
    >
      <div style={{ maxWidth: "1200px" }} className="container-fluid my-4">
        <div className="row no-gutters justify-content-center align-items-center shift bg-light">
          <div
            className="col py-3 d-none d-md-block"
            style={{
              paddingLeft: "80px",
              paddingRight: "80px",
              background:
                "radial-gradient(circle at left, rgb(255, 140, 140), rgba(255, 140, 140, 0.5))",
            }}
          >
            <div className="w-90">
              <BoyReading></BoyReading>
            </div>
          </div>
          <div
            className="col-12 col-sm-9 col-md-6 py-4 px-5 bg-light"
            style={{ maxWidth: "400px" }}
          >
            <div className="mb-3">
              <Facebook text="Sign Up with Facebook"></Facebook>
            </div>
            <div>
              <Google text="Sign Up with Google"></Google>
            </div>
            <hr className="mt-4"></hr>
            <EmailForm></EmailForm>
            <div className="text-center mt-5">
              Already have an account?
              <span
                className="btn-link"
                onClick={() => {
                  history.push({ pathname: "/login" });
                }}
                style={{ color: "#ff8c8c", cursor: "pointer" }}
              >
                {" "}
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
