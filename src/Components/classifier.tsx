import React from 'react';

import {ImageComponent} from './Image';
import {WhatAShot, GlobalStyle, Wrapper, Divider, ForwardButton, BackwardButton} from '../StyledComponents/Classifier.styles.';
import {AnswersWrapper, ButtonWrapper} from '../StyledComponents/Answers.styles'
import {SHOT_TYPES} from '../Logic/MovieFrame'
import PostResults from './PostResults'
import { observer } from 'mobx-react';
import { ClassifierController } from '../Logic/ClassifierController'
import {getData} from '../Logic/API'

export const Classifier = observer(() => {

 const [appState, setAppState] = React.useState(new ClassifierController())

 React.useEffect(() => {
  const fetchData = async () =>{
    await getData("12-angry-men").then(res => appState.setMovies(res))
  }
  fetchData()
  },[appState]);

const handleShotReview = (shotType:string) =>
{
  appState.movies[appState.count]?.setShotType(shotType)
  console.log(appState.movies[appState.count]?.shotType);
}


const WantPostResults = () =>{
  return <>{appState.count === (appState?.movies?.length-1) && appState.getUnreviewedShots().length === 0 ? <PostResults/> : null}</>

}
  return (
    <>
    <Wrapper>
    <GlobalStyle/>
    <WhatAShot>W kadrze 🎬</WhatAShot>
  <h2>Twój postęp: {appState.count+1}/{appState.movies?.length} {appState.count+1 === appState.movies?.length ? '✅ ': '🔥' }</h2>
  <>{console.log(appState.getUnreviewedShots())}</>
    <WantPostResults/>
<ImageComponent link={appState.movies[appState.count]?.getFrameUrl()}/>
<div style={{paddingTop: '10px'}}>
<BackwardButton onClick={(e) => appState.decCount()} disabled={appState.getBackwardDisabled()}>
⬅
</BackwardButton>
<Divider/>
<ForwardButton onClick={(e) => appState.incCount()} disabled={appState.getForwardDisabled()}>
➡
</ForwardButton> 
</div>
<AnswersWrapper>
  <ButtonWrapper userClicked={false} correct={true}>
<button onClick={() => handleShotReview(SHOT_TYPES.LONGSHOT)} style={(appState.movies[appState.count]?.shotType === 'longShot')? {backgroundColor:'red'} : {backgroundColor: 'transparent'}}>
  Long Shot
</button>
<div>
<button  onClick={() => handleShotReview(SHOT_TYPES.CLOSEUP)} style={(appState.movies[appState.count]?.shotType === 'closeUp')? {backgroundColor:'red'} : {backgroundColor: 'transparent'}}>
  CloseupShot
</button>
</div>
 <button  onClick={() => handleShotReview(SHOT_TYPES.WIDESHOT)} style={(appState.movies[appState.count]?.shotType === 'wideShot')? {backgroundColor:'red'} : {backgroundColor: 'transparent'}}>
  Wide Shot
</button> <button  onClick={() => handleShotReview(SHOT_TYPES.MEDIUMSHOT)} style={(appState.movies[appState.count]?.shotType === 'mediumShot')? {backgroundColor:'red'} : {backgroundColor: 'transparent'}}> 
  Medium
</button>
</ButtonWrapper>

</AnswersWrapper>
</Wrapper>
</>
  );
})

