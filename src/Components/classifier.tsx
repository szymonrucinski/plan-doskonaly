import React from 'react';

import {getImages} from '../Logic/getImages'
import {ImageComponent} from './Image';
import {WhatAShot, GlobalStyle, Wrapper, Divider, ForwardButton} from './classifier.styles';
import {AnswersWrapper, ButtonWrapper} from './Answers.styles'
import {MovieFrame, SHOT_TYPES} from '../Logic/MovieFrame'
import Spinner from 'react-spinner-material';
import PostResults from './PostResults'
import { observer } from "mobx-react-lite"

const Classifier = () => {

const [count, setCount] = React.useState(0);
const [allMovies,setAllMovies] = React.useState([] as MovieFrame[]);
const [forwardButtonDisabled, setForwardButtonDisabled] = React.useState(false);
const [backwardButtonDisabled, setBackwardButtonDisabled] = React.useState(true);
const getAllData = getImages

React.useEffect(() => {
  const fetchData = async () =>{
    await getAllData("12-angry-men").then(res => setAllMovies(res))
  }
  fetchData()
  },[]);

const handleForward = () =>{
  setCount(count+1)
  setForwardButtonDisabled(false)
  console.log(count)
  console.log(allMovies.length)
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

const getNotDefined = (allMovies : MovieFrame[]) => 
{
   return allMovies.find(obj => obj.shotType === 'NotDefined') === undefined ? <PostResults/> : null;
}

const Loader = () =>{
  return <>{count === (allMovies?.length) ? <Spinner radius={60} color={"#ffffff"} stroke={5} visible={true} /> : console.log("XD")}</>

}

const WantPostResults = () =>{
  return <>{count === (allMovies.length-1) && allMovies[allMovies.length-1].shotType != 'NotDefined' ? <PostResults/> : console.log(allMovies.length)}</>

}
// i

  return (
    <>
    <Wrapper>
    <GlobalStyle/>
    {/* <WhatAShot>W kadrze 🎬</WhatAShot> */}
  <h2>Twój postęp: {count+1}/{allMovies.length} {count+1 === allMovies.length ? '✅ ': '🔥' }</h2>
    <Loader/>
    <WantPostResults/>
<ImageComponent link={allMovies[count]?.getFrameUrl()}/>
<div style={{paddingTop: '10px'}}>
<ForwardButton onClick={handleBackward} disabled={backwardButtonDisabled}>
⬅
</ForwardButton>
<Divider/>
<ForwardButton onClick={handleForward} disabled={forwardButtonDisabled}>
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
}

export default Classifier;
