import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phaneendra Kanduri Portfolio",
  description: "Creation of Phaneendra",
  openGraph: {
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/14833423?v=4&size=40",
        width: 1200,
        height: 630,
        alt: "Phaneendra Swag Favicon",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
