import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';

const SelfWritten = () => {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
            'Fluente em Javascrip',
            'React JS',
            'Front-end'
        ],
            loop: true,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1200
        };
   typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <span ref={el}/>
  );
}

export default SelfWritten;