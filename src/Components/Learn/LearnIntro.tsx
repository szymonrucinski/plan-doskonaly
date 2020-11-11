import React from 'react';
import {LearnStyle, ArticleContainer, Dropcap, LearnPadder} from '../../StyledComponents/Learn.styles'
import {AesthethicH1, AesthethicP} from '../../StyledComponents/Main.styles'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {PL} from '../../Locales/pl'
import Claps from '../Claps'

 const LearnIntro = () => {

    return(
        <>
      <AesthethicH1>
        {PL.LEARNHELLO}
      </AesthethicH1>
      <AesthethicP textAlign={'left'}>
    <Dropcap>{PL.LEARNINTRO1DROPCAP}</Dropcap>{PL.LEARNINTRO1}
      </AesthethicP>
      <AesthethicP textAlign={'left'}>
        {PL.LEARNINTRO2}
      </AesthethicP>
      <AesthethicP textAlign={'left'}>
        {PL.LEARNINTRO3}
      </AesthethicP>
      </>
    )
}

export default LearnIntro;