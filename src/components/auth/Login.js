import { Link, useNavigate } from "react-router-dom";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useState } from "react";

export const Login = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "" || password === "") {
      setErr("Please fill all the fields!");
      return;
    }

    setLoading(true);
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/todos");
          setLoading(false);
        })
        .catch((err) => {
          setErr(err.message);
          setLoading(false);
        });
    });
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h1>ToDo List</h1>
        <form className="auth__form" onSubmit={onLogin}>
          <label htmlFor="email" />
          <input type="text" placeholder="Email" id="email" name="email" />
          <label htmlFor="password" />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button type="submit">{loading ? "Loading..." : "Log In"}</button>
          <p className="errors">{err}</p>
        </form>
      </div>
      <div className="auth__action">
        <p>Don't have an account?</p>
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};
