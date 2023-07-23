import SignIn from "./Components/SignIn";
import { useState } from "react";
import SignOut from "./Components/SignOut";
import Cookies from "universal-cookie";
import Chat from "./Components/Chat";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  return (
    <div>
      {isAuth ? (
        <div>
          <Chat />
          <SignOut setIsAuth={setIsAuth} />
        </div>
      ) : (
        <>
          <SignIn setIsAuth={setIsAuth} />
        </>
      )}
    </div>
  );
}

export default App;
