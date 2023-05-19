import React from "react";

const Input = ({ kind, type, placeholder }) => {
  return (
    <div className="mb-1">
      <label htmlFor={kind} className={`text-2xl mr-${kind === "ID" ? 6 : 4}`}>
        {kind}
      </label>
      <input
        id={kind}
        type={type}
        className="min-w-[300px] border-2 border-[#e2e2e2] border-solid focus:outline-0 rounded-md px-1 py-1 placeholder-shown"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
