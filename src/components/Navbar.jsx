import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMapMarkerAlt, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo.png";
import Account from "../components/Account"; // Import the AccountModal component
import { useUserContext } from "../context/UserContext"; // Import the user context

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const { users } = useUserContext(); // Access user context
  const currentUser = users.find(user => user.email === "mansoor72373@gmail.com" && user.name === "Mansoor Ahmad");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-900 border-t-2 fixed w-full z-50">
      <div className="flex items-center  p-4 bg-blue-900 text-white">
        <div className="flex items-center">
          {/* Toggle sidebar button for mobile */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden focus:outline-none"
          >
            <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-2xl" />
          </button>
          {/* Logo */}
          <img className=" ml-3 h-[60px]  rounded-full" src={Logo} alt="Logo" />
        </div>

        {/* Large Screen NavLinks */}
        <div className="hidden ml-5 lg:flex space-x-7 ">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
          <NavLink to="/navpages/Topdeals" className={({ isActive }) => (isActive ? "active-link" : "")}>Top Deals</NavLink>

          {/* Dropdown for "More" */}
          <div className="relative">
            <button onClick={toggleDropdown} className="inline-flex items-center">
              More <span className="ml-2">&#9662;</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-blue-800 lg:w-40 lg:mt-[33px] text-white shadow-lg z-10">
                <ul>
                  <li><NavLink to="/navpages/Dealoftheday" className="block px-4 py-2 hover:bg-blue-700">Deal Of The Day</NavLink></li>
                  <li><NavLink to="/navpages/LocalShop" className="block px-4 py-2 hover:bg-blue-700">Local Shop</NavLink></li>
                  <li><NavLink to="/navpages/Membership" className="block px-4 py-2 hover:bg-blue-700">Membership</NavLink></li>
                  {currentUser && (
                    <>
                      <li><NavLink to="/components/UserAdminPanel" className="block px-4 py-2 hover:bg-blue-700">User Admin Panel</NavLink></li>
                      <li><NavLink to="/components/AdminPanel" className="block px-4 py-2 hover:bg-blue-700">Admin Panel</NavLink></li>
                    </>
                  )}
                  <li onClick={toggleDropdown} className="block px-4 py-2 hover:bg-blue-700 cursor-pointer">Close</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right-side Icons */}
        <div className="flex ml-[630px] items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4">
            <span className="flex items-center"><FontAwesomeIcon icon={faMapMarkerAlt} /><span className="ml-2">Islamabad</span></span>
            <Link to="/pages/Cart" className="flex items-center"><FontAwesomeIcon icon={faShoppingCart} /><span className="ml-2">Cart</span></Link>
            <button onClick={openModal} className="flex items-center"><FontAwesomeIcon icon={faUser} /><span className="ml-2">Account</span></button>
          </div>
        </div>
      </div>

      {/* Sidebar for Small and Medium Screens */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 bg-blue-900 h-full z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-4 space-y-4">
          <li><NavLink to="/" onClick={toggleSidebar} className="block text-white">Home</NavLink></li>
          <li><NavLink to="/navpages/Topdeals" onClick={toggleSidebar} className="block text-white">Top Deals</NavLink></li>
          <li><NavLink to="/navpages/Dealoftheday" onClick={toggleSidebar} className="block text-white">Deal Of The Day</NavLink></li>
          <li><NavLink to="/navpages/LocalShop" onClick={toggleSidebar} className="block text-white">Local Shop</NavLink></li>
          <li><NavLink to="/navpages/Membership" onClick={toggleSidebar} className="block text-white">Membership</NavLink></li>
          {currentUser && (
            <>
              <li><NavLink to="/components/UserAdminPanel" onClick={toggleSidebar} className="block text-white">User Admin Panel</NavLink></li>
              <li><NavLink to="/components/AdminPanel" onClick={toggleSidebar} className="block text-white">Data Admin Panel</NavLink></li>
            </>
          )}
          {/* Cart and Account options for sidebar */}
          <li><Link to="/pages/Cart" onClick={toggleSidebar} className="block text-white flex items-center"><FontAwesomeIcon icon={faShoppingCart} /><span className="ml-2">Cart</span></Link></li>
          <li><button onClick={() => {toggleSidebar(); openModal();}} className="block text-white flex items-center"><FontAwesomeIcon icon={faUser} /><span className="ml-2">Account</span></button></li>
          <li className="cursor-pointer text-white" onClick={toggleSidebar}>Close</li>
        </ul>
      </div>

      {/* Account Modal */}
      {isModalOpen && <Account closeModal={closeModal} />}
    </div>
  );
};

export default Navbar;
