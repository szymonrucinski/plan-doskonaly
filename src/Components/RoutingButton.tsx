import {MainButton} from '../StyledComponents/Main.styles'
import React from 'react';
import { useHistory } from 'react-router-dom';

type RoutingButtonProps = 
{
  path:string;
  buttonText: string;

}
export const RoutingButton = (props:RoutingButtonProps) => {
  const history = useHistory();
  const handleClick = () => history.push(props.path);
  return(
  <MainButton
  onClick={handleClick}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.5 },
    }}
    whileTap={{ scale: 0.9 }}
  >
{props.buttonText}</MainButton>
)
};

export default RoutingButton;