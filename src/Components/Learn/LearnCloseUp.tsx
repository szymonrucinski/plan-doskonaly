import React from 'react';
import {LearnStyle, ArticleContainer, Dropcap, LearnPadder} from '../../StyledComponents/Learn.styles'
import {AesthethicH1, AesthethicP, MainSpacing, Padder} from '../../StyledComponents/Main.styles'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {PL} from '../../Locales/pl'
import Claps from '../Claps'
import { fullShot } from '../../images/shotTypesMedia';

 const LearnCloseUp = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

    return(
        <div>
      <AesthethicH1>
        {PL.CLOSEUP}
      </AesthethicH1>
      <AesthethicP textAlign={'left'}>
    <Dropcap>{PL.LEARNMEDIUMSHOTDROPCAP}</Dropcap>{PL.LEARNMEDIUMSHOT1}
      </AesthethicP>
      
        <MainSpacing/>
        <AesthethicP textAlign={'left'}>
        {PL.LEARNMEDIUMSHOT2}
      </AesthethicP>
        <img style={{width: '50%'}}src="https://media.giphy.com/media/oEEd3Ok2fUUKc/giphy.gif" alt="Suits closeUp shot"/>
        <img style={{width: '50%'}}src="https://media.giphy.com/media/WcKyVpoBdUcZq/giphy.gif"/>
        <img style={{width: '100%'}}src="https://media.giphy.com/media/aBktINOpjrWAE/giphy.gif"/>
    <div style={{ paddingBottom: "20px" }} />

      </div>
    )
}

export default LearnCloseUp;