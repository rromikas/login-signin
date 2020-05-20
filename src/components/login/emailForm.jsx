import React from "react";

const EmailForm = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input className="soft-input mb-2 shn px-4" id="email"></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="soft-input shn px-4"
        id="password"
      ></input>
      <button
        type="submit"
        className="soft-btn mt-4 shn"
        style={{ color: "white", background: "#ff8c8c" }}
      >
        Login
      </button>
    </form>
  );
};

export default EmailForm;
