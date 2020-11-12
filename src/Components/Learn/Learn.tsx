import React from "react";
import {
  ArticleContainer,
} from "../../StyledComponents/Learn.styles";

import "react-awesome-slider/dist/styles.css";

import { observer } from "mobx-react";
import { GlobalStyle } from "../../StyledComponents/Reusable.styles";
import LearnIntro from "./LearnIntro";
import LearnExtremeLongshot from "./LearnExtremeLongShot";
import LearnLongshot from "./LearnLongShot";
import ShotsIndex from "./ShotsIndex";
import LearnFullShot from "./LearnFullShot";
import LearnMediumShot from "./LearnMediumShot";
import LearnCloseUp from "./LearnCloseUp";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Claps from "../Claps";
import LearnDetail from "./LearnDetail";

const Learn = observer(() => {
  const Pages = [
    <LearnIntro />,
    <LearnExtremeLongshot />,
    <LearnLongshot />,
    <LearnFullShot />,
    <LearnMediumShot />,
    <LearnCloseUp />,
    <LearnDetail/>
  ];

  const AllPages = () => (
    <div
      style={{
        textAlign: "center",
        listStylePosition: "inside",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      {Object.entries(Pages).map(([key, value], index) => (
        <div id={`${key}`} style={{ paddingBottom: "150px" }}>
          {Pages[index]}
        </div>
      ))}
    </div>
  );

  const Index = () => (
    <ol
      type="I"
      style={{
        textAlign: "center",
        listStylePosition: "inside",
        justifyContent: "center",
        paddingRight: "40px",
        paddingTop: "100px",
        height: "100vh",
      }}
    >
      {Object.entries(ShotsIndex).map(([key, value], index) => (
        <li key={key} style={{ paddingBottom: "25px" }}>
          <AnchorLink style={{ textDecoration: "none" }} href={`#${index}`}>
            {value}
          </AnchorLink>{" "}
        </li>
      ))}
       <div style={{ width: "100px", float: 'left' }}>
        <Claps />
      </div>
    </ol>
  );

  return (
    <>
      <GlobalStyle
        overflowHidden={false}
        backgroundColor={"#141516"}
        animated={false}
      />
      <ArticleContainer>
        <Index />
        <AllPages />
      </ArticleContainer>
    </>
  );
});

export default Learn;
