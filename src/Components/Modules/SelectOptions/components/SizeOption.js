import React from "react";

import { 
    StyleSizeOption,
    StyleOptionContainer
} from "../StyleSelectOptions";

const SizeOption = (props) => {

  if(props.product.size)
  {
    props.handleIsSize(true);
  	return (
      <StyleOptionContainer className = "m-6-0">
        <p className="black-light weight-300">SELECT SIZE :</p>
        {
          props.product.size.map((size, index) => {
            return(
            <React.Fragment key = { "key"+index }>
              <StyleSizeOption 
                type="radio" 
                id = { "size"+index } 
                name="size" 
                value = { size }
                onClick = {() => { props.handleSizeOptions(size);props.validateSizeSelection('valid') } } 
                onChange={()=>{}}
              />
              <label htmlFor = { "size"+index }>
                <span className="hoverable">
                  { size }
                </span>
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

export default SizeOption;
 