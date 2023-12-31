import React from "react";
import { NavLink } from "react-router-dom";
export const menuItems = [
  {
    name: "Market",
    path: "/market",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Stats",
    path: "/statistics",
  },
];
export default function Nav() {
  const setLinkStyle = ({ isActive }) =>
    `$ font-semibold ${isActive && "text-orange"}`;
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-3 border-slate-500 rounded-full  bg-halfblack text-silver px-6 py-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink className={setLinkStyle} to={item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
