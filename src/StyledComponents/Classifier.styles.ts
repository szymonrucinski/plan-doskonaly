import styled from "styled-components";
import { motion } from "framer-motion";

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

export const ForwardButton = styled.button`
  cursor: pointer;
  user-select: none;
  font-size: 0.95rem;
  width: 70px;
  height: 40px;
  margin: 5px 0;
  border: none;
  background-color: transparent;
`;

export const BackwardButton = ForwardButton;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ClassifierButton = styled(motion.button)`
  background: Transparent;
  cursor: pointer;
  font-size: auto;
  width: 160px;
  height: 50px;
  margin: 1em;
  text-transform: uppercase;
  padding: 0.25em 1em;
  border: 4px solid white;
  border-radius: 800px;
  @media (max-width: 768px) {
    width: 160px;
    border: 3px solid white;
  }
`;
