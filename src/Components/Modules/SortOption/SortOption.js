import React , { useState } from "react";
import { 
    StyleSortOption,
    StyleSelect,
    StyleSelected
} from "./StyleSortOption";

const SortOption = (props) => {

    const [select, setSelect] = useState('Popularity');
    
    const handleChange = (e) =>{
        setSelect( e.target.value)
    }
     
  	return (
    	<React.Fragment>
            <StyleSortOption>
                <StyleSelect onChange = { handleChange } >
                    <option value="Popularity">Popularity</option>
                    <option value="Price high to low">Price high to low</option>
                    <option value="Price low to high">Price low to high</option>
                </StyleSelect>

                <StyleSelected>{select} </StyleSelected>

            </StyleSortOption>

    	</React.Fragment>
  	);
};

export default SortOption;
 