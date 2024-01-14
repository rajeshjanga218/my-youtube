import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const sectionsList = [
  { section: "Home", path: "/" },
  { section: "Home", path: "/" },
  { section: "Home", path: "/" },
  { section: "Home", path: "/" },
];

const Sidebar = () => {
  const isToggleMenu = useSelector((store) => store.app.isToggleMenu);
  return (
    <>
      {isToggleMenu && (
        <ul className="col-span-1">
          {sectionsList.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <Link to={item.path}>{item.section}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sidebar;
