import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-12">
      {/* Decorative SVG */}
      <svg
        className="hidden md:block absolute -bottom-40 -left-80 opacity-5 w-full h-full pointer-events-none"
        viewBox="0 0 68 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M16.141 0C13.4854 0 10.9387 1.04871 9.06091 2.91543L2.93268 9.00761C1.05492 10.8743 0 13.4061 0 16.0461C0 21.5435 4.48289 26 10.0128 26C12.6684 26 15.2152 24.9512 17.0929 23.0845L33.6827 6.59239C34.5795 5.70086 35.7958 5.2 37.0641 5.2C39.1874 5.2 40.9876 6.57576 41.6117 8.47953L45.5096 4.60457C43.7314 1.83589 40.6134 0 37.0641 0Z"
            fill="#364153"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="68" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Quick.ai</h2>
          <p className="text-sm/7 mt-4">
            Quick.ai is an AI-powered writing platform to generate articles,
            blog titles, and creative content instantly with ease.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col space-y-2.5">
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <a className="hover:text-slate-600 transition" href="#">
              About
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Careers
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Contact
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-5">Newsletter</h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>Get AI tips, updates and resources directly in your inbox.</p>
            <div className="flex items-center">
              <input
                className="rounded-l-md bg-gray-100 outline-none w-full h-11 px-3"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 transition px-4 h-11 text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-10 border-slate-200">
        <p className="text-center">© 2025 Quick.ai — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
