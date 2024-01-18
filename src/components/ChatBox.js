import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../utils/liveChatSlice";

const ChatBox = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const handleFormSubmitClick = (e) => {
    e.preventDefault();
    dispatch(addChat({ name: "Rajesh", message: inputText }));
    setInputText("");
  };
  return (
    <form
      className="flex justify-center gap-1 border p-2"
      onSubmit={(e) => handleFormSubmitClick(e)}
    >
      <input
        className="rounded-md py-1 px-2"
        type="text"
        placeholder="chat ...."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-slate-300">
        <button type="submit">
          <img
            src="/svg/paperPlane.svg"
            className="w-4 h-4 cursor-pointer"
            alt="icon"
          />
        </button>
      </div>
    </form>
  );
};

export default ChatBox;
