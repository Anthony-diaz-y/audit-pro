import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", to: "/" },
    { name: "Nosotros", to: "/nosotros" },
    { name: "Servicios", to: "/servicios" },
    { name: "Portafolio", to: "/portafolio" },
    { name: "Contacto", to: "/contacto" },
  ];

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${
      isScrolled
        ? "bg-white text-gray-800 shadow-md"
        : "bg-gradient-to-b from-black/40 to-transparent text-white"
    }
  `;
  const linkClasses = `
    px-3 py-2 font-medium tracking-wide transition-all duration-300 border-b-2 border-transparent
    ${
      isScrolled
        ? "text-gray-600 hover:border-teal-700 hover:text-teal-700"
        : "hover:border-white"
    }
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/img/logo-AuditPro.png"
              alt="Logo AuditPro"
              className={`h-16 transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className={linkClasses}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-current"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white absolute w-full shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <Link
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-3 px-4 text-gray-600 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
