import React, { useEffect } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/liveChatSlice";
import { getRandomName, getRandomSmsText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatList = useSelector((store) => store.chat?.chatList);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addChat({ name: getRandomName(), message: getRandomSmsText() }));
    }, 200);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="h-[450px] overflow-y-auto flex flex-col-reverse bg-green-200">
      {chatList.map((item, index) => (
        <Message key={index} data={item} />
      ))}
    </div>
  );
};

export default LiveChat;
