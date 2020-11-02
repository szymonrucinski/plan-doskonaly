import React from 'react';

import {MainTitle, MainDescription,MainButton, MainDesktopSpacer} from './Main.styles';
import BackgroundSlider from 'react-background-slider'
import { withRouter } from 'react-router-dom'
import { Col, Row, Container } from "react-bootstrap";

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
    <Container fluid>
        <Row>
        <MainDesktopSpacer/>
          <Col sm={12}>
        <MainTitle  animate={{ opacity: 0}}transition={{flip: Infinity, duration: 5}}>You</MainTitle>
        <MainTitle>talkin'</MainTitle>
        <MainTitle>to me?</MainTitle>
    <MainDescription>Sure, I am. Your help is essential need your help to build one of the most interesting projects ever. 
    Help us in analyzing movie frames and building the 
    software that will automate short video editing.
    </MainDescription>
    <RouterButton/>
          </Col>
    </Row>


      <BackgroundSlider
  images={movieFrames}
  duration={10} transition={0.5} />
    </Container>
  );
}

export default Main;
