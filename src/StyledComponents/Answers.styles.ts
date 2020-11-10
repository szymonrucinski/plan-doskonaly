import styled from "styled-components";

export const AnswersWrapper = styled.div`
  max-width: 600px;
  background: transparent;
  padding: 10px;
  text-align: center;
  p {
    font-size: 1rem;
  }
`;



export const ButtonWrapper = styled.div`
  transition: all -0.3s ease;
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.95rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background-color: transparent;
    border: 3px solid #ffffff;
    border-radius: 10px;
  }

  button:hover {
    background-color: teal;
    transform: scale(1.05);
  }
`;
