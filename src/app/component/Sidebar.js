//Client side component
"use client";

import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("home");

  /**
   * On click set active  class
   * @param {*} item
   */
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const router = useRouter();
  return (
    <List className="p-4 bg-gray-800 text-white">
      <ListItemButton
        onClick={() => {
          handleItemClick("home");
          router.push("/");
        }}
        className={`${
          activeItem === "home" ? "bg-gray-600" : ""
        } hover:bg-gray-700 transition`}
      >
        <HomeIcon className="text-white mr-2" />
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          handleItemClick("about");
          router.push("About");
        }}
        className={`${
          activeItem === "about" ? "bg-gray-600" : ""
        } hover:bg-gray-700 transition`}
      >
        <InfoIcon className="text-white mr-2" />
        <ListItemText primary="About" />
      </ListItemButton>
    </List>
  );
};

export default Sidebar;
