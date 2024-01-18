import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux";
import ChatBox from "./ChatBox";

const WatchContainer = () => {
  const [searchParams] = useSearchParams();
  const isToggleMenu = useSelector((store) => store.app?.isToggleMenu);

  const videoId = searchParams.get("v");
  return (
    <div
      className={`${
        isToggleMenu ? "col-span-10" : "col-span-12 flex flex-col "
      } grid grid-cols-12`}
    >
      <div className="col-span-9 flex flex-col items-center px-2">
        <iframe
          width="750"
          height="450"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>

      <div className="col-span-3 bg-slate-300">
        <LiveChat />
        <ChatBox />
      </div>
    </div>
  );
};

export default WatchContainer;
