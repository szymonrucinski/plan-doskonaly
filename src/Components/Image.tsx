import React from 'react';
import {MovieFrame} from '../StyledComponents/Main.styles'

export const ImageComponent = (props: { link: string;}) => (
      <MovieFrame
      src={props.link}/>
)
