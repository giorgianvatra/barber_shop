import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [display, setDisplay] = useState(true)
  
  return (
    <nav className="flex justify-between items-center px-[3rem] py-[2.5rem] mx-auto h-10 bg-black ">
      <div className="logo ">
        <img src={logo} className="h-[4rem]" alt="" />
      </div>
      <ul
        id="navbar"
        className="navigation-buttons flex justify-between gap-5 text-white font-bold md:hidden md:flex-col md:fixed md:right-[0] md:top-[5rem] md:bg-black md:p-[5vw] ">
        <li className="h-[2rem] transition-colors hover:border-b">
          <a href="/">Home</a>
        </li>
        <li className="h-[2rem] transition-colors hover:border-b">
          <a href="/aboutus">About us</a>
        </li>
        <li className="h-[2rem] transition-colors hover:border-b">
          <a href="/bookappointment">Book now</a>
        </li>
      </ul>

      <div
        id="mobile"
        className="lg:hidden"
        onClick={() => {
          menu ? setMenu(false) : setMenu(true);
        
        }}>
        {menu ? (
          <FontAwesomeIcon
            className="icons"
            icon={faBars}
            style={{ color: "#ffffff" }}
            onClick={() => {
              document.getElementById("navbar").style.display = "flex";
            }}
          />
        ) : (
          <FontAwesomeIcon
            className="icons"
            icon={faTimes}
            style={{ color: "#ffffff" }}
            onClick={() => {
              document.getElementById("navbar").style.display = "none";
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
