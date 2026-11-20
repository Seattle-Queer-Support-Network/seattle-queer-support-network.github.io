import "./globals.css";
import { JsonLD } from "./ui/JsonLD";
import { Menu } from "./ui/Menu";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import websiteData from "./ui/websiteData";
import { Providers } from "./ui/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <JsonLD data={websiteData.jsonLD} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-w-sm max-w-xlg ">
        <Providers>
          <Menu />
          <div className="grid">
            <div
              id="root"
              className="hero-content flex-col justify-start justify-self-center min-h-screen "
            >
              {children}
            </div>
          </div>
          <div className="footer">
            <p> Website by Clare Mason</p>
            <div className="flex flex-row">
              <a className="icon" href="#">
                <FaInstagram />
              </a>
              <a className="icon" href="#">
                <FaTiktok />
              </a>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
