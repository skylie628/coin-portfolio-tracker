import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const setLinkStyle = ({ isActive }) =>
    `$ font-semibold ${isActive && "text-orange"}`;
  return (
    <nav className="">
      <ul className="flex gap-3 border-slate-500 rounded-full  bg-halfblack text-silver px-6 py-4">
        <li>
          <NavLink className={setLinkStyle} to="/dashboard">
            MARKET
          </NavLink>
        </li>
        <li>
          <NavLink className={setLinkStyle} to="/profolio">
            MY PORT
          </NavLink>
        </li>
        <li>
          <NavLink className={setLinkStyle} to="/analytics">
            STATS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
