import styled from "styled-components";

export const AnswersWrapper = styled.div`
  max-width: 1000px;
  background: transparent;
  padding: 10px;
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all -0.3s ease;
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.95rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background-color: transparent;
    /* background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"}; */
    border: 3px solid #ffffff;
    border-radius: 10px;
  }

  button:hover {
    background-color: teal;
    transform: scale(1.05);
  }
`;
