import React from 'react';
import Spinner from 'react-spinner-material';
import {MovieFrame} from './Main.styles'

const spinner = () => {
    return <Spinner radius={120} color={"#333"} stroke={2} visible={true} />


}
const MyImage = (props: { link: string;}) => (
      <MovieFrame
      src={props.link}/>
);
 
export default MyImage;