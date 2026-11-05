"use client";
import websiteData from "./websiteData";
import { MenuItems, MoblieMenuItems } from "./MenuItems";
import React from "react";

export function Menu() {
  const [showMoblieBar, setShowMoblieBar] = React.useState(false);
  const onClick = () => setShowMoblieBar(!showMoblieBar);

  return (
    <div className="max-lg:collapse bg-base-200 w-full rounded-md ">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar menu-custom">
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-custom mr-5 min-xl:hidden"
            onClick={onClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <a href="/">
            <h1 className="text-3xl">LOGO</h1>
          </a>
        </div>
        <div className="navbar-center hidden xl:flex">
          <div
            className="megamenu max-xl:megamenu-vertical"
            id="my-megamenu-1"
            popover={"auto"}
          >
            <span className="megamenu-active"></span>
            <MenuItems items={websiteData.pages} />
          </div>
        </div>
        <div className=" max-xl:invisible navbar-end  ">
          <a className="  btn m-3 btn-custom " href="/donate">
            Donate
          </a>
        </div>
      </div>
      {showMoblieBar ? (
        <div className=" xl:hidden flex justify-center transition-all transition-discrete">
          <div className=" m-2  text-xl">
            <MoblieMenuItems items={websiteData.pages} />
            <a className="btn m-3 btn-custom w-50" href="/donate">
              Donate
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
