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
        <img style={{width: '100%'}}src="https://axidro.pl/wp-content/uploads/2017/06/M%C3%B3je-plany-1024x758.jpg" alt="Cheatsheet"/>

        <span style={{fontStyle: 'italic'}}>{PL.LEARNCLOSEUPCOMMENT2}</span>
    <span style={{fontStyle: 'italic'}}>{PL.LEARNCLOSEUPCOMMENT1}</span>


        
        
        
    <div style={{ paddingBottom: "20px" }} />

      </div>
    )
}

export default LearnCloseUp;