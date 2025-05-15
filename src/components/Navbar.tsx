
import { useState } from "react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header id="home" className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container flex justify-between items-center py-4">
        <div className="font-bold text-xl tracking-tight text-accent">Photoshoto</div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="nav-underline transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col items-center h-8 w-8 justify-center focus:outline-none"
          aria-label="Open menu"
          onClick={() => setOpen((p) => !p)}
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white/95 border-b border-gray-100 transition-all duration-300 overflow-hidden ${
          open ? "max-h-32 py-2" : "max-h-0"
        }`}
        aria-expanded={open}
      >
        <ul className="flex flex-col items-center space-y-2 font-medium pb-2">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-4 py-2 nav-underline transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
