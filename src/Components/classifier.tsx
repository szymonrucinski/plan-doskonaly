import React from 'react';

import {ImageComponent} from './Image';
import {PL} from '../Locales/pl'
import {ButtonWrapper, GlobalStyle, Wrapper, Divider, ForwardButton, BackwardButton} from '../StyledComponents/Classifier.styles.';
import {AnswersWrapper} from '../StyledComponents/Answers.styles'
import {SHOT_TYPES} from '../Logic/MovieFrame'
import {PostResults} from './PostResults'
import { observer } from 'mobx-react';
import { ClassifierController } from '../Logic/ClassifierController'
import {getData} from '../Logic/API' 
import {AesthethicH1, MainButton} from '../StyledComponents/Main.styles'
import Claps from './Claps'
import { faImage, faRunning, faHome, faLaughWink, faGem, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Classifier = observer(() => {

 const [appState, setAppState] = React.useState(new ClassifierController())

 React.useEffect(() => {
  const fetchData = async () =>{
    await getData().then(res => appState.setMovies(res))

  }
  // <span style={{width:'100px'}}><Claps/></span>
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
    <AesthethicH1>{appState.movies[appState?.count]?.movieTitle} 🎬</AesthethicH1>
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
  <ButtonWrapper>
<MainButton onClick={() => handleShotReview(SHOT_TYPES.EXTREMELONGSHOT)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.EXTREMELONGSHOT)? {backgroundColor:'#001c38'} : {backgroundColor: 'transparent'}}>
{PL.EXTREMELONGSHOT}    <FontAwesomeIcon icon={faImage} />
</MainButton>
<MainButton  onClick={() => handleShotReview(SHOT_TYPES.LONGSHOT)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.LONGSHOT)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}>
{PL.LONGSHOT}<FontAwesomeIcon icon={faHome} />
</MainButton>
</ButtonWrapper>

<ButtonWrapper>
<MainButton  onClick={() => handleShotReview(SHOT_TYPES.FULLSHOT)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.FULLSHOT)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}>
{PL.FULLSHOT}<FontAwesomeIcon icon={faRunning} />
</MainButton>

 <MainButton  onClick={() => handleShotReview(SHOT_TYPES.MEDIUMSHOT)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.MEDIUMSHOT)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}>
 {PL.MEDIUMSHOT}<FontAwesomeIcon  icon={faStreetView} />
 </MainButton> 
 </ButtonWrapper>

 <MainButton  onClick={() => handleShotReview(SHOT_TYPES.CLOSEUP)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.CLOSEUP)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}> 
 {PL.CLOSEUP}<FontAwesomeIcon  icon={faLaughWink} />
</MainButton>
<MainButton  onClick={() => handleShotReview(SHOT_TYPES.MACRODETAIL)} style={(appState.movies[appState.count]?.shotType === SHOT_TYPES.MACRODETAIL)? {backgroundColor:'green'} : {backgroundColor: 'transparent'}}> 
 {PL.MACRODETAIL}<FontAwesomeIcon  style={{paddingLeft: '5px'}}icon={faGem} />
</MainButton>

</AnswersWrapper>
</Wrapper>
</>
  );
})

