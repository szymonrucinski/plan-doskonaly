import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-color: #141516;
    background-size: cover;
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    transition: all 2s ease-in;
    button:focus { outline: none; }


  }

  * {
    font-family: 'Overpass Mono', sans-serif;
    color: white;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Divider = styled.div`
  width: 50px;
  height: auto;
  display: inline-block;
`;

export const WhatAShot = styled.h1`
  font-size: 3em;
  font-family: "Overpass Mono";
  font-weight: 900;
  float: none;
  margin: 0 auto;
`;

export const MovieFrame = styled.img`
  max-height: 100%;
  box-shadow: 30px 41px 7px;
  border-radius: 25px;
`;

export const ForwardButton = styled.button`
  cursor: pointer;
  user-select: none;
  font-size: 0.95rem;
  width: 70px;
  height: 40px;
  margin: 5px 0;
  border: none;
  background-color: transparent;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;

export const BackwardButton = styled.button`
  cursor: pointer;
  user-select: none;
  font-size: 0.95rem;
  width: 70px;
  height: 40px;
  margin: 5px 0;
  border: none;
  background-color: transparent;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;

export const ButtonWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClassifierButton = styled(motion.button)`
  background: Transparent;
  cursor: pointer;
  color: white;
  font-family: "Overpass Mono";
  font-size: auto;
  width: 180px;
  height: 50px;
  margin: 1em;
  text-transform: uppercase;
  padding: 0.25em 1em;
  border: 4px solid white;
  border-radius: 800px;
  @media (max-width: 768px) {
    width: 200px;
  }
  .btn:focus {
  outline: none;
  box-shadow: none;
}
`;