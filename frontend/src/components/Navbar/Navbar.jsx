import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Activity, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Doctors", to: "/doctors" },
  { label: "Appointments", to: "/appointments" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all ${
        isScrolled
          ? "shadow-sm border-b border-slate-200"
          : "border-b border-transparent"
      }`}
    >
      <div className=" ">
        <div className="">
          {/* Logo */}
          <Link to="/" className=" ">
            <div className="relative flex items-center pl-[200px] w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700">
              <Activity className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Medi<span className="text-emerald-600">AI</span>
              </h1>
              <p className="hidden sm:block text-[11px] text-slate-400">
                AI Health Assistant
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  gap-2">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  pathname === to
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-3 py-2 text-sm text-slate-600 hover:text-emerald-700"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 px-4 py-4">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-sm ${
                  pathname === to
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {label}
              </Link>
            ))}

            <hr className="my-2" />

            <Link
              to="/login"
              className="text-center py-2 rounded-lg hover:bg-slate-50"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="text-center py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
