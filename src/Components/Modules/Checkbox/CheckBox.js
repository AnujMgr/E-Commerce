import React, { useState } from 'react';

const Checkbox = (props) => {

  	const [isChecked, setChecked] = useState(false);
	
	const handleCheckbox = () => {
		console.log(props.brandId)
		if(isChecked){
			setChecked(false);
		}
		else{
			setChecked(true);
		}
	}

	return (
  		<input 
	  		type = "checkbox" 
		  	checked = { isChecked } 
		  	onChange = { handleCheckbox } 
	  	/>
	  	);
	};

export default Checkbox;