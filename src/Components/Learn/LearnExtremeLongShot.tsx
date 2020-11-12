import React from "react";
import {
  LearnStyle,
  ArticleContainer,
  Dropcap,
  LearnPadder,
} from "../../StyledComponents/Learn.styles";
import { AesthethicH1, AesthethicP } from "../../StyledComponents/Main.styles";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { PL } from "../../Locales/pl";

import { extremeLongShot } from "../../images/shotTypesMedia";

const LearnExtremeLongshot = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <AesthethicH1>{PL.EXTREMELONGSHOT}</AesthethicH1>
      {/* <AutoplaySlider
        organicArrows={true}
        bullets={false}
        interval={5000}
        loop={true}
        play={true}
        media={extremeLongShot}
      /> */}
       <AesthethicP textAlign={"left"}>
        <Dropcap>{PL.LEARNEXTREMELONGSHOTDROPCAP}</Dropcap>
        {PL.LEARNEXTREMELONGSHOT1}
      </AesthethicP>

        <img style={{width: '100%'}}src="https://www.techdigest.tv/hogwarts.jpg" alt=""/>
        <img style={{width: '100%'}}src="https://stillsfrmfilms.files.wordpress.com/2013/05/39.jpg?w=1400&h" />
        <img style={{width: '100%'}}src="http://u100s.s3.amazonaws.com/articles_images/w0/145498083340/image.jpg"/>

      <div style={{ paddingBottom: "20px" }} />
      <AesthethicP textAlign={"left"}>{PL.LEARNEXTREMELONGSHOT2}</AesthethicP>
      {    window.scrollTo(0, 0)
}
      {/* <img
        style={{ width: "50%" }}
        src="https://media.giphy.com/media/oEEd3Ok2fUUKc/giphy.gif"
        alt="Suits closeUp shot"
      />
      <img
        style={{ width: "50%" }}
        src="https://media.giphy.com/media/WcKyVpoBdUcZq/giphy.gif"
      />
      <img
        style={{ width: "100%" }}
        src="https://media.giphy.com/media/aBktINOpjrWAE/giphy.gif"
      /> */}
    </>
  );
};

export default LearnExtremeLongshot;
