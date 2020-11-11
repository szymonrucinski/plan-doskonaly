import React from 'react';
import {LearnStyle, ArticleContainer, Dropcap, LearnPadder} from '../../StyledComponents/Learn.styles'
import {AesthethicH1, AesthethicP, MainSpacing, Padder} from '../../StyledComponents/Main.styles'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {PL} from '../../Locales/pl'
import { SHOT_TYPES } from '../../Logic/MovieFrame';

 const LearnCloseUp = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

    return(
        <div>
      <AesthethicH1>
        {PL.MACRODETAIL}
      </AesthethicH1>
      <AesthethicP textAlign={'left'}>
    <Dropcap>{PL.LEARNMACRODETAILDROPCAP}</Dropcap>{PL.LEARNMACRODETAIL}
      </AesthethicP>
      
        <MainSpacing/>
        {/* <AesthethicP textAlign={'left'}>
        {PL.LEARNCLOSEUP2}
      </AesthethicP> */}
        <img style={{width: '100%'}}src="https://images.ctfassets.net/3s5io6mnxfqz/1MrkqUcRLCWuAgCCg4igAM/ba093dae5cf2ab3cc9192e60c09d6d50/adult-close-up-eye-946727.jpg?w=800&fm=jpg&fl=progressive" alt="Suits closeUp shot"/>
        <img style={{width: '100%'}}src="https://nofilmschool.com/sites/default/files/styles/article_wide/public/david_fincher_extreme_close-ups.jpeg?itok=SZ8D6YN4"/>
        <iframe title={'fincher'}src="https://player.vimeo.com/video/152923976" width="100%" height="267" frameBorder="0" allow="autoplay; fullscreen"></iframe>
<p></p>
    <div style={{ paddingBottom: "20px" }} />

      </div>
    )
}

export default LearnCloseUp;