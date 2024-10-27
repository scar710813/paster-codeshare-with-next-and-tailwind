import Image from "next/image";
import Link from "next/link";
import Header from "./layout/header";
import Layout from "./layout";

export default function Home({ children }) {
  return (
    <div className="">
      <header className="border-b border-gray-100 flex justify-between px-8 h-[60px] font-sans">
        <Header />
      </header>
    </div>
  );
}
