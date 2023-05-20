import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import Input from "./Input";

const Login = ({ isSignUpOpen, setSignUpModalOpen, setLogin }) => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [PWC, setPWC] = useState("");

  const onXBtnClick = () => {
    setSignUpModalOpen(!isSignUpOpen);
  };

  const onSignUpCompleteBtnClick = () => {
    if (!ID.includes("@g.skku.edu") && !ID.includes("@skku.edu")) {
      alert("Your ID must include @g.skku.edu or @skku.edu");
      return;
    } else if (PW !== PWC) {
      alert("Password and Password Confirmation are different.");
      return;
    }
    setLogin(true);
    setSignUpModalOpen(false);
  };

  return (
    <div className="absolute top-[50%] right-[50%] translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center bg-slate-300/[0.5] w-[570px] h-[570px] rounded-3xl">
      <h3 className="text-4xl mb-10 pb-1 select-none border-b-4 border-solid border-[#00ff00]/[0.3]">
        Sign Up
      </h3>
      <div>
        <Input
          kind="ID"
          type="email"
          placeholder="SKKU Account"
          onChange={setID}
        />
        <Input
          kind="PW"
          type="text"
          placeholder="SKKU Password"
          onChange={setPW}
        />
        <Input
          kind="PW Confirm"
          type="text"
          placeholder="Password Confirmation"
          onChange={setPWC}
        />
      </div>
      <button
        onClick={onSignUpCompleteBtnClick}
        className="text-xl rounded-lg mt-5 bg-lime-500 px-4 py-2 hover:bg-lime-500/[0.6] duration-150"
      >
        Sign Up
      </button>
      <button onClick={onXBtnClick}>
        <FontAwesomeIcon
          icon={faX}
          className="absolute top-7 right-7 text-2xl text-black/[0.8] cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Login;
