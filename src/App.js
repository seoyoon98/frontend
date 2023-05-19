import React, { useState } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
import MyPage from "./components/MyPage";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [myPageOpen, setMyPageOpen] = useState(false);

  return (
    <div className="w-screen relative">
      <Header
        isLoginOpen={loginModalOpen}
        onLoginClick={setLoginModalOpen}
        isMyPageOpen={myPageOpen}
        onMyPageClick={setMyPageOpen}
      />
      {loginModalOpen ? (
        <Login isLoginOpen={loginModalOpen} onXClick={setLoginModalOpen} />
      ) : null}
      <MyPage />
    </div>
  );
}

export default App;
