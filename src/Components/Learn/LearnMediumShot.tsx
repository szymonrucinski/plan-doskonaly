import React from 'react';
import {LearnStyle, ArticleContainer, Dropcap, LearnPadder} from '../../StyledComponents/Learn.styles'
import {AesthethicH1, AesthethicP, MainSpacing, Padder} from '../../StyledComponents/Main.styles'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {PL} from '../../Locales/pl'
import Claps from '../Claps'
import { fullShot } from '../../images/shotTypesMedia';

 const LearnMediumShot = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

    return(
        <div>
      <AesthethicH1>
        {PL.MEDIUMSHOT}
      </AesthethicH1>
      <AesthethicP textAlign={'left'}>
    <Dropcap>{PL.LEARNMEDIUMSHOTDROPCAP}</Dropcap>{PL.LEARNMEDIUMSHOT1}
      </AesthethicP>
      
        <MainSpacing/>
        <AesthethicP textAlign={'left'}>
        {PL.LEARNMEDIUMSHOT2}
      </AesthethicP>
      <img
      style={{ width: "100%" }}
      src="https://s.studiobinder.com/wp-content/uploads/2019/06/Medium-Shot-Example-Cowboy-Clint-Eastwood-300x232.jpg"
    />
    <img
      style={{ width: "100%" }}
      src="https://s.studiobinder.com/wp-content/uploads/2018/06/Medium-Close-Shot-The-Art-of-the-Camera-Angle-Zero-Dark-Thirty.jpg"
    />
    <img
      style={{ width: "100%" }}
      src="https://viralcontent.net/content/images/1iorjjE0RCJUtK9ljTi1nCrzMjsnjacB6LcUoSJP.jpeg"
    />
     <img
      style={{ width: "100%" }}
      src="https://pbblogassets.s3.amazonaws.com/uploads/2015/10/Medium-Shot-Deakins-Skyfall.jpg"
    />
     <img
    style={{ width: "100%" }}
    src="https://pbblogassets.s3.amazonaws.com/uploads/2015/10/Medium-Deakins-True-Grit.jpg"
  />
    <img
    style={{ width: "100%" }}
    src="https://frankdoescollege.files.wordpress.com/2013/11/screen-shot-2013-11-10-at-19-32-32.png"
  />
    <div style={{ paddingBottom: "20px" }} />

      </div>
    )
}

export default LearnMediumShot;