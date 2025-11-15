import React from "react";
import { NavLink, Link } from "react-router-dom";
import assistLogo from "../assets/branding/site-logo-long.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/automations", label: "Automations" },
  { to: "/case-studies", label: "Case Studies" }
];

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={assistLogo}
              alt="Assist.wtf"
              className="max-w-[150px] w-auto h-auto"
            />
          </Link>
        </div>

        <div className="hidden gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "px-3 py-1 rounded-full transition",
                  isActive
                    ? "bg-accent text-black"
                    : "text-ink-muted hover:bg-white/5"
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
