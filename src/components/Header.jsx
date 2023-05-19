import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="text-3xl flex justify-between items-center px-8 h-24 bg-orange-300/[0.75] text-black">
      <a href="/">
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <span className="italic select-none">Yulgeon Menu Recommendation</span>
      <a
        href="/"
        className="text-lg bg-white rounded-[16px] p-3 text-center hover:bg-[#e1e1e1] duration-150"
      >
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        <span>My Page</span>
      </a>
    </div>
  );
};

export default Header;
