import { type Metadata, type Viewport} from "next";

import "./globals.css";

type Layout = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: Layout) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Taslim Eniolla Inc.",
  description: "A portfolio web application showcasing some notable projects of mine.",
};

export const viewport: Viewport = {
  width: 'content-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}