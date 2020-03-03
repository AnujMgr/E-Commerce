import styled from "styled-components";

const StyleSelected = styled.div`
	font-family: Roboto;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	padding: 0 10px;
	pointer-events: none;
	text-align: left;

	&::before{
		content: 'Sort By: ';
		color: #bdb3b3;
	}
`;

export default StyleSelected;
