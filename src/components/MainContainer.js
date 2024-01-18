import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isToggleMenu = useSelector((store) => store.app?.isToggleMenu);
  return (
    <div
      className={`${
        isToggleMenu ? "col-span-10" : "col-span-12 flex flex-col items-center"
      } `}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
