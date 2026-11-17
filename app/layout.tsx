import "./globals.css";
import pageData from "./ui/websiteData";
import { Menu } from "./ui/Menu";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className="min-w-sm max-w-xlg ">
        <Menu />
        <div className="grid">
          <div
            id="root"
            className="hero-content flex-col justify-start
 justify-self-center
  min-h-screen lg:pl-10 lg:pr-10 pt-10 m-10"
          >
            {children}
          </div>
        </div>
        <div className="footer">
          <p> Website by Clare Mason</p>
          <div
            className="  flex flex-row
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
      </body>
    </html>
  );
}
