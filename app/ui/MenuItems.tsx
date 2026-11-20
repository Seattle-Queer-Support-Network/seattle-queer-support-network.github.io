import React from "react";
import { PageData } from "./websiteData";

export function MenuItems(props: { items: PageData[] }) {
  const { items } = props;

  return (
    <>
      {items.map((item) => {
        if (item.subTitles) {
          return (
            <div key={item.title}>
              <button popoverTarget={item.title}>{item.title}</button>
              <div id={item.title} popover={"auto"}>
                <ul className="menu">
                  {item.subTitles.map((sub) => {
                    return (
                      <li key={sub.title}>
                        <a className="dropdown-menu-item" href={sub.path}>
                          {sub.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        } else {
          return (
            <React.Fragment key={item.title}>
              <button
                id={item.title}
                className="after:content-none"
                popoverTarget={item.title}
                key={item.title}
              >
                <a href={item.path}>{item.title}</a>
              </button>
              <div popover={"auto"}></div>
            </React.Fragment>
          );
        }
      })}
    </>
  );
}

export function MoblieMenuItems(props: { items: PageData[] }) {
  const { items } = props;
  return (
    <>
      {items.map((item) => {
        if (item.subTitles) {
          return (
            <div key={item.title} className="p-3 ">
              <details>
                <summary className="base-font">{item.title}</summary>
                <div className="ml-5 pt-3">
                  {item.subTitles.map((subtitle) => {
                    return (
                      <div key={subtitle.title} className=" p-3 purple-select">
                        <a className="base-font" href={subtitle.path}>
                          {subtitle.title}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </details>
            </div>
          );
        } else {
          return (
            <div key={item.title} className="p-3 purple-select">
              <a className="base-font" href={item.path}>
                {item.title}
              </a>
            </div>
          );
        }
      })}
    </>
  );
}
