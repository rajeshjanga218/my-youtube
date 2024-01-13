import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-cols-12 p-2 border-b">
      <div className="col-span-2 flex gap-2">
        <img
          src="/svg/hamburger.svg"
          alt="hamburger"
          className="h-8 w-8 cursor-pointer"
          onClick={handleMenuClick}
        />
        <img
          src="/images/youtubeLogo.jpg"
          alt="youtubeLogo"
          className="h-10 w-15"
        />
      </div>
      <div className="">
        <input type="tex" placeholder="search" />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Header;
