import React from "react";

const Message = ({ data }) => {
  const { name, message } = data;
  return (
    <div className="flex gap-1 p-2">
      <img src="/svg/profile.svg" alt="icon" className="w-5 h-5" />
      <div className="text-start text-gray-400">
        <p>{name}</p>
      </div>
      <div className="text-start">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
