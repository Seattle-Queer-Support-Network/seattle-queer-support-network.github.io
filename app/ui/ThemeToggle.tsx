import { useTheme } from "next-themes";
import { useEffect } from "react";
import { IoMdSettings } from "react-icons/io";

export function ThemeToggle() {
  const themes = ["default", "OpenDyslexic"];
  const { theme, setTheme } = useTheme();

  useEffect(() => {}, [theme]);
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <IoMdSettings className="text-lg p-0" />
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
      >
        {themes.map((themeName) => {
          return (
            <li key={themeName}>
              <a
                className="text-xs capitalize text-black
"
                onClick={() => setTheme(themeName)}
              >
                {themeName} {theme == themeName ? "✓" : null}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
