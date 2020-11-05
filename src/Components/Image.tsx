import { Height } from '@material-ui/icons';
import React from 'react';
import Spinner from 'react-spinner-material';
import {MovieFrame} from '../StyledComponents/Main.styles'

export const ImageComponent = (props: { link: string;}) => (
      <MovieFrame
      src={props.link}/>
);
 
