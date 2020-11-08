import { useLottie } from "lottie-react";
import React from 'react';
import Clapper from "../Animations/CLAPPER.json";

const Example = () => {
    const options = {
      animationData: Clapper,
      loop: true,
      autoplay: true,
    };
   
    const { View } = useLottie(options);
   
    return View;
  };
   
  export default Example;