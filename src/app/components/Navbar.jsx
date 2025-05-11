"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavLink from "./NavLink";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Vision Mission", path: "/vision" },
  { title: "Company Values", path: "/values" },
  { title: "about", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Whenever the path changes, close the mobile menu
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  return (
    <nav className="w-full bg-white py-4 shadow-lg z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-black text-2xl font-bold tracking-tight transition-colors duration-200"
        >
          Treasured Care For You
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              href={link.path}
              className="text-black px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen((o) => !o)}
          className="md:hidden text-black p-2 rounded-md focus:outline-none"
        >
          {mobileMenuOpen ? (
            <IoClose size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="md:hidden"
      >
        <div className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 flex">
          <Dialog.Panel className="w-3/4 bg-pink p-4">
            {/* 1️⃣ Mobile Logo & Title */}
            <div className=" items-center mb-4">
              {/* Make sure you have /public/logo.png or replace with your path */}
              <img
                src="/dummy.png"
                alt="Logo"
                width={120}
                height={120}
                className="mx-auto my-2"
              />
              <span className="text-white text-xl font-semibold">
                Treasured Care For You
              </span>
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => (
               <button
                  key={link.path}
                  onClick={() => router.push(link.path)}
                  className="w-full text-left text-white hover:bg-white hover:text-pink px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </nav>
  );
}
