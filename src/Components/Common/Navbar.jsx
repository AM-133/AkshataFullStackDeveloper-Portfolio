import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, scroller } from "react-scroll";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { CoolMode } from "./../ui/cool-mode";

const navItems = [
  "About",
  "Skills",
  "Experience",
  "Work",
  "Certificates",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const textColor = darkMode ? "text-white" : "text-black";

  const navbarBg = scrolled
    ? darkMode
      ? "bg-black/70 border-white/10"
      : "bg-white/70 border-black/10"
    : darkMode
    ? "bg-[#0A0A0A]"
    : "bg-white";

  return (
    <motion.header
      animate={{
        width: scrolled ? "80%" : "100%",
        top: scrolled ? 20 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed left-1/2 top-0 z-100 w-full -translate-x-1/2 px-4 ${
  scrolled
    ? "bg-transparent"
    : darkMode
    ? "bg-[#0A0A0A]"
    : "bg-white"
}`}
    >
      <div
        className={`mx-auto flex h-16 items-center justify-between rounded-full px-5 transition-all duration-300 backdrop-blur-xl ${
          scrolled ? "max-w-5xl border" : "w-full"
        } ${navbarBg}`}
      >
        {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
  <div
    className={`flex h-9 w-9 items-center justify-center transition-colors duration-300 ${
      darkMode ? "text-white" : "text-black"
    }`}
  >
    <CodeOffIcon fontSize="medium" />
  </div>

  <span className={`text-2xl  ${textColor}`}>
    Akshata.dev
  </span>
</div>

        {/* Desktop Menu */}
   <nav
  className={`hidden md:flex items-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
    darkMode
      ? "border-white/10 bg-white/5"
      : "border-black/10 bg-black/[0.03]"
  } ${textColor}
  ${
    scrolled
      ? "gap-3 px-4 py-2"
      : "gap-5 px-6 py-2.5"
  }`}
>
  {navItems.map((item) => (
    <Link
      key={item}
      to={item.toLowerCase()}
      smooth
      duration={500}
      offset={item === "About" ? 0 : -100}  
      className={`cursor-pointer font-medium transition
  ${
    scrolled
      ? "text-xs"
      : "text-sm"
  }
  ${
    darkMode
      ? "hover:text-violet-300"
      : "hover:text-violet-600"
  }`}
    >
      {item}
    </Link>
  ))}
</nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative flex h-10 w-20 items-center rounded-full border p-1 transition-all duration-300 ${
              darkMode
                ? "border-white/20 bg-black"
                : "border-black/20 bg-white"
            }`}
          >
            <div
              className={`absolute left-1 top-1 h-8 w-8 rounded-full transition-transform duration-300 ${
                darkMode
                  ? "translate-x-0 bg-white"
                  : "translate-x-10 bg-black"
              }`}
            />

            <div className="z-10 flex w-1/2 justify-center">
              <DarkModeIcon
                fontSize="small"
                className={
                  darkMode ? "text-black" : "text-gray-500"
                }
              />
            </div>

            <div className="z-10 flex w-1/2 justify-center">
              <LightModeIcon
                fontSize="small"
                className={
                  darkMode ? "text-gray-500" : "text-white"
                }
              />
            </div>
          </button>

          {/* Hire Me */}
          {!scrolled && (
               <CoolMode>
            <button
  onClick={() =>
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
      offset: -100,
    })
  }
  className="hidden rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 px-7 py-2.5 font-semibold text-white transition hover:scale-105 lg:block"
>
  Hire Me
</button>
</CoolMode>
          )}

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden ${textColor}`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className={`mt-3 rounded-3xl p-6 backdrop-blur-xl lg:hidden ${
              darkMode
                ? "border border-white/10 bg-black/90"
                : "border border-black/10 bg-white/90"
            }`}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  offset={item === "About" ? 0 : -100}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer text-lg ${textColor}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}