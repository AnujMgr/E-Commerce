import styled from "styled-components";
import StyleCartDropDown from "./StyleCartDropDown";

const StyleNavCart = styled.div`
	position: relative;
	padding: 2rem 0.5rem
  	&:hover ${ StyleCartDropDown } {
		visibility: visible;
  		opacity: 1;
  	}
`;

export default StyleNavCart;
