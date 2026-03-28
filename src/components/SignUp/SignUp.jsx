import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/firebase.init";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    console.log(email, password, terms);

    if (terms === false) {
      setErrorMessage(
        "Please accept the terms and conditions to create an account",
      );
      return;
    }

    const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{5,}$/;
    if (!passRegEx.test(password)) {
      setErrorMessage("Password must contain at least 6 characters");
      return;
    }

    setErrorMessage("");
    setSuccess(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);

        // email verification
        sendEmailVerification(auth.currentUser).then(() => {
          setSuccess(true);
          alert("check your email to verify");
        });

        // update user profile
        const profile = {
          displayName: name,
          photoUrl: photo,
        };

        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("user updated");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Sign Up Now!</h1>
        <form onSubmit={handleSignUp}>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />{" "}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            className="input"
            placeholder="Insert your photo URL"
          />{" "}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label mt-4">Password</label>
          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              className="input"
              placeholder="Password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="btn btn-xs absolute right-5 text-white top-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <label className="label">
            <input name="terms" type="checkbox" className="checkbox" />
            Terms & Conditions
          </label>
          <br />
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {success && (
          <p className="text-green-500 text-sm">Registration Successful</p>
        )}
      </div>{" "}
      <div className="text-center text-sm text-white">
        <p>
          Already have an account?{" "}
          <Link to={"/login"}>
            {" "}
            <span className="font-semibold text-teal-300">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
