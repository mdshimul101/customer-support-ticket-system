import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 border-b shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-6 py-3">

        {/* Left Side - Logo */}
        <div className="flex-1">
          <h1 className="text-xl font-bold text-gray-800">
            CS — Ticket System
          </h1>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex-none lg:hidden border border-gray-400 rounded-md">
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-square btn-ghost text-gray-700 hover:text-gray-100 rounded-md"
            aria-label="Toggle menu"
          >
            <FiMenu className="bold text-2xl"/>
          </button>
        </div>

        {/* Right Side - Menu for large screens */}
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-1 text-gray-600 font-medium">
            <li><a className="hover:text-black">Home</a></li>
            <li><a className="hover:text-black">FAQ</a></li>
            <li><a className="hover:text-black">Changelog</a></li>
            <li><a className="hover:text-black">Blog</a></li>
            <li><a className="hover:text-black">Download</a></li>
            <li><a className="hover:text-black">Contact</a></li>

            {/* Gradient Button */}
            <li>
              <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-linear-to-r from-violet-800 to-purple-400 text-white \
              transition-all duration-300 shadow-md">
                <FaPlus />
                New Ticket
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <ul className="menu menu-vertical px-6 py-4 gap-2 text-gray-600 font-medium">
            <li><a className="hover:text-black">Home</a></li>
            <li><a className="hover:text-black">FAQ</a></li>
            <li><a className="hover:text-black">Changelog</a></li>
            <li><a className="hover:text-black">Blog</a></li>
            <li><a className="hover:text-black">Download</a></li>
            <li><a className="hover:text-black">Contact</a></li>
            <li>
              <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-linear-to-r from-violet-800 to-purple-400 text-white \
              transition-all duration-300 shadow-md">
                <FaPlus />
                New Ticket
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;