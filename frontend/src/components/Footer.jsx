import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Connect with me</h2>
        </div>
        <div className="flex space-x-6 sm:space-x-12 md:space-x-24">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ehthisham-ul-haq-538abb295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/M-Ehthisham18/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          {/* Portfolio */}
          <a
            href="https://portfolio-website-7qi.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faHtml5} size="2x" />
          </a>
          {/* Email */}
          <a
            href="mailto:ehthishamulhaq18@gamil.com"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <div className="mt-6 text-center">
          <p>© 2024 M Ehthishamul Haq. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
