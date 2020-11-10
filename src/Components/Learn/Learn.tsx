import React from "react";
import {
  LearnStyle,
  ArticleContainer,
  Dropcap,
  LearnPadder,
} from "../../StyledComponents/Learn.styles";
import {
  AesthethicH1,
  AesthethicP,
  MainButton,
} from "../../StyledComponents/Main.styles";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { PL } from "../../Locales/pl";

import { observer } from "mobx-react";
import { LearnController } from "../../Logic/LearnController";
import { extremeLongShot, fullShot } from "../../images/shotTypesMedia";
import LazyLoad from "react-lazyload";
import { GlobalStyle } from "../../StyledComponents/Reusable.styles";
import LearnIntro from "./LearnIntro";
import { RoutingButton } from "../RoutingButton";
import LearnExtremeLongshot from "./LearnExtremeLongShot";
import { observable } from "mobx";
import LearnLongshot from "./LearnLongShot";
const Learn = observer(() => {
  // const arr = [<LearnIntro/>, <LearnExtremeLongshot/>, <LearnLongshot/>];

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [count, setCount] = React.useState(0);

  const LController = new LearnController();
  const handleClick = () => {
    setCount(count + 1);
    console.log("XD");
  };
  return (
    <>
      <GlobalStyle
        overflowHidden={false}
        backgroundColor={"#141516"}
        animated={false}
      />{" "}
      <ArticleContainer>
        {/* <LearnPadder/> */}
        <div style={{ paddingTop: "50px"}} />
        {/* <div style={{height:'600px'}}>{arr[count]}</div> */}
        <div style={{ textAlign: "center", height: '500px', fontStyle:'italic', textDecoration: 'none'}}>
          <div style={{paddingTop:'10px', textDecoration: 'none'}}>
            <a style={{textDecoration: 'none', textAlign: "center"}}href="#Exordium">1</a>
            <a style={{textDecoration: 'none', float: "right", paddingRight: '25px'}}href="#Exordium">{PL.LEARNHELLO}</a>

          </div>
          <div style={{paddingTop:'10px'}}>
            <a href="#ExtremeLongShot">{PL.EXTREMELONGSHOT}</a>
          </div>
          <div style={{paddingTop:'10px'}}>
            <a href="#LongShot">{PL.LONGSHOT}</a>
          </div>
          <div style={{paddingTop:'10px'}}>
            <a href="#FullShot">{PL.FULLSHOT}</a>
          </div>
          <div style={{paddingTop:'10px'}}>
            <a href="#MediumShot">{PL.MEDIUMSHOT}</a>
          </div>
          <div style={{paddingTop:'10px'}}>
            <a href="#CloseUp">{PL.CLOSEUP}</a>
            <div>
              <a href="#MacroDetail">{PL.MACRODETAIL}</a>
            </div>
          </div>
        </div>

        <LearnIntro />
        <LearnIntro />
        <LearnIntro />
        <LearnIntro />
        <LearnIntro />
        <LearnIntro />
        <LearnIntro />
        <div id={"LearnIntro"} style={{ paddingBottom: "50px" }} />
        <LearnExtremeLongshot />
        <div id={"LearnIntro"} style={{ paddingBottom: "50px" }} />
        <LearnIntro />
        <LearnIntro />
        <LearnIntro />

        {/* <RoutingButton path={'/learn-extremelongshot'} buttonText={'Home'}/> */}
        {/* <MainButton onClick={handleClick}>Dalej</MainButton> */}
        {/* <AesthethicH1>{PL.EXTREMELONGSHOT}</AesthethicH1>
<AutoplaySlider organicArrows={true} bullets={false} interval={5000}     play={true} media={extremeLongShot}/>
          

  <div style={{paddingBottom: '20px'}}/>
  <AesthethicP textAlign={'left'}>
      <Dropcap>{PL.LEARNEXTREMELONGSHOTDROPCAP}</Dropcap>
  {PL.LEARNEXTREMELONGSHOT1}
        </AesthethicP>
    <AesthethicP textAlign={'left'}>
    {PL.LEARNEXTREMELONGSHOT2}
    </AesthethicP>
        <LazyLoad>
        <img style={{width: '50%'}}src="https://media.giphy.com/media/oEEd3Ok2fUUKc/giphy.gif" alt="Suits closeUp shot"/>
        <img style={{width: '50%'}}src="https://media.giphy.com/media/WcKyVpoBdUcZq/giphy.gif"/>
        <img style={{width: '100%'}}src="https://media.giphy.com/media/aBktINOpjrWAE/giphy.gif"/>
        </LazyLoad>


      <AesthethicH1>
{PL.LONGSHOT}</AesthethicH1>
      <AesthethicP textAlign={'left'}>
      <Dropcap>{PL.LEARNLONGSHOTDROPCAP}</Dropcap>{PL.LEARNLONGSHOT1}
        </AesthethicP>
        <img style={{width: '100%'}}src="https://iv1.lisimg.com/image/11899105/540full-barry-lyndon-screenshot.jpg"/>
        <img style={{width: '100%'}}src="https://i.pinimg.com/originals/1b/de/89/1bde89b0400c321883bcca2fd035bbd8.gif"/>
        <img style={{width: '100%'}}src="https://64.media.tumblr.com/d369e5346d7d75a0ba21f42c618ad487/tumblr_oogpaiip1k1uzaoxdo1_640.gifv"/>
        <div style={{paddingBottom: '20px'}}/>

        <AesthethicP textAlign={'left'}>
      {PL.LEARNLONGSHOT2}
        </AesthethicP>

        
      <AesthethicH1>{PL.FULLSHOT}</AesthethicH1>
      <AesthethicP textAlign={'left'}>
      {PL.LEARNFULLSHOT1}
        </AesthethicP>
        <AutoplaySlider organicArrows={true} bullets={false} interval={5000}     play={true} media={fullShot}/>

        <div style={{paddingBottom: '20px'}}/>
        <AesthethicP textAlign={'left'}>
      {PL.LEARNLONGSHOT2}
        </AesthethicP> */}
      </ArticleContainer>
    </>
  );
});
// https://wp-media.patheos.com/blogs/sites/228/2012/07/2008_the_dark_knight_heath_ledger_the_joker.jpg
// https://film-grab.com/wp-content/uploads/2020/10/Tokyo-Gore-Police-013.jpg
// https://film-grab.com/wp-content/uploads/2020/08/The-Art-of-Self-Defence-061.jpg
// https://static.boredpanda.com/blog/wp-content/uploads/2015/08/epic-movie-scenes-screenshots-28__880.jpg
export default Learn;
