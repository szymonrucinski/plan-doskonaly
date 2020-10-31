import React from 'react';

import {getImages} from '../Logic/getImages'
import { makeStyles, Button, Grid, Paper} from '@material-ui/core';
import ImageComponent from './Image';
import {WhatAShot, GlobalStyle} from './classifier.styles';
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

const changeBackground = () =>
{

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


// const useStyles = makeStyles((theme) => ({
//   grid: {
//     width: '100%',
//     margin: '0px'
//   },
//   paper: {
//     padding: theme.spacing(4),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     backgroud: theme.palette.success.light,
//   },
// }));


const PostResults = () =>{
  return <div>{(count === allMovies.length-1 && allMovies[allMovies.length].shotType !== "NotDefined") ? <p>Loading...</p> : null}</div>;

}

  return (
    <div>
    <GlobalStyle bgcolor={"white"}/>
    <WhatAShot>What a shot Sherlock!</WhatAShot>
<ImageComponent link={allMovies[count]?.getFrameUrl()}/>

<Button variant="contained" color="primary" onClick={handleBackward} disabled={backwardButtonDisabled}>
  Back
</Button>
<h1>{count+1}/{allMovies.length}</h1>
<Button variant="contained" color="primary" onClick={handleForward} disabled={forwardButtonDisabled}>
  Next
</Button> 
<PostResults/>
<Button size="large" color="default" variant="outlined" onClick={() => handleShotReview(SHOT_TYPES.LONGSHOT)}>
  Long Shot
</Button>
<Button variant="contained" color="secondary" onClick={() => handleShotReview(SHOT_TYPES.CLOSEUP)}>
  CloseupShot
</Button> <Button variant="contained" color="secondary" onClick={() => handleShotReview(SHOT_TYPES.WIDESHOT)}>
  Wide Shot
</Button> <Button variant="contained" color="secondary" onClick={() => handleShotReview(SHOT_TYPES.MEDIUMSHOT)}>
  Medium
</Button>
</div>
  );
}

export default Classifier;
