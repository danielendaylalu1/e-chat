import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function SignOut({ setIsAuth }) {
  const signOutHandler = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
  };
  return (
    <div>
      <button onClick={signOutHandler}>SignOut</button>
    </div>
  );
}

export default SignOut;
