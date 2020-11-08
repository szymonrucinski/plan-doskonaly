import styled from "styled-components";
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
export const MainDesktopSpacer = styled.div`
  width: 100%;
  height: 50px;
  @media (max-width: 768px) {
    height: 0px;
  }
`;
export const MovieFrame = styled.img`
  width: 100%;
  font-variant: small-caps;
`;

export const MainTitle = styled(motion.div)`
  padding: 0px 20px 10px;
  color: white;
  font-size: 72px;
  font-weight: 700;
  font-family: "Overpass Mono";
  @media (max-width: 768px) {
    font-size: 55px;
  }
`;

export const MainDescription = styled.div`
  padding: 0px 20px 10px;
  max-width: 45%;
  color: white;
  font-size: 20px;
  font-family: "Overpass Mono";
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const MainSpacing = styled.div`
  padding: 0px 10px 40px;
  color: white;
  font-size: 20px;
  font-family: "Overpass Mono";
`;

export const MainButton = styled(motion.button)`
  background: Transparent;
  cursor: pointer;
  color: white;
  font-family: "Overpass Mono";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 4px solid white;
  border-radius: 4px;
`;

export const MainContainer = styled.div`
  display: inline-flex;
  padding-top: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;


///AESTHETHIC TEXT LAYOUT:


export const AesthethicH1 = styled.h1`
 color: #fff; font-family: 'Overpass Mono'; 
 font-size: 65px; 
 font-weight: normal; 
 line-height: 60px; 
 margin: 10px 0 20px; 
 text-transform: uppercase; 
 text-shadow: 2px 2px 0 #000; 
 margin: 10px 0 24px; 
 text-align: center; 
`;

export const AesthethicP = styled.p`
color: #f6f6f6;
font-family: 'Overpass Mono';
 font-size: 16px; 
 line-height: 24px;
  margin: 0 0 24px; 
  text-align: center;
  max-width: 30%;
  @media (max-width: 768px) {
    max-width: 100%;
    padding-left:10px;
    padding-right:10px;
`;
