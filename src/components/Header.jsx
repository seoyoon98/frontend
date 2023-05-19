import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="flex justify-between items-center h-20 bg-orange-300 text-black ">
      <button>
        <FontAwesomeIcon icon="fa-solid fa-angle-left" />
      </button>
      <span className="">Yulgeon Menu Recommendation</span>
      <button className="text-2xl bg-white rounded-[16px] p-2 text-center">
        <FontAwesomeIcon icon="fa-regular fa-user" />
        <span>My Page</span>
      </button>
    </div>
  );
};

export default Header;
