import React from "react";
import { 
    StyleColorOptionInput,
    StyleOptionContainer
} from "../StyleSelectOptions";

const ColorOption = (props) => {
    
    if(props.product.color){
        props.handleIsColor(true);
  	    return (
            <StyleOptionContainer className = "m-6-0">
                <p className="black-light p-r-2">Select Color :</p>
                {   
                    props.product.color.map((color, index) => {
                    return(
                        <React.Fragment key = { "key"+index }>
                            <StyleColorOptionInput 
                                type = "radio" 
                                id = { "color"+index } 
                                name = "color" 
                                value = { color } 
                                color = { color }
                                onClick = {() => { 
                                    props.handleColorOptions(color);
                                    props.validateColorSelection('valid') 
                                    }
                                }
                            />
                            <label htmlFor = {"color"+index }> 
                            {(color !== 'white' ) ? 
                                <span className="hoverable">
                                    <i className="material-icons text-white">check</i>
                                </span>
                                :
                                 <span className="hoverable">
                                    <i className="material-icons text-black">check</i>
                                </span>
                            }
                              
                            </label>
                        </React.Fragment>
                        )
                    })
                }
            </StyleOptionContainer>
      	);}
    else {
       return null
    }
};

export default ColorOption;
 