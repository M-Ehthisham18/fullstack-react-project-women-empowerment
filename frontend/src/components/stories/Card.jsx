import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = ({ img = "", alt = "img...", title = "", author = "" }) => {
  const navigate = useNavigate(); // Hook to handle navigation

  const stories = () => {
    switch (author) {
      case "Mbaranga Gasarabwe":
        navigate("/mbarangagasarabwe"); // Redirect to the link
        break;

      case "Teocah":
        navigate("/teocah");
        break; // Redirect to the link

      case "Vincent Sweeney":
        navigate("/vincentsweeney");
        break; // Redirect to the link

      case "H. Elizabeth Thompson":
        navigate("/elizabeth");
        break;

      case "Yentyl Williams":
        navigate("/yentyl"); // Redirect to the link
        break;

      case "Leizel Olegario":
        navigate("/leizelolegario"); // Redirect to the link
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="max-w-[380px] min-w-[260px] w-full h-[450px] rounded-lg px-4"
      onClick={stories} // Trigger navigation when card is clicked
    >
      <StyledWrapper className="w-full h-full">
        <div className="card">
          <div className="card-details">
            <img
              src={img}
              alt={alt}
              className="w-48 rounded-full m-auto border-2 border-[#008bf8] p-2"
            />
            <p className="text-title text-center text-xl lg:text-2xl"> {title}</p>
            <p className="text-body text-xl text-center">{author}</p>
          </div>
          <button className="card-button" onClick={stories}>
            Read More
          </button>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: #f9feff;
    position: relative;
    padding: 1.2rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
  }

  .card-details {
    color: black;
    height: 100%;
    gap: 0.5em;
    display: grid;
    place-content: center;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .text-body {
    color: rgb(134, 134, 134);
  }

  /*Text*/
  .text-title {
    // font-size: 1.5em;
    font-weight: bold;
    
  }

  /*Hover*/
  .card:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

export default Card;
