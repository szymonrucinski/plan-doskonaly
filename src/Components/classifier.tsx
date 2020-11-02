import React from 'react';

import {getImages} from '../Logic/getImages'
import { makeStyles, Button, Grid, Paper, Slide} from '@material-ui/core';
import ImageComponent from './Image';
import {WhatAShot, GlobalStyle, Wrapper, Divider, ForwardButton} from './classifier.styles';
import {AnswersWrapper, ButtonWrapper} from './Answers.styles'
import {MovieFrame, SHOT_TYPES} from '../Logic/MovieFrame'
const Classifier = () => {

const [count, setCount] = React.useState(0);
const [allMovies,setAllMovies] = React.useState([] as MovieFrame[]);
const [forwardButtonDisabled, setForwardButtonDisabled] = React.useState(false);
const [backwardButtonDisabled, setBackwardButtonDisabled] = React.useState(true);
const getAllData = getImages

React.useEffect(() => {
  const fetchData = async () =>{
    await getAllData("300").then(res => setAllMovies(res))
  }
  fetchData()
  },[]);

const handleForward = () =>{
  setCount(count+1)
  setForwardButtonDisabled(false)
  console.log(count)
  if (count === allMovies.length-2){
    setForwardButtonDisabled(true)
  }
  if (count === 0)
  {
    setBackwardButtonDisabled(false)
  }
}
const handleBackward = () =>{
  setCount(count-1)
  console.log(count)
  setBackwardButtonDisabled(false)
  if (count === 1){
    setBackwardButtonDisabled(true)
  }
  if (count === allMovies.length-1)
  {
    setForwardButtonDisabled(false)
  }
}
const handleShotReview = (shotType:string) =>
{
  allMovies[count].setShotType(shotType)
  console.log(allMovies[count])
}

const PostResults = () =>{
  return <div>{(count === allMovies.length-1 && allMovies[allMovies.length].shotType !== "NotDefined") ? <p>Loading...</p> : null}</div>;

}

  return (
    <>
    <Wrapper>
    <GlobalStyle/>
    <WhatAShot>What a shot!</WhatAShot>
    <h3>Your progress: {count+1}/{allMovies.length}</h3>
<ImageComponent link={allMovies[count]?.getFrameUrl()}/>
<div style={{paddingTop: '10px'}}>
<ForwardButton onClick={handleBackward} disabled={backwardButtonDisabled}>
  Back
</ForwardButton>
<Divider/>
<ForwardButton onClick={handleForward} disabled={forwardButtonDisabled}>
  Next
</ForwardButton> 
</div>
<PostResults/>
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
}

export default Classifier;
