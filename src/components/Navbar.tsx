import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import assistLogo from "../assets/branding/site-logo-long.png"; // <- keep your actual path

const navItems = [
  { to: "/", label: "Home" },
  { to: "/automations", label: "Automations" },
  { to: "/CaseStudies", label: "Case Studies" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-bg/80 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-4 py-3">
        {/* Top row */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <img
              src={assistLogo}
              alt="Assist.wtf"
              className="max-w-[150px] w-auto h-auto"
            />
          </NavLink>

          {/* Desktop nav */}
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
                      : "text-ink-muted hover:bg-white/5",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-ink md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span>Menu</span>
            <span className="relative flex h-3 w-3">
              <span
                className={`absolute inset-0 rounded-full border border-accent transition-transform transition-opacity ${
                  open ? "scale-50 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <span
                className={`absolute inset-0 rounded-full bg-accent transition-transform transition-opacity ${
                  open ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu (dropdown) */}
        {open && (
          <div className="mt-3 border-t border-white/5 pt-3 md:hidden">
            <div className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block rounded-full px-3 py-2",
                      isActive
                        ? "bg-accent text-black"
                        : "text-ink-muted hover:bg-white/5",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
