import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import React from "react";

import {
  LayoutDashboard,
  SquarePen,
  Sparkles,
  Image,
  Eraser,
  FileSearch,
  Scissors,
  Users,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export const navItems = [
  { to: "/ai", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Sparkles },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Eraser },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileSearch },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Scissors },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ Sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 left-0 z-40 ${
        Sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="my-7 w-full px-3">
        <img
          src={user?.imageUrl}
          alt="User"
          className="w-14 h-14 rounded-full mx-auto object-cover"
        />
        <h1 className="text-center mt-2 text-sm font-semibold text-gray-800">
          {user?.fullName}
        </h1>

        <div className="flex flex-col gap-1 mt-6">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Profile Bar */}
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img
            src={user?.imageUrl}
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="leading-tight">
            <h1 className="text-sm font-medium text-gray-800">
              {user?.fullName}
            </h1>
            <p className="text-xs text-gray-500">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>{" "}
              Plan
            </p>
          </div>
        </div>
        <button
          onClick={signOut}
          className="text-gray-500 hover:text-red-500 transition"
        >
          <LogOut size={18} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
