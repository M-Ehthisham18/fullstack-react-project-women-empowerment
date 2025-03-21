import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ icon = "", route="/", name="*" }) => {
  
  
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>  
        `flex gap-x-2 transition-all ${isActive ? "bg-white opacity-95 p-2 px-3 rounded-md text-violet-700 " : ""}`
      }
    >
      {/* Conditional rotation for the icon */}
      {/* {{icon} && <span>
        {icon}
      </span>} */}
      { icon ? (<span>
        {icon}
      </span>) : ""}
      <span>{name}</span>
    </NavLink>
  );
};

export default Navlink;

