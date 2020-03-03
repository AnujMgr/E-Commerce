import React from "react";
import { 
    StyleStarRating,
    StyleStar 
} from "./StyleCreateStar";

const CreateStar = (props) => {

    const { star } = props;
    const create = (star) => {
        let stars = []
        for (let i = 5; i > 0; i--) {
            if(i <= star){
                stars.push(
                    <StyleStar key = { i } height = "25" width="23" primary>
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" ></polygon>
                  </StyleStar>
                )
            }
            else{
                stars.push(
                <StyleStar key = { i } height = "25" width="23">
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" ></polygon>
                </StyleStar>
            )}
        } 
        return stars
    }

    return (
        <StyleStarRating >
            { create(star) }
        </StyleStarRating>
    );
};

export default CreateStar;
 