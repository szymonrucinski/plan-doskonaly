import styled, {createGlobalStyle} from "styled-components";
import { motion } from "framer-motion";



export const LoadingStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items:center;
  animation-direction: alternate;
  visibility: hidden;
  opacity: 0;

  }

  * {
    font-family: 'Overpass Mono', sans-serif;
  }
`;

export const ArticleContainer = styled.div `
width: 400px;
@media (max-width: 768px) {
    width: 400px;

  }
`;

export const Dropcap = styled.span`
  float:left;
  font-size:400%;
  margin-top:14px;
  margin-right:5px;
  color:#ffff;
  `;

export const LearnPadder = styled.div`
padding-top: 50px;
@media (max-width: 1200px) {
    padding-top: 30px;
  }
`;