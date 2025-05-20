import React from "react";
import Link from "next/link";
import { User } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">MySite</div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
      <Link href={"/users"}>
        <User></User>
      </Link>
    </nav>
  );
}
