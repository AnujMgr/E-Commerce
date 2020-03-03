import styled from "styled-components";

const StyleCardBtn = styled.button`
	display: block;
  	border: 1px solid #ffeaea;
	padding: 3% 0%;
	height: 40px;
	background: #fff;
	text-align: center;
	width: 33.333%;
	cursor: pointer;
	span {
		color:
		black;
		-webkit-transition: all 0.700ms ease-in;
		transition: all .2s ease-in;
		font-size: 22px;
	}

	&:hover span{
		font-size: 28px;
	}
`;

export default StyleCardBtn;