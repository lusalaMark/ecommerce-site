import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
//import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const logIn = (e) => {
    e.preventDefault();

    //firebase staff.
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    //some fancy firebase register shitttttttt.....................nsticky

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={logIn} type="submit" className="login__signInButton">
            Sign In
          </button>
          <p>
            By signing in you agree with the term aand conditions ot this
            ecommerce site
          </p>
          <button onClick={register} className="login__registerButton">
            Create a new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
