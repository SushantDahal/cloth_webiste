import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="w-full h-18 sticky top-0 z-50">
      <div
        className={
          nav
            ? "w-[30%] lg:hidden bg-[black] text-white h-screen top-0 absolute ease-in duration-300"
            : "fixed left-[-50%] ease-out duration-100"
        }
      >
        <ul className="flex justify-center mr-10 font-bold cursor-pointer flex-col items-center gap-10 mt-20">
          <li
            className={`mx-4 text-xl px-4 rounded-md ${
              activeLink === "Home" ? "border-red-500 border" : ""
            }`}
          >
            <ScrollLink
              to="Home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
              onClick={() => setActiveLink("Home")}
              active={activeLink === "Home"}
            >
              Home
            </ScrollLink>
          </li>
          <li
            className={`mx-4 text-xl px-4 rounded-md ${
              activeLink === "Offers" ? "border-red-500 border" : ""
            }`}
          >
            <ScrollLink
              to="Offers"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
              onClick={() => setActiveLink("Offers")}
              active={activeLink === "Offers"}
            >
              Offers
            </ScrollLink>
          </li>
          <Link to={"/Login"}>
            <li className="mx-4 text-xl px-4 rounded-md">LogIn</li>
          </Link>
          <Link to={"/SignUp"}>
            <li className="mx-4 text-xl px-4 rounded-md">Sign Up</li>
          </Link>
        </ul>
      </div>
      <div className="max-w-[1240px] mx-auto bg-white flex justify-between items-center py-1">
        <img src={Logo} className="w-[200px]" alt="" />
        <div>
          <ul className="lg:flex hidden mr-10 font-bold cursor-pointer items-center">
            <li
              className={`mx-4 text-xl px-4 rounded-md ${
                activeLink === "Home" ? "bg-[red] text-white" : ""
              }`}
            >
              <ScrollLink
                to="Home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1000}
                onClick={() => setActiveLink("Home")}
                active={activeLink === "Home"}
              >
                Home
              </ScrollLink>
            </li>
            <li
              className={`mx-4 text-xl px-4 rounded-md ${
                activeLink === "Offers" ? "bg-[red] text-white" : ""
              }`}
            >
              <ScrollLink
                to="Offers"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1000}
                onClick={() => setActiveLink("Offers")}
                active={activeLink === "Offers"}
              >
                Offers
              </ScrollLink>
            </li>
            <Link to={"/Login"}>
              <li className="mx-4 text-xl px-4 rounded-md">LogIn</li>
            </Link>
            <Link to={"/SignUp"}>
              <li className="mx-4 text-xl px-4 rounded-md">Sign Up</li>
            </Link>
          </ul>
          <div className="lg:hidden flex mr-6" onClick={handleNav}>
            <Hamburger />
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-white font-bold">
        <h1>
          "Unlock Your Style Potential! Enjoy 15% off Your First Purchase!"
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
