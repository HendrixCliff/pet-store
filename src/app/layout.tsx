import type { Metadata } from "next";
import "./globals.css";


export const revalidate = 1000

export const metadata: Metadata = {
  title: "Pet Store and Meds",
  description: "We priortize your pets more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
           {children}
        </main>
       </body>
    </html>
  );
}
