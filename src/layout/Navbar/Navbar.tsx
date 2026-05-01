import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-dark/60 border-b border-white/10 shadow-lg">
      
      <div className="flex items-center justify-between px-6 md:px-16 h-16">

        {/* 🔥 Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer">
          Aniket
        </h1>

        {/* 🖥️ Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative transition ${
                pathname === item.path
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {item.name}

              {/* 🔥 Active Underline */}
              {pathname === item.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-primary to-secondary rounded" />
              )}
            </Link>
          ))}
        </nav>

        {/* 📱 Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-dark/95 backdrop-blur-xl px-6 py-4 space-y-4 border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block ${
                pathname === item.path
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;