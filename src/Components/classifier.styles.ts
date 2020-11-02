import styled, { createGlobalStyle } from "styled-components";
import BGImage from "../images/collagePS1.png";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-color: black;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
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
  font-weight: 700;
  float: none;
  margin: 0 auto;
`;

export const MovieFrame = styled.img`
  max-width: 500px;
  box-shadow: 30px 41px 7px;
`;

export const ForwardButton = styled.button`
  cursor: pointer;
  user-select: none;
  font-size: 0.95rem;
  width: 70px;
  height: 40px;
  margin: 5px 0;
  border: 3px solid #ffffff;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: red;
  background-color: yellow;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;

export const BackwardButton = styled.button`
  max-width: 400px;
  color: blue;
  font-variant: small-caps;
`;
