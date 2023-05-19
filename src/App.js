import React, { useState } from "react";

import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="w-screen relative">
      <Header isLoginOpen={loginModalOpen} onLoginClick={setLoginModalOpen} />
      {loginModalOpen ? (
        <Login isLoginOpen={loginModalOpen} onXClick={setLoginModalOpen} />
      ) : null}
    </div>
  );
}

export default App;
