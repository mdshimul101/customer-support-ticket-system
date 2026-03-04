import React from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 min-h-screen">
      <div className="w-full px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6  gap-10">
          {/* Left Description */}
          <div className="lg:col-span-2">
            <h2 className="text-white text-2xl font-semibold mb-4">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-6 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Our Mission</li>
              <li className="hover:text-white transition">Contact Saled</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition">
                Products & Services
              </li>
              <li className="hover:text-white transition">Customer Stories</li>
              <li className="hover:text-white transition">Download Apps</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">
                Terms & Conditions
              </li>
              <li className="hover:text-white transition">Join Us</li>
            </ul>
          </div>
          {/* Social Links */}
          <div className="">
            <div className="">
              <h3 className="text-white font-semibold mb-4">Social Links</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3 hover:text-white transition">
                  <FaXTwitter className="text-white" />
                  @CS — Ticket System
                </li>
                <li className="flex items-center gap-3 hover:text-white transition">
                  <FaLinkedinIn className="text-white" />
                  @CS — Ticket System
                </li>
                <li className="flex items-center gap-3 hover:text-white transition">
                  <FaFacebookF className="text-white" />
                  @CS — Ticket System
                </li>
                <li className="flex items-center gap-3 hover:text-white transition">
                  <FaEnvelope className="text-white" />
                  support@cst.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
