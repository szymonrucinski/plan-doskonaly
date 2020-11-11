import React from 'react';
import {LearnStyle, ArticleContainer, Dropcap, LearnPadder} from '../../StyledComponents/Learn.styles'
import {AesthethicH1, AesthethicP, MainSpacing, Padder} from '../../StyledComponents/Main.styles'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {PL} from '../../Locales/pl'
import Claps from '../Claps'
import { fullShot } from '../../images/shotTypesMedia';

 const LearnFullShot = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

    return(
        <div>
      <AesthethicH1>
        {PL.FULLSHOT}
      </AesthethicH1>
      <AesthethicP textAlign={'left'}>
    <Dropcap>{PL.LEARNFULLSHOTDROPCAP}</Dropcap>{PL.LEARNFULLSHOT1}
      </AesthethicP>
      <AutoplaySlider
        organicArrows={true}
        bullets={false}
        interval={5000}
        play={true}
        loop={true}
        media={fullShot}
      />
        <MainSpacing/>
        <AesthethicP textAlign={'left'}>
        {PL.LEARNFULLSHOT2}
      </AesthethicP>
      </div>
    )
}

export default LearnFullShot;