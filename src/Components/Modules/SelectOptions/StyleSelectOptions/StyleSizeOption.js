import styled from "styled-components";

const StyleColorOptionInput = styled.input`
	display: none;
    + label {
      color: #333;
      font-family: Arial, sans-serif;
      font-size: 14px;
		span {
			font-size: 16px;
			margin-left: 10px;
			background: white;
			border: none;
			border-radius: 50%;
			color: black;
			cursor: pointer;
			font-family: Roboto;
			padding: 12px;
		}
	}
	&:checked + label span {
      background: black;
      color: #fff;
    }
`;

export default StyleColorOptionInput;
