import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import LoginModal from './LoginPage';
import { StoreIcon } from '../../assets/storeIcon';
const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Function to open the login modal
  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  // Function to close the login modal
  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "bg-white shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between h-16 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(StoreIcon, null), " ", /*#__PURE__*/React.createElement("h1", {
    className: "cursor-pointer text-2xl font-bold text-gray-800"
  }, "Business Directory")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex space-x-6 ml-auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "cursor-pointer hover:text-blue-500"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "cursor-pointer hover:text-blue-500"
  }, "About Us")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center ml-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-2 rounded-full hover:bg-gray-100",
    onClick: handleLoginOpen
  }, /*#__PURE__*/React.createElement(FaUserCircle, {
    className: "h-6 w-6 text-gray-600"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:hidden flex items-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-2 rounded-md hover:bg-gray-100",
    onClick: toggleMenu
  }, isMenuOpen ? /*#__PURE__*/React.createElement(HiX, {
    className: "h-6 w-6 text-gray-600"
  }) : /*#__PURE__*/React.createElement(HiMenu, {
    className: "h-6 w-6 text-gray-600"
  }))))), isMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden bg-white shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-start space-y-2 p-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "cursor-pointer hover:text-blue-500"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "cursor-pointer hover:text-blue-500"
  }, "About Us"), /*#__PURE__*/React.createElement("button", {
    className: "flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100",
    onClick: handleLoginOpen
  }, /*#__PURE__*/React.createElement(FaUserCircle, {
    className: "h-5 w-5 text-gray-600"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-800"
  }, "Login")))), isLoginOpen && /*#__PURE__*/React.createElement(LoginModal, {
    onClose: handleLoginClose
  }));
};
export default Navbar;