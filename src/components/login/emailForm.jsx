import React, { useState } from "react";
import { login } from "../../javascript/requests";
import history from "../../routing/history";

const handleSubmit = (e, onError) => {
  e.preventDefault();
  let user = {};
  const formData = new FormData(e.target);
  for (var [key, value] of formData.entries()) {
    user[key] = value;
  }

  login(user, (res) => {
    if (res.error) {
      onError(res.error);
    } else {
      localStorage["secret_token"] = res.token;
      history.push({ pathname: "/profile" });
    }
  });
};

const EmailForm = () => {
  const [error, setError] = useState("");
  return (
    <form onSubmit={(e) => handleSubmit(e, setError)}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        className="soft-input mb-2 shn px-4"
        id="email"
        type="email"
        required
      ></input>
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        className="soft-input shn px-4"
        id="password"
        required
        pattern=".{6,}"
      ></input>
      <button
        type="submit"
        className={`soft-btn mt-4${error !== "" ? " reject" : ""}`}
        style={{ color: "white", background: "#ff8c8c" }}
      >
        Login
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
