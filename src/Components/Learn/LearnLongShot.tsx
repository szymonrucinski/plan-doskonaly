import React from "react";
import { PL } from "../../Locales/pl";
import { Dropcap } from "../../StyledComponents/LoadingScreen";
import { AesthethicH1, AesthethicP } from "../../StyledComponents/Main.styles";
import Learn from "./Learn";

const LearnLongshot = () => {
  return(
  <>
    <AesthethicH1>{PL.LONGSHOT}</AesthethicH1>
    <AesthethicP textAlign={"left"}>
      <Dropcap>{PL.LEARNLONGSHOTDROPCAP}</Dropcap>
      {PL.LEARNLONGSHOT1}
    </AesthethicP>
    <img
      style={{ width: "100%" }}
      src="https://iv1.lisimg.com/image/11899105/540full-barry-lyndon-screenshot.jpg"
    />
    <img
      style={{ width: "100%" }}
      src="https://i.pinimg.com/originals/1b/de/89/1bde89b0400c321883bcca2fd035bbd8.gif"
    />
    <img
      style={{ width: "100%" }}
      src="https://64.media.tumblr.com/d369e5346d7d75a0ba21f42c618ad487/tumblr_oogpaiip1k1uzaoxdo1_640.gifv"
    />
    
    <div style={{ paddingBottom: "20px" }} />

    <AesthethicP textAlign={"left"}>{PL.LEARNLONGSHOT2}</AesthethicP>
  </>);
};

export default LearnLongshot;
