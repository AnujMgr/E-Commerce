import styled from "styled-components";

const StyleOptionOverlay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: ${(props => props.visibility) ? "1" : 0};
  visibility: ${(props => props.visibility)};
  width: 100%;
  height: auto;
  text-align: left;
  background: #fff;
  padding: 10px 0px;
  z-index: 2;
  animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  button {
    border: none;
    padding: 10px;
    margin: 2px 4px;
    border-radius: 50%;
    cursor: pointer

    :focus {
      background-color: black;
      color: #fff
    }
  }
`;

export default StyleOptionOverlay;
