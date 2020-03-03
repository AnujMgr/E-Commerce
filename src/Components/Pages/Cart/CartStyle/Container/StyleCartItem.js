import styled from "styled-components";

const StyleCartItem = styled.div`
	  display: flex;
    position: relative;
    justify-content: space-between;
  	margin: 0;
    padding: 25px;
  	transition: box-shadow 0.25s;
  	border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  	&:hover {
    	box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      	0 6px 20px 0 rgba(0, 0, 0, 0.19);
  	}
`;

export default StyleCartItem;
