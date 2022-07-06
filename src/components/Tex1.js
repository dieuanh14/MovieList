import React, { Component,useState } from "react";
import { useSpring, animated } from 'react-spring';
import { config } from "react-spring";


function Text1() {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 100,
      config: config.molasses,
      onRest: () => set(!flip),
    })
  
    return <animated.h1 style={props}>Trending Movies</animated.h1>
  }
  export default Text1;