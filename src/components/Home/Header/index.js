"use client";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MdClear } from "react-icons/md";

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const close = () => {};

  const DrawerList = (
    <Box
      sx={{ width: 450, marginLeft: 3 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className=" flex">
        <h3 className="font-bold text-2xl text-black  ml-[20px] mt-[20px]">
          Ecommerce
        </h3>
        <button
          className="mt-[20px] font-bold text-4xl md:ml-[220px] ml-[100px]"
          onClick={toggleDrawer(false)}
        >
          {" "}
          <MdClear />
        </button>
      </div>

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex gap-2 h-[80px]  lg:px-10 px-4  bg-white lg:mr-0 justify-between fgfhg ">
      <div className="w-[5%] flex flex-row items-center md:pl-[30px] text-5xl ">
        <button onClick={toggleDrawer(true)}>
          {" "}
          <IoMenu />{" "}
        </button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      {/* <div className=""> */}
      <div className="flex-row items-center justify-center  font-bold w-[17%] lg:flex hidden ">
        E-COMMERCE
      </div>
      <div className="w-[45%]  flex-row items-center gap-7 lg:flex hidden">
        {/* <div className="px-[10px] cursor-pointer hover:border-b-4 border-pink-500 rounded-md">
            </div> */}
        <div className="px-[10px] cursor-pointer  hover:text-gray-400 rounded-md lg:flex hidden">
          <a className="font-bold">HOME</a>
        </div>
        {/* <div className="px-[10px] cursor-pointer hover:border-b-4 border-pink-500 rounded-md">
              <a className="font-bold">CLOTHS</a>
            </div>
            <div className="px-[10px] cursor-pointer hover:border-b-4 border-pink-500 rounded-md">
              <a className="font-bold">ACESSORIES</a>
            </div> */}
        <div className="px-[10px] cursor-pointer  hover:text-gray-400 rounded-md lg:flex hidden ">
          <a className="font-bold">ABOUT US </a>
        </div>
        <div className="px-[10px] cursor-pointer  hover:text-gray-400 rounded-md lg:flex hidden">
          <a className="font-bold">CONTACT US</a>
        </div>
      </div>
      <div className="w-[35%]  flex justify-center items-center lg:flex hidden ">
        {/* <div className="h-[60%] w-[12%] bg-[#F5F5F6] text-4xl flex justify-center rounded-full items-center  text-gray-400  ">

              <CiSearch />
            </div> */}

        <input
          className="h-[60%] w-[80%] bg-[#F5F5F6]  rounded-full justify-center  items-center"
          type="text"
          placeholder="     search your pro"
        />
      </div>
      {/* </div> */}
      <div className="md:w-[20%] flex flex-row ml-18 gap-4 lg:gap-0 lg:ml-0">
        <div className="flex-1 flex flex-col justify-center ">
          <div className="flex justify-center text-2xl ">
            <IoPersonOutline />
          </div>
          <div className="flex justify-center">
            <Link href="/Login">
              <p className="font-bold text-[15px]  hover:text-gray-400 rounded-md ">
                profile
              </p>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-center text-2xl">
            <CiHeart />
          </div>
          <div className="flex justify-center">
            <p className="font-bold text-[15px]  hover:text-gray-400 rounded-md">
              wishlist
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-center text-2xl">
            <IoBagOutline />
          </div>
          <div className="flex justify-center">
            <p className="font-bold items-center justify-center text-[15px]  hover:text-gray-400">
              bag
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
