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
        scrolled ? "py-1" : "py-3"
      }`}
    >
      <div
        className={`mx-3 sm:mx-4 md:mx-8 lg:mx-12 rounded-2xl transition-all duration-300 relative overflow-hidden ${
          scrolled
            ? "backdrop-blur-2xl bg-slate-950/75 shadow-[0_16px_40px_rgba(2,8,23,0.55)] border border-cyan-300/25"
            : "backdrop-blur-xl bg-slate-950/60 shadow-[0_12px_28px_rgba(2,8,23,0.45)] border border-cyan-300/15"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_90%_120%,rgba(59,130,246,0.14),transparent_40%)]" />

        <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="rounded-lg p-1.5 bg-cyan-400/10 border border-cyan-300/25 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <img src={logoImage} alt="Logo" className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h1 className="text-white font-extrabold tracking-wide text-sm sm:text-base md:text-lg whitespace-nowrap">
              TEAM SRM{" "}
              <span className="bg-linear-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                HACKATHON
              </span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 lg:px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-linear-to-r from-cyan-500/80 to-blue-500/80 text-white shadow-[0_0_22px_rgba(56,189,248,0.3)]"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-lg border border-cyan-300/30 bg-slate-900/60 flex items-center justify-center text-cyan-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="relative block w-5 h-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current rounded transition-transform duration-300 ${
                  menuOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.75 h-0.5 w-5 bg-current rounded transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3.5 h-0.5 w-5 bg-current rounded transition-transform duration-300 ${
                  menuOpen ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden relative px-3 pb-3">
            <div className="rounded-xl border border-cyan-300/20 bg-slate-900/70 backdrop-blur-xl p-2.5 space-y-1.5 shadow-[0_10px_28px_rgba(2,8,23,0.5)]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-linear-to-r from-cyan-500/80 to-blue-500/80 text-white"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;