import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const sectionsList = [
  { section: "Home", icon: "/svg/home.svg", path: "/" },
  { section: "Shorts", icon: "/svg/shots.svg", path: "/" },
  { section: "Subscription", icon: "/svg/subscriptions.svg", path: "/" },
  { section: "Library", icon: "/svg/library.svg", path: "/" },
];

const Sidebar = () => {
  const isToggleMenu = useSelector((store) => store.app.isToggleMenu);
  return (
    <>
      {isToggleMenu && (
        <ul className="col-span-2 p-2">
          {sectionsList.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <Link to={item.path}>
                <div className="flex items-center p-2 rounded-md hover:bg-gray-50 gap-2">
                  <img src={item.icon} alt={item.section} className="w-5 h-5" />
                  <p>{item.section}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sidebar;
