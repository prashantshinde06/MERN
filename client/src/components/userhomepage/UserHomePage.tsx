import React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../userhomepage/UserHomePage.scss";
import { useNavigate } from "react-router-dom";

function UserHomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0 bghomeimg d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn signup-btn"
              onClick={() => {
                navigate("signup");
              }}
            >
              Signup
            </button>
            <button
              type="button"
              className="btn login-btn"
              onClick={() => {
                navigate("login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHomePage;
