import type { Metadata } from "next";
import "./globals.css";
import pageData from "./ui/websiteData";
import { Menu } from "./ui/Menu";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

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
        <div className="hero min-h-screen flex flex-col">
          <Menu />
          <div className="main-box">
            <div className={"hero-content flex-col lg:flex-row"}>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </body>
      <div className="footer">
        <p> Website by Clare Mason</p>
        <div
          className="flex flex-row
"
        >
          <a
            className="icon"
            href="https://www.instagram.com/belovedsfoundation/"
          >
            <FaInstagram />
          </a>
          <a
            className="icon"
            href="https://www.facebook.com/rachaelbelovedsfoundation"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </html>
  );
}
