import styled from "styled-components";

const StylePriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: right;
	width: 25%;
	p:nth-child(2) {
		color: #a28989;
		margin: 0;
		font-size: 0.8rem;
		cursor: pointer;
		&:hover{
			color: #b2b41e
		}
	}
`;

export default StylePriceContainer;


