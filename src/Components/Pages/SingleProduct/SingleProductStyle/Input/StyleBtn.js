import styled from "styled-components";

const StyleBtn = styled.button`
	font-family: Roboto;
  	width: 160px;
	height: 40px;
	font-size: 16px;
	background: ${props => props.primary ? "white" : "#ff7676"};
	border: none;
	border-radius: 5px;
	color: ${props => props.primary ? "#ff7676" : "white"};
	cursor: pointer;
`;

export default StyleBtn;