import React from 'react';

import {ImageComponent} from './Image';
import {PL} from '../Locales/pl'
import {WhatAShot, GlobalStyle, Wrapper, Divider, ForwardButton, BackwardButton} from '../StyledComponents/Classifier.styles.';
import {AnswersWrapper, ButtonWrapper} from '../StyledComponents/Answers.styles'
import {SHOT_TYPES} from '../Logic/MovieFrame'
import {PostResults} from './PostResults'
import { observer } from 'mobx-react';
import { ClassifierController } from '../Logic/ClassifierController'
import {getData} from '../Logic/API' 
import {Img} from 'react-image'
import Spinner from 'react-spinner-material'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';

export const Classifier = observer(() => {

 const [appState, setAppState] = React.useState(new ClassifierController())

 React.useEffect(() => {
  const fetchData = async () =>{
    await getData().then(res => appState.setMovies(res))
  }
  fetchData()
  },[appState]);

const handleShotReview = (shotType:string) =>
{
  appState.movies[appState.count]?.setShotType(shotType)
  console.log(appState.movies[appState.count]?.shotType);
}


const WantPostResults = () =>{
  return <>{appState.count === (appState?.movies?.length-1) && appState.getUnreviewedShots().length === 0 ? <PostResults movies={appState?.getReviewedShots()}/> : null}</>

}
  return (
    <>
    <Wrapper>
    <GlobalStyle/>
    <h2>{appState.movies[appState?.count]?.movieTitle} 🎬</h2>
  <h3>Twój postęp: {appState.count+1}/{appState.movies?.length} {appState.count+1 === appState.movies?.length ? '✅ ': '🔥' }</h3>
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
<button onClick={() => handleShotReview(SHOT_TYPES.EXTREMELONGSHOT)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.EXTREMELONGSHOT)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}>
{PL.EXTREMELONGSHOT}
</button>
<button  onClick={() => handleShotReview(SHOT_TYPES.LONGSHOT)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.LONGSHOT)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}>
{PL.LONGSHOT}
</button>
<div>
<button  onClick={() => handleShotReview(SHOT_TYPES.FULLSHOT)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.FULLSHOT)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}>
{PL.FULLSHOT}
</button>
</div>
 <button  onClick={() => handleShotReview(SHOT_TYPES.MEDIUMSHOT)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.MEDIUMSHOT)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}>
 {PL.MEDIUMSHOT}
 </button> 
 <button  onClick={() => handleShotReview(SHOT_TYPES.CLOSEUP)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.CLOSEUP)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}> 
 {PL.CLOSEUP}
</button>
<button  onClick={() => handleShotReview(SHOT_TYPES.MACRODETAIL)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.MACRODETAIL)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}> 
 {PL.MACRODETAIL}
</button>
</ButtonWrapper>

</AnswersWrapper>
</Wrapper>
</>
  );
})

