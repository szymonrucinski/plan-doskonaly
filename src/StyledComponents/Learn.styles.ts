import styled, {createGlobalStyle} from "styled-components";


type LearnStyleProps = {
  darkMode: boolean;
};

export const LearnStyle = createGlobalStyle<LearnStyleProps> `

  body {
    background-color:  ${props => (props.darkMode ? "#141516" : "white")};
    color:  ${props => (props.darkMode ? "white" : "black")};
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
  }

  * {
    font-family: 'Overpass Mono', sans-serif;
    box-sizing: border-box;
  }
`;

export const ArticleContainer = styled.div `
width: 500px;
@media (max-width: 768px) {
    width: 100%;

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
padding-top: 100px;
@media (max-width: 1200px) {
    padding-top: 30px;
  }
`;