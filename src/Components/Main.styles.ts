import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/cinema.png";
import { motion } from "framer-motion";

export const MainStyle = styled.div<{ bgcolor: string }>`
  body {
    background-size: cover;
    background-color: ${(props) => props.bgcolor};
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
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

export const MainTitle = styled(motion.div)`
  padding: 1px 10px 10px;
  color: white;
  font-size: 72px;
  font-weight: 12px;
  font-family: "Overpass Mono";
`;

export const MainDescription = styled.div`
  padding: 0px 20px 10px;
  color: white;
  font-size: 20px;
  font-family: "Overpass Mono";
`;

export const MainSpacing = styled.div`
  padding: 0px 10px 40px;
  color: white;
  fontsize: 20px;
  fontfamily: "Overpass Mono";
`;

export const MainButton = styled(motion.button)`
  background: Transparent;
  cursor: pointer;
  color: white;
  fontfamily: "Overpass Mono";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 4px solid white;
  border-radius: 4px;
`;
