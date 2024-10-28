"use client";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Header from "./layout/header";
import store from '../store/store'
import { Provider } from "react-redux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh]`}
      >
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
