import React, { useState } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
import MyPage from "./components/MyPage";
import StartPage from "./components/StartPage";

function App() {
  const [login, setLogin] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [myPageOpen, setMyPageOpen] = useState(false);

  return (
    <div className="w-screen relative">
      <Header
        login={login}
        onLogout={setLogin}
        isLoginOpen={loginModalOpen}
        onLoginClick={setLoginModalOpen}
        isMyPageOpen={myPageOpen}
        onMyPageClick={setMyPageOpen}
      />
      {/* <StartPage /> */}
      {loginModalOpen ? (
        <Login isLoginOpen={loginModalOpen} onXClick={setLoginModalOpen} />
      ) : null}
      {myPageOpen ? <MyPage /> : null}
    </div>
  );
}

export default App;
