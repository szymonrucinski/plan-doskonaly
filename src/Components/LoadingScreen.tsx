import React from 'react';
import {MovieFrame} from '../StyledComponents/Main.styles'
import {ArticleContainer, LoadingStyle} from '../StyledComponents/LoadingScreen'
import Claps from '../Components/Claps'
export const LoadingScreen = () => {
     
    return(
        <div>
            <LoadingStyle/>
            <ArticleContainer>
            {/* <div style={{paddingTop:'150px'}}><Claps/></div> */}
            </ArticleContainer>
        </div>
    )
};