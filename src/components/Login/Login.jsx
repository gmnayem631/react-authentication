import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState();
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("google sign in complete");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    console.log("github sign in");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .then((error) => console.log(error));
  };
  return (
    <div>
      <p> Please Login</p>

      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button onClick={handleGithubSignIn}>Sign in with GitHub</button>
        </>
      )}
      <h3>{user?.displayName}</h3>
      <p>{user?.email}</p>
      <img src={user?.photoURL} alt="" />
    </div>
  );
};

export default Login;
