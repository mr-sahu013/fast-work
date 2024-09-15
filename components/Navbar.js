import { useState } from "react";
import Link from "next/link";
import Clock from "../pages/clock";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mathCalculator", label: "Math-Calculator" },
    { href: "/ageCalculator", label: "Age-Calculator" },
    { href: "/tipCalculator", label: "Tip-Calculator" },
    { href: "/TicTacToe", label: "TicTacToe" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-2 sticky top-0">
      <div className="container mx-auto flex  justify-between items-center">
        <div className="flex items-center">
          <Link href={"/"}>
            <img
              src="/fast-work.png"
              alt="Logo"
              className="h-12 w-12 mr-2 rounded-full"
            />
          </Link>
          <Link href={"/"}>
            <div className="flex flex-col ">
              <span className="text-white font-mono text-2xl">Fast-Work</span>
              <span className="text-white font-mono text-xs text-center">
                www.fastwork.com
              </span>
            </div>
          </Link>
        </div>
        <Clock />

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6  my-2 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <hr className="my-1  hidden md:block " />
      <div className="nav">
        <div className="hidden justify-end mx-3 md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <p className="text-white hover:text-gray-400">{link.label}</p>
            </Link>
          ))}
        </div>
        <hr className="hidden md:block" />
        {isOpen && (
          <div className="md:hidden text-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <p className="block text-white hover:text-gray-400 p-2">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
