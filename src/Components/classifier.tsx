import React from 'react';

import {ImageComponent} from './Image';
import {WhatAShot, GlobalStyle, Wrapper, Divider, ForwardButton} from '../StyledComponents/Classifier.styles.';
import {AnswersWrapper, ButtonWrapper} from '../StyledComponents/Answers.styles'
import {MovieFrame, SHOT_TYPES} from '../Logic/MovieFrame'
import Spinner from 'react-spinner-material';
import PostResults from './PostResults'
import { observer } from 'mobx-react';
import { ClassifierController } from '../Logic/ClassifierController'
import { onBecomeObserved } from 'mobx';
import {getImages} from '../Logic/getImages'

export const Classifier = observer(() => {

 const [appState, setAppState] = React.useState(new ClassifierController)

 React.useEffect(() => {
  const fetchData = async () =>{
    await getImages("12-angry-men").then(res => appState.setMovies(res))
  }
  fetchData()
  },[appState]);

const handleShotReview = (shotType:string) =>
{
  appState.movies[appState.count]?.setShotType(shotType)
  console.log(appState.movies[appState.count]?.shotType);
}


const WantPostResults = () =>{
  return <>{appState.count === (appState?.movies?.length-1) && appState.movies[appState?.movies?.length-1].shotType !== 'NotDefined' ? <PostResults/> : null}</>

}
  return (
    <>
    <Wrapper>
    <GlobalStyle/>
    <WhatAShot>W kadrze 🎬</WhatAShot>
  <h2>Twój postęp: {appState.count+1}/{appState.movies?.length} {appState.count+1 === appState.movies?.length ? '✅ ': '🔥' }</h2>
  <>{appState.getUnreviewedShots()}</>
    <WantPostResults/>
<ImageComponent link={appState.movies[appState.count]?.getFrameUrl()}/>
<div style={{paddingTop: '10px'}}>
<ForwardButton onClick={(e) => appState.decCount()} disabled={appState.backwardButtonDisabled}>
⬅
</ForwardButton>
<Divider/>
<ForwardButton onClick={(e) => appState.incCount()} disabled={appState.forwardButtonDisabled}>
➡
</ForwardButton> 
</div>
<AnswersWrapper>
  <ButtonWrapper userClicked={false} correct={true}>
<button onClick={() => handleShotReview(SHOT_TYPES.LONGSHOT)}>
  Long Shot
</button>
<div>
<button  onClick={() => handleShotReview(SHOT_TYPES.CLOSEUP)}>
  CloseupShot
</button>
</div>
 <button  onClick={() => handleShotReview(SHOT_TYPES.WIDESHOT)}>
  Wide Shot
</button> <button  onClick={() => handleShotReview(SHOT_TYPES.MEDIUMSHOT)}>
  Medium
</button>
</ButtonWrapper>

</AnswersWrapper>
</Wrapper>
</>
  );
})

