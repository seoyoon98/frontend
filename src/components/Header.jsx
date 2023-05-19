import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = ({ isLoginOpen, onLoginClick, isMyPageOpen, onMyPageClick }) => {
  const [login, setLogin] = useState(true);

  const onClickLoginBtnClick = () => {
    onLoginClick(!isLoginOpen);
  };

  const onMyPageBtnClick = () => {
    onMyPageClick(!isMyPageOpen);
  };

  const upperButton = login ? (
    <button
      className="text-lg bg-white rounded-[16px] p-3 text-center hover:bg-[#e1e1e1] duration-150"
      onClick={onMyPageBtnClick}
    >
      <FontAwesomeIcon icon={faUser} className="mr-2" />
      <span>My Page</span>
    </button>
  ) : (
    <div className="flex">
      <button
        onClick={onClickLoginBtnClick}
        className="text-xl mr-6 hover:text-[#111111]/[0.5] duration-100"
      >
        Login
      </button>
      <button className="text-xl hover:text-[#111111]/[0.5] duration-100">
        Sign up
      </button>
    </div>
  );

  return (
    <div className="fixed top-0 z-3 w-full text-3xl flex justify-between items-center px-8 h-20 bg-orange-300/[0.75] text-black">
      <a href="/" className="hover:text-slate-600/[0.8] duration-200">
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <span className="italic select-none">Yulgeon Menu Recommendation</span>
      {upperButton}
    </div>
  );
};

export default Header;
