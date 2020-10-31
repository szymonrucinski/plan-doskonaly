import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ bgcolor: string }>`
  html {
    height: 100%;
  }

  body {
    background-size: cover;
    background-color: ${(props) => props.bgcolor};
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Pineapple Inline', sans-serif;
    box-sizing: border-box;
  }
`;

export const WhatAShot = styled.h1`
  font-family: "Pineapple Inline";
  font-size: 2em;
`;

export const MovieFrame = styled.img`
  width: 100%;
  box-shadow: 30px 41px 7px #D3D3D3	;
  box-shadowOpacity: 0.44,

  color: blue;
  font-variant: small-caps;
`;
