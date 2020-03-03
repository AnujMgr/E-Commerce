import styled from "styled-components";
import StyleStar from "./StyleStar";

const StyleStarRating = styled.div`
	display: flex;
	flex-flow: row-reverse;
	justify-content: flex-end;
	align-items: center;
	  i {
	    font-size: 14px;
	  }

	${ StyleStar }:hover polygon { fill: #ffd055 !important; };

 	${ StyleStar }:hover ~ ${ StyleStar } polygon { fill: #ffd055 !important; };
`;
export default StyleStarRating;
