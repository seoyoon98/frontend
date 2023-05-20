import React from "react";

import userProfile from "../assets/user.png";

const MyPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-24 pt-20 h-screen bg-[#e1e1e1]/[0.3] p-8">
      <div className="flex justify-center items-center mb-20 bg-lime-500/[0.7] p-8 pr-12 rounded-xl">
        <img
          className="w-[120px] h-[120px] mr-12 rounded-full"
          src={userProfile}
          alt="Profile Img"
        />
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl">Name: Team</span>
          <span className="text-2xl">ID: SKKU-Team5@g.skku.edu</span>
        </div>
      </div>
      <p className="font-bold text-4xl mb-8">최근 방문</p>
      <ul className="text-2xl min-w-[300px] flex flex-col justify-start items-center mb-[250px]">
        <li className="bg-orange-500/[0.7] p-4 mb-4 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="bg-orange-500/[0.7] p-4 mb-4 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="bg-orange-500/[0.7] p-4 mb-4 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="bg-orange-500/[0.7] p-4 mb-4 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="bg-orange-500/[0.7] p-4 mb-4 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
      </ul>
    </div>
  );
};

export default MyPage;
