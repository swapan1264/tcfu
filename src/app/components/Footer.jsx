import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink text-white mt-32 rounded-b-none rounded-tl-[1rem] rounded-tr-[1rem] ">
      {/* Top links */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <Link href="/">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <img
              src= "./logo.jpg"
              alt="Tcare for you"
              className="h-32 w-auto mb-4 mx-auto"
            />
            <span className="text-3xl font-extrabold text-white text-center font-heading">
              Treasured Care For You
            </span>
          </div>
        </Link>

        {/* Column 1 */}
        {/* <div>
          <h4 className="font-extrabold mb-3 text-2xl text-white">Tcare for you</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About us
              </a>
            </li>
          </ul>
        </div> */}

        {/* Column 2 */}
        <div>
          <h4 className="font-extrabold mb-3 text-2xl text-white font-heading">
            Our services
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/vision" className="hover:underline font-heading">
                Vision Mission
              </Link>
            </li>
            <li>
              <Link href="/values" className="hover:underlin font-headinge">
                Company Values
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underlin font-headinge">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-extrabold mb-3 text-2xl text-white font-heading">
            Contact us
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="tel:+610392679030" className="hover:underline font-heading">
               +61 0392679030
              </a>
            </li>
            <li>
              <a href="mailto:Enquiries@treasuredcareforyou.com" className="hover:underline font-heading">
                Enquiries@treasuredcareforyou.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-extrabold mb-3 text-2xl text-white font-heading">
            Follow us on
          </h4>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-blue-600"
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Copyright & Links */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-center items-center text-sm text-white space-y-4 sm:space-y-0 ">
        <span className="text-center font-extrabold text-1xl">
          © 2025 Treasured Care For You
        </span>
      </div>
    </footer>
  );
}
