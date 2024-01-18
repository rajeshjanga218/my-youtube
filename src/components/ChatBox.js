import React, { useState } from "react";

const ChatBox = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="flex justify-center gap-2">
      <input
        className="rounded-xl py-1 px-2"
        type="text"
        placeholder="chat ...."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-slate-300">
        <img
          src="/svg/paperPlane.svg"
          className="w-4 h-4 cursor-pointer"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default ChatBox;
