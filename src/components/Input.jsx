import React from "react";

const Input = ({ kind, type, placeholder, onChange }) => {
  const onInputEnter = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-1 flex flex-col">
      <label htmlFor={kind} className={`text-xl mr-${kind === "ID" ? 6 : 4}`}>
        {kind}
      </label>
      <input
        onChange={onInputEnter}
        id={kind}
        type={type}
        className="min-w-[300px] border-2 border-[#e2e2e2] border-solid focus:outline-0 rounded-md px-1 py-1 placeholder-shown mb-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
