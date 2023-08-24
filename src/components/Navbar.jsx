import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <nav className="flex justify-between items-center px-[3rem] py-[2.5rem] mx-auto h-10 bg-black">
      <div className="logo ">
        <img src={logo} className="h-[4rem]" alt="" />
      </div>
      <ul
        id="navbar"
        className="navigation-buttons flex justify-between gap-5 text-white font-bold">
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
        onClick={() => {
          menu ? setMenu(false) : setMenu(true);
          console.log(menu)
        }}>

          {menu? <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />: <FontAwesomeIcon icon={faTimes} style={{ color: "#ffffff" }} />}
        
       
      </div>
    </nav>
  );
};

export default Navbar;
