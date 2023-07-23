import SignIn from "./Components/SignIn";
import { useState } from "react";
import SignOut from "./Components/SignOut";
import Cookies from "universal-cookie";
import Chat from "./Components/Chat";
import Users from "./Components/Users";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  return (
    <div className="app">
      <h1 className="app-header">E-chat</h1>
      {isAuth ? (
        <div>
          <SignOut setIsAuth={setIsAuth} />
          <div className="main">
            <Users />
            <Chat />
          </div>
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
