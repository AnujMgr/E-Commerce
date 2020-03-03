import styled from "styled-components";

const StyleOverlay = styled.div`
  position: absolute; 
  opacity: ${(props => props.visibility) ? "1" : 0};
  visibility: ${(props => props.visibility)};
  width: 100%;
  height: 100%;  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  z-index: 1;
  animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  `;
export default StyleOverlay;
