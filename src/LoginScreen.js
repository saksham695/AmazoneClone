import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./LoginScreen.css";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
    // firebase stuff
  };

  const register = (e) => {
    e.preventDefault();

    // firebase stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created new user
        if (auth) {
          console.log("Hello");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <Link to="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h2>Login</h2>
        <form className="input-header">
          <h5 className="input-header">Email</h5>
          <input
            type="text"
            className="input-header"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 style={{ marginBottom: 0 }}>Password</h5>
          <input
            type="password"
            className="input-header"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type={"submit"}
            className="login-sign-in-button"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          Sale.Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <div
            style={{
              height: "1px",
              background: "gray",
              width: "100%",
            }}
          />
          <p
            style={{
              width: "100%",
              fontSize: "11px",
              marginLeft: "9px",
            }}
          >
            New To Amazon ?
          </p>
          <div
            style={{
              height: "1px",
              background: "gray",
              width: "100%",
            }}
          />
        </div>
        <button onClick={register} className="login-register-button">
          <strong> Create your Amazon Account</strong>
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
