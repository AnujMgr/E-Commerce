import styled from "styled-components";

const StyleStar = styled.svg`
  text-align: center;
  padding: 5px 0;
  color: #6b6f82;
  polygon {
  	fill: ${props => props.primary ? "#ffd055" : "#d8d8d8"};
  }
`;

export default StyleStar;
