import styled from "styled-components";

const Overlay = styled.div`
  position: fixed; 
  visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 100%;  
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  z-index: 2;
  pointer-events: none;
  `;
export default Overlay;
