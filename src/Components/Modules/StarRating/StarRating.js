import React from "react";
import { 
    StyleStarRating,
    StyleStar 
} from "./StyleStarRating";

const StarRating = (props) => {

    const { id, star } = props;
    const createStar = (star, id) => {
        let stars = []
        for (let i = 5; i > 0; i--) {
            if(i <= star){
                stars.push(
                    <StyleStar key = { i } height = "25" width="23"  onClick = {() => props.handleRating(i, id)} primary>
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" ></polygon>
                  </StyleStar>
                )
            }
            else{
                stars.push(
                <StyleStar key = { i } height = "25" width="23" onClick = {() => props.handleRating(i, id)}>
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" ></polygon>
                </StyleStar>
            )}
        } 
        return stars
    }
 
  	return (
    	<StyleStarRating hover>
            ({star}) {createStar(star, id)}
    	</StyleStarRating>
  	);
};

export default StarRating;
 