import type { Metadata } from "next";
import "./globals.css";
import pageData from "./ui/websiteData";
import { Menu } from "./ui/Menu";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export const metadata: Metadata = {
  title: pageData.websiteTitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Menu />
        <div
          id="root"
          className=" flex flex-col items-center lg:pl-10 lg:pr-10 pt-10 m-10"
        >
          {children}
        </div>
      </body>
      <div className="footer">
        <p> Website by Clare Mason</p>
        <div
          className="flex flex-row
"
        >
          <a className="icon" href="#">
            <FaInstagram />
          </a>
          <a className="icon" href="#">
            <FaTiktok />
          </a>
        </div>
      </div>
    </html>
  );
}
