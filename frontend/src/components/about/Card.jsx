import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <StyledWrapper className="">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front p-3 bg-violet-400">
            <img
              src="https://portfolio-website-7qi.pages.dev/img/sham_photo_1.png"
              alt=""
              className="h-[90%] rounded-[12px]"
            />
            <p className="title">M Ehthisham</p>
          </div>
          <div className="flip-card-back">
            <p className="title">Connect with me</p>

            <div className="flex flex-col gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ehthisham-ul-haq-538abb295/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />{" "}
                <span className="pl-2 text-xl font-bold">LinkedIn</span>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/M-Ehthisham18/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />{" "}
                <span className="pl-2 text-xl font-bold">Git-Hub</span>
              </a>
              {/* Portfolio */}
              <a
                href="https://portfolio-website-7qi.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faHtml5} size="2x" />{" "}
                <span className="pl-2 text-xl font-bold">Portfolio</span>
              </a>
              {/* Email */}
              <a
                href="mailto:ehthishamulhaq18@gamil.com"
                className="text-white hover:text-indigo-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />{" "}
                <span className="pl-2 text-xl font-bold">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 210px;
    height: 300px;
    perspective: 1000px;
    font-family: sans-serif;
    margin: auto;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid violate;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(
      120deg,
      #857dff 60%,
      rgb(90 78 229 / 40%) 88%,
      rgb(184 166 226) 40%,
      rgb(80 70 229) 48%
    );
    color: #ffffff;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      rgb(126 34 206) 30%,
      #b0abff 88%,
      bisque 40%,
      rgb(80 70 229) 78%
    );
    color: white;
    transform: rotateY(180deg);
  }
`;

export default Card;
