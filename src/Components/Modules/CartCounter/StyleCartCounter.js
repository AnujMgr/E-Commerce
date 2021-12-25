import styled from "styled-components";

export const StyleCartCounter = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : "0em")};
  button,
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => (props.height ? props.height : "3em")};
    width: ${(props) => (props.height ? props.width : "3em")};
    border: 1px solid #000;
    padding: ${(props) => (props.padding ? props.padding : "0.4em")};
    font-size: 1em;
    background-color: #fff;
  }

  button {
    cursor: pointer;
    border: 1px solid #000;
    background-color: #fff;
    transition: all ease-in-out 0.2s;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }

  span {
    border: 0;
    font-size: 1rem;
  }
`;
