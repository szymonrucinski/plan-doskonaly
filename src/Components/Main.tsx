import React from 'react';

import {getImages} from '../Logic/getImages'
import {Grid} from '@material-ui/core';
import {MainTitle, MainDescription, MainSpacing, MainButton} from './Main.styles';
import {MovieFrame} from '../Logic/MovieFrame'
import BackgroundSlider from 'react-background-slider'
import { withRouter } from 'react-router-dom'

const RouterButton = withRouter(({ history }) => (
  <MainButton
    type='button'
    onClick={() => { history.push('/classifier') }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.5 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    Begin classification
  </MainButton>
))

const Main = () => {

const movieFrames:string[] = [
'https://wp-media.patheos.com/blogs/sites/228/2012/07/2008_the_dark_knight_heath_ledger_the_joker.jpg',
'https://film-grab.com/wp-content/uploads/2020/10/Tokyo-Gore-Police-013.jpg',
'https://film-grab.com/wp-content/uploads/2020/08/The-Art-of-Self-Defence-061.jpg',
'https://static.boredpanda.com/blog/wp-content/uploads/2015/08/epic-movie-scenes-screenshots-28__880.jpg'
]


  return (
    <>
      <Grid container spacing={2}>
      <Grid  item xs={1} sm={1} spacing={1} justify="center">
    </Grid>
      <Grid  item xs={12} sm={3} spacing={1} justify="center">
    <MainSpacing/>
    <MainTitle  animate={{ opacity: 0}}transition={{flip: Infinity, duration: 5}}>You</MainTitle>
    <MainTitle>talkin'</MainTitle>
    <MainTitle>to me?</MainTitle>
    <h1>
    </h1>
    </Grid>
  <Grid container item xs={12} spacing={3}>
  <Grid  item xs={1} sm={1} spacing={1} justify="center">
    </Grid>
  <Grid  item xs={12} sm={2} md={3} spacing={1} justify="center">
    <MainDescription>Sure, I am. Your help is essential need your help to build one of the most interesting projects ever. 
    Help us in analyzing movie frames and building the 
    software that will automate short video editing.
    </MainDescription>
    </Grid>
    <Grid  item xs={12} sm={2} spacing={1} justify="center">
    <MainDescription>What are you doing? You are defining specific shot types. It will be used later by AI to classify what.</MainDescription>
    </Grid>
   
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <Grid  item xs={1} sm={1} spacing={1} justify="center">
    </Grid>
    <Grid  item xs={12} sm={3} spacing={1} justify="center">
    <RouterButton/>
    </Grid>
  </Grid>

</Grid>
      <BackgroundSlider
  images={movieFrames}
  duration={10} transition={0.5} />
    </>
  );
}

export default Main;
