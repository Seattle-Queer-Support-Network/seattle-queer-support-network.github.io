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
                        <a href={sub.path}>{sub.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        } else {
          return (
            <>
              <button
                id={item.title}
                className="after:content-none"
                popoverTarget={item.title}
                key={item.title}
              >
                <a href={item.path}>{item.title}</a>
              </button>
              <div popover={"auto"}></div>
            </>
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
                <summary>{item.title}</summary>
                <div className="ml-5 pt-3">
                  {item.subTitles.map((subtitle) => {
                    return (
                      <div key={subtitle.title} className=" p-3 purple-select">
                        <a href={subtitle.path}>{subtitle.title}</a>
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
              <a href={item.path}>{item.title}</a>
            </div>
          );
        }
      })}
    </>
  );
}
