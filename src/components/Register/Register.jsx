import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registered");

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <form onSubmit={handleRegister} className="hero bg-slate-50 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse bg-white border border-slate-200 w-full max-w-md">
        <div className="card w-full shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center mt-6 font-bold text-base-200">
            Register now!
          </h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input border-slate-200 bg-slate-50 text-sm text-slate-900"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input border-slate-200 bg-slate-50 text-sm text-slate-900"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input
                className="btn btn-primary text-white font-semibold"
                type="submit"
                value="Register"
              />
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
