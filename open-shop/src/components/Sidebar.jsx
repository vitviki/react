import React from "react";
import { Link } from "react-router-dom";
import { BsShopWindow } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../constants/index";
import SiderbarLink from "./SiderbarLink";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 w-72 text-white p-3">
      <div className="flex-1">
        <Link to="/" className="flex gap-5 items-center px-1 py-3">
          <BsShopWindow fontSize={24} className="text-green-600" />
          <span className=" font-montserrat text-2xl">OpenShop</span>
        </Link>
        <div className=" flex flex-col mt-4 gap-4">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SiderbarLink
              key={item.key}
              label={item.label}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col border-t gap-2">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SiderbarLink
            key={item.key}
            label={item.label}
            path={item.path}
            icon={item.icon}
          />
        ))}
        <Link
          to="/signout"
          className="flex items-center gap-2 font-light py-2 px-3 hover:bg-neutral-700 active:bg-neutral-700 rounded-sm text-xl text-red-400"
        >
          <span className="text-2xl">
            <FaSignOutAlt />
          </span>
          <span className=" font-palanquin">Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
