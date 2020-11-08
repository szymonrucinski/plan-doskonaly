import React from 'react';

import {MainTitle, MainDescription,MainButton, MainContainer, AesthethicH1, AesthethicP} from '../StyledComponents/Main.styles';
import BackgroundSlider from 'react-background-slider'
import Claps from './Claps'
import Typing from 'react-typing-animation';
import { withRouter } from 'react-router-dom'
import { Col, Row, Container } from "react-bootstrap";
import {PL} from '../Locales/pl'

const QuizButton = withRouter(({ history }) => (
  <MainButton
    type='button'
    onClick={() => { history.push('/classifier') }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.5 },
    }}
    whileTap={{ scale: 0.9 }}
  >
{PL.BEGINQUIZ}  </MainButton>
))

const LearningButton = withRouter(({ history }) => (
  <MainButton
    type='button'
    onClick={() => { history.push('/learn') }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.5 },
    }}
    whileTap={{ scale: 0.9 }}
  >
{PL.BEGINLEARNING}  </MainButton>
))

const Main = () => {

const movieFrames:string[] = [
'https://wp-media.patheos.com/blogs/sites/228/2012/07/2008_the_dark_knight_heath_ledger_the_joker.jpg',
'https://film-grab.com/wp-content/uploads/2020/10/Tokyo-Gore-Police-013.jpg',
'https://film-grab.com/wp-content/uploads/2020/08/The-Art-of-Self-Defence-061.jpg',
'https://static.boredpanda.com/blog/wp-content/uploads/2015/08/epic-movie-scenes-screenshots-28__880.jpg'
]


  return (
    <MainContainer>
      <div>
      {/* <span style={{width:'100px'}}><Claps/></span> */}
      <Typing speed={500} hideCursor={false} loop={false} startDelay={1000}>
        <AesthethicH1 >{PL.TITLE}</AesthethicH1>
        </Typing>
        </div>
        


    <AesthethicP>{PL.INTRO1}</AesthethicP>
    <AesthethicP>{PL.INTRO2}</AesthethicP>

    <div>
    <QuizButton/>
    <LearningButton/>
    </div>


      <BackgroundSlider
  images={movieFrames}
  duration={10} transition={0.5} />
    </MainContainer>
  );
}

export default Main;
