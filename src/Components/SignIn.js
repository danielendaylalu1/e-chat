import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function SignIn({ setIsAuth }) {
  const signInHandler = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      cookies.set("auth-token", user.user.refreshToken);
      setIsAuth(true);
      //   console.log(user);
    } catch (err) {
      console.log(err);
      return;
    }
  };
  return (
    <div>
      <button onClick={signInHandler}>Sign In With Google</button>
    </div>
  );
}

export default SignIn;
