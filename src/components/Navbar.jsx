import React from 'react'

const Navbar = (props) => {

    


  return (
    <nav className="flex justify-between items-center px-[3rem] py-[2.5rem] mx-auto h-10 bg-black">
      <div className="logo ">
        <h1 className="text-amber-300">GV Barver Shop</h1>
      </div>
      <ul className="navigation-buttons flex justify-between gap-5 text-amber-300">
        <li>
          <a  href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/aboutus">About us</a>
        </li>

        <li>
          <a href="/bookappointment">Book now</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
