import React, { useState, useEffect } from "react";
import StyleToast from "./StyleToast";

const Toast = (props) => {

    console.log("I am Toast")
    const [visibility, setVisibility] = useState('visible');

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisibility('hidden')
      }, 3000);
      return () => 
      clearTimeout(timer);
    }, []);

  	return (
    	<StyleToast visibility = { visibility }>
        { props.message }
    	</StyleToast>
  	);
};

export default Toast;
 