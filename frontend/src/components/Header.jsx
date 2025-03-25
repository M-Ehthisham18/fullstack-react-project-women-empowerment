import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navlink from "./Navlink";
import styled from "styled-components";
import WHCIcon from './../assets/whc-icon-2.png'
import { useAuthStore } from "../stores/useAuthStore";
import Profile from "../pages/Profile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {authUser } = useAuthStore()
  const handleCloseMenu = (event) => {
    if (event.target.id === "overlay") {
      setIsMenuOpen(false);
    }
  };
  const StyledWrapper = styled.div`
    .hamburger {
      cursor: pointer;
    }

    .hamburger input {
      display: none;
    }

    .hamburger svg {
      /* The size of the SVG defines the overall size */
      height: 1.5em;
      /* Define the transition for transforming the SVG */
      transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line {
      fill: none;
      stroke: #3730a3;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 4;
      /* Define the transition for transforming the Stroke */
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line-top-bottom {
      stroke-dasharray: 12 63;
    }

    .hamburger input:checked + svg {
      transform: rotate(-45deg);
    }

    .hamburger input:checked + svg .line-top-bottom {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  `;
  return (
    <>
      {/* Navigation Bar */}
      <div className="w-full bg-indigo-600">
      <nav className="flex justify-between h-16 items-center bg-indigo-600 max-lg:py-5 sm:px-8 px-5 py-3 relative max-w-[1400px] m-auto">
        <div className="text-white text-xl font-bold leading-5 xl:w-[unset] w-[20%]">
          <NavLink to="/">
            <div className="w-[48px] h-[48px] rounded-full bg-white flex items-center gap-x-3 ">
              <img src={WHCIcon} width="100%" alt="" />
              <div className="border-l-[.75px] border-gray-200 pl-2">
                <span>WOMEN</span><br />
                <span>EMPOWERMENT</span>
              </div>
            </div>
          </NavLink>
        </div>
        <ul className="hidden max-lg:flex gap-x-3 lg:space-x-6 text-white text-lg font-extrabold items-center pr-4">
          <Navlink route="/" name="Home" />
          <Navlink
            route="/resources"
            name="Resources"
          />
          <Navlink route="/chat-bot" name="Chat Bot" />
          <Navlink route="/story-blog" name="Story" />
          <Navlink route="/blog" name="Blog" />
          {/* <Navlink route="about" name="About Me" /> */}
          {authUser ? (
                <Navlink route="/profile" name="Profile" />
              ) : (
                <Navlink route="/login" name="Sign In" />
              )}
        </ul>

        <div className="hidden">
          <a
            href="#"
            className="hidden max-lg:block bg-teal-500 text-white py-2 px-4 rounded-lg"
          >
            Sign Up
          </a>
        </div>

        <StyledWrapper
          className="bg-white p-1 rounded-lg max-lg:hidden top-[75px] right-[10px] z-10"
          onClick={() => {
            isMenuOpen === false ? setIsMenuOpen(true) : setIsMenuOpen(false);
          }}
        >
          <label className="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </StyledWrapper>
      </nav>
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div 
          id="overlay"
          className="absolute inset-0 z-50 bg-indigo-600 bg-opacity-95 w-fit min-w-[300px] top-[60px] left-auto max-lg:hidden "
          
          onClick={handleCloseMenu}
        >
          <ul className="flex flex-col items-center space-y-6 text-white text-2xl font-bold pt-12">
            <div onClick={() => setIsMenuOpen(false)}>
              <Navlink route="/" name="Home" />
            </div>
            <div onClick={() => setIsMenuOpen(false)}>
              <Navlink
                route="/resources"
                name="Resources"
              />
            </div>
            <div onClick={() => setIsMenuOpen(false)}>
              <Navlink route="/chat-bot" name="Chat Bot" />
            </div>
            <div onClick={() => setIsMenuOpen(false)}>
              <Navlink route="/story-blog" name="Story" func="true" />
            </div>
            <div onClick={() => setIsMenuOpen(false)}>
              <Navlink route="/blog" name="Blog" func="true" />
            </div>
            {/* <div onClick={() => setIsMenuOpen(false)}>
              <Navlink route="/about" name="About Me" />
            </div> */}
            <div onClick={() => setIsMenuOpen(false)}>
              {authUser ? (
                <Navlink route="/profile" name="Profile" />
              ) : (
                <Navlink route="/login" name="Sign In" />
              )}
            </div>
            <div onClick={() => setIsMenuOpen(false)} className="hidden">
              <a
                href="#"
                className="w-[90%] text-center bg-teal-500 text-white py-2 px-4 rounded-lg"
              >
                Sign Up
              </a>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
