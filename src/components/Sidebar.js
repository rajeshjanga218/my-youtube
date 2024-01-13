import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isToggleMenu = useSelector((store) => store.app.isToggleMenu);
  return <>{isToggleMenu && <div className="col-span-1">Sidebar</div>}</>;
};

export default Sidebar;
