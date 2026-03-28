import React, { useState, useEffect } from "react";
import logoImage from "../../assets/images/hack-logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "domain", label: "About" },
    { id: "timeline", label: "Timeline" },
    { id: "register", label: "Register" },
  ];

  const handleNavClick = (item) => {
    setActiveSection(item.id);
    setMenuOpen(false);

    if (item.id === "register") {
      navigate("/register");
      return;
    }

    const element = document.querySelector(`[data-section="${item.id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .querySelector(`[data-section="${item.id}"]`)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-0" : "py-2"
      }`}
    >
      <div
        className={`mx-4 md:mx-8 lg:mx-12 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-blue-950/80 shadow-2xl border border-blue-500/20"
            : "backdrop-blur-lg bg-blue-950/60 shadow-xl border border-blue-500/10"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logoImage} alt="Logo" className="w-9 h-9" />
            <h1 className="text-white font-extrabold tracking-wider text-base md:text-lg">
              TEAM SRM{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                HACKATHON
              </span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`px-5 py-2 rounded-xl font-semibold transition ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;