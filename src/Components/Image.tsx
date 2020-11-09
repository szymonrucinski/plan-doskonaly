import React from 'react';
import {MovieFrame} from '../StyledComponents/Main.styles'
import LazyLoad from 'react-lazyload'

export const ImageComponent = (props: { link: string;}) => (
      <MovieFrame
      src={props.link}/>
)
