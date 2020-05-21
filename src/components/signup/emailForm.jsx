import React, { useState, useRef } from "react";
import CheckBox from "./checkbox";
import history from "../../routing/history";
import { singup, signup } from "../../javascript/requests";

const EmailForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checked) {
      setError("Agree with terms and conditions");
    } else {
      let user = {};
      const formData = new FormData(e.target);
      for (var [key, value] of formData.entries()) {
        user[key] = value;
      }
      signup(user, (res) => {
        console.log(res);
        if (res.error) {
          setError(res.error);
        } else {
          history.push({ pathname: "/profile" });
        }
      });
    }
  };

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const submitBtn = useRef(null);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        className="soft-input mb-2 shn px-4"
        id="email"
        type="email"
        name="email"
        required
      ></input>
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        className="soft-input mb-2 shn px-4"
        id="password"
        required
        pattern=".{6,}"
      ></input>
      <label htmlFor="password2">Re-type password</label>
      <input
        name="password2"
        type="password"
        className="soft-input shn px-4"
        id="password2"
        required
        pattern=".{6,}"
      ></input>
      <div className="d-flex mt-2 disable-select">
        <CheckBox
          size="25"
          checked={checked}
          setChecked={setChecked}
        ></CheckBox>
        <div className="ml-2">
          I agree with{" "}
          <span
            onClick={() => history.push({ pathname: "/terms-and-conditions" })}
            className="btn-link"
            style={{ color: "#ff8c8c", cursor: "pointer" }}
          >
            terms and conditions
          </span>
        </div>
      </div>

      <button
        ref={submitBtn}
        type="submit"
        className={`soft-btn mt-4${error !== "" ? " reject" : ""}`}
        style={{ color: "white", background: "#ff8c8c" }}
      >
        Sign Up
      </button>
      {error !== "" && (
        <div className="mt-2 text-center" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </form>
  );
};

export default EmailForm;
