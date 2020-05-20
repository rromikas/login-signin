import React, { useState } from "react";
import CheckBox from "./checkbox";
import history from "../../routing/history";

const EmailForm = () => {
  const [checked, setChecked] = useState(false);
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input className="soft-input mb-2 shn px-4" id="email"></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="soft-input mb-2 shn px-4"
        id="password"
      ></input>
      <label htmlFor="password">Re-type password</label>
      <input
        type="password"
        className="soft-input shn px-4"
        id="password"
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
        type="submit"
        className="soft-btn mt-4 shn"
        style={{ color: "white", background: "#ff8c8c" }}
      >
        Sign Up
      </button>
    </form>
  );
};

export default EmailForm;
