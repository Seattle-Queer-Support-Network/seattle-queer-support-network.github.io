import "./globals.css";
import { JsonLD } from "./ui/JsonLD";
import { Menu } from "./ui/Menu";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import websiteData from "./ui/websiteData";
import { Providers } from "./ui/providers";
import UnderConstruction from "./ui/UnderConstruction";
import { config } from "./config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(config.under_construction);
  return (
    <html suppressHydrationWarning>
      <head>
        <JsonLD data={websiteData.jsonLD} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-w-sm max-w-xlg ">
        {process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION == "true" ? (
          <UnderConstruction />
        ) : (
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
            <div className="footer base-font">
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
        )}
      </body>
    </html>
  );
}
