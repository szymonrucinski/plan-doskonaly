import styled from "styled-components";
import { motion } from "framer-motion";

export const MainDesktopSpacer = styled.div`
  width: 100%;
  height: 50px;
  @media (max-width: 768px) {
    height: 0px;
  }
`;
export const MovieFrame = styled.img`
  width: 100%;
  max-width: 700px;
`;

export const MainSpacing = styled.div`
  padding: 0px 10px 20px;
  color: white;
  font-size: 20px;
`;

export const MainButton = styled(motion.button)`
  background: Transparent;
  cursor: pointer;
  color: white;
  font-size: auto;
  width: 180px;
  height: 50px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 4px solid white;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
export const Padder = styled.div`
  padding-top: 200px;
  @media (max-width: 1200px) {
    padding-top: 10px;
  }
`;

export const MainContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

///AESTHETHIC TEXT LAYOUT:

export const AesthethicH1 = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: normal;
  line-height: 60px;
  margin: 10px 0 20px;
  text-shadow: 2px 2px 0 #000;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

type AesthethicPprops = {
  textAlign: string;
};

export const AesthethicP = styled.p<AesthethicPprops>`
  color: #f6f6f6;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 24px;
  text-align: ${(props) => props.textAlign};
  max-width: 100%;
  @media (max-width: 800px) {
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button:focus {
    outline: none;
  }
`;
