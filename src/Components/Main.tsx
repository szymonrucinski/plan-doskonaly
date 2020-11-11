import React from "react";

import {
  AesthethicH1,
  AesthethicP,
  Padder,
  ButtonWrapper,
} from "../StyledComponents/Main.styles";
import { GlobalStyle } from "../StyledComponents/Reusable.styles";
import BackgroundSlider from "react-background-slider";
import Typing from "react-typing-animation";
import RoutingButton from "./RoutingButton";
import { PL } from "../Locales/pl";
import { ArticleContainer } from "../StyledComponents/Learn.styles";
import { backgroundImages } from "../images/shotTypesMedia";

const Main = () => {
  return (
    <>
    <div style={{height:'90vh'}}>
      <GlobalStyle
        overflowHidden={false}
        backgroundColor={"black"}
        animated={true}
      />
      <ArticleContainer>
        <Padder>
          <Typing speed={100} hideCursor={false} loop={false}>
            <AesthethicH1>{PL.TITLE}</AesthethicH1>
          </Typing>
        </Padder>
        <AesthethicP textAlign={"center"}>{PL.INTRO1}</AesthethicP>
        <AesthethicP textAlign={"center"}>{PL.INTRO2}</AesthethicP>
        <ButtonWrapper>
          <RoutingButton path={"/classifier"} buttonText={PL.BEGINQUIZ} />
          <RoutingButton path={"/learn"} buttonText={PL.BEGINLEARNING} />
        </ButtonWrapper>
        <BackgroundSlider
          images={backgroundImages}
          duration={7}
          transition={0.5}
        />
      </ArticleContainer>
      </div>
    </>
  );
};

export default Main;
