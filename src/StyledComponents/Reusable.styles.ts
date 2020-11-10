import styled, {createGlobalStyle} from "styled-components";

type GlobalStyleProps =
{
    overflowHidden: boolean;
    backgroundColor:string;
    animated: boolean;

};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html {
    overflow: ${(props)=>(props.overflowHidden ? 'hidden' : 'auto')};
    width: 100%;


  }

  body {
    background-color: ${(props)=>props.backgroundColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    transition:  ${(props)=>(props.overflowHidden ? 'all 7s ease-in' : 'none')};
    button:focus { outline: none; }
  }

  * {
    font-family: 'Overpass Mono';
    color: white;
    
  }
`;