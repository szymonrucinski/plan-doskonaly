import React from 'react';
import {Dropcap} from '../../StyledComponents/Learn.styles'
import {AesthethicH1, AesthethicP, MainSpacing} from '../../StyledComponents/Main.styles'
import 'react-awesome-slider/dist/styles.css';
import {PL} from '../../Locales/pl'

 const LearnCloseUp = () => {

    return(
        <div>
      <AesthethicH1>
        {PL.CLOSEUP}
      </AesthethicH1>
      <AesthethicP textAlign={'left'}>
    <Dropcap>{PL.LEARNCLOSEUPDROPCAP}</Dropcap>{PL.LEARNCLOSEUP1}
      </AesthethicP>
      
        <MainSpacing/>
        {/* <AesthethicP textAlign={'left'}>
        {PL.LEARNMEDIUMSHOT2}
      </AesthethicP> */}
        <img style={{width: '50%'}}src="https://media.giphy.com/media/oEEd3Ok2fUUKc/giphy.gif" alt="Suits closeUp shot"/>
        <img style={{width: '50%'}}src="https://media.giphy.com/media/WcKyVpoBdUcZq/giphy.gif" />
        <img style={{width: '100%'}}src="https://i.vimeocdn.com/video/517305628_1280x720.jpg"/>
        <img style={{width: '100%'}}src="https://media.giphy.com/media/aBktINOpjrWAE/giphy.gif"/>
        <span style={{fontStyle: 'italic'}}>{PL.LEARNCLOSEUPCOMMENT2}</span>
        <img style={{width: '100%'}}src="https://pbblogassets.s3.amazonaws.com/uploads/2015/10/MCU-brother-4.jpg"/>
    <span style={{fontStyle: 'italic'}}>{PL.LEARNCLOSEUPCOMMENT1}</span>


        
        
        
    <div style={{ paddingBottom: "20px" }} />

      </div>
    )
}

export default LearnCloseUp;