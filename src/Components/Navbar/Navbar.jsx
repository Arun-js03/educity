import React, { useState, useEffect } from "react";
const logo = "/assets/logo.png";
const menu_icon = "/assets/menu-icon.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-[#212ea0] py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-[140px] md:w-[180px] cursor-pointer"
        />

        {/* Navigation Links */}
        <ul
          className={`
          flex items-center space-x-2 lg:space-x-4
          max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:bottom-0 max-lg:flex-col max-lg:justify-center max-lg:bg-[#212ea0] max-lg:w-[250px] max-lg:space-x-0 max-lg:space-y-6 max-lg:transition-transform max-lg:duration-500 max-lg:shadow-2xl max-lg:z-40
          ${mobileMenu ? "max-lg:translate-x-0" : "max-lg:translate-x-full"}
        `}
        >
          {["Home", "Program", "About Us", "Campus", "Testimonials"].map(
            (item) => (
              <li key={item} className="list-none">
                <Link
                  to={
                    item.toLowerCase().replace(" ", "") === "home"
                      ? "hero"
                      : item.toLowerCase().replace(" ", "") === "program"
                        ? "program"
                        : item.toLowerCase().replace(" ", "") === "testimonials"
                          ? "testimonials"
                          : item.toLowerCase().replace(" ", "") === "aboutus"
                            ? "about"
                            : item.toLowerCase().replace(" ", "")
                  }
                  spy={true}
                  smooth={true}
                  offset={
                    item === "Home" ? 0 : item === "About Us" ? -150 : -260
                  }
                  duration={500}
                  onClick={() => setMobileMenu(false)}
                  className="text-white text-[16px] font-medium cursor-pointer hover:text-blue-200 transition-colors block px-4 py-2"
                >
                  {item}
                </Link>
              </li>
            ),
          )}
          <li className="list-none ml-4 max-lg:ml-0">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-260}
              duration={500}
              onClick={() => setMobileMenu(false)}
              className="bg-white text-[#212121] px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-gray-100 transition-all inline-block shadow-md"
            >
              Get In Touch
            </Link>
          </li>
        </ul>

        <img
          src={menu_icon}
          alt="menu"
          className="lg:hidden w-5 h-5 cursor-pointer z-50 relative transition-transform active:scale-95"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
