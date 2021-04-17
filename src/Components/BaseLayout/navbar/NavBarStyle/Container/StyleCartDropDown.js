import styled from "styled-components";

const StyleCartDropDown = styled.div`
  width: 370px;
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 0%;
  top: 80px;
  z-index: 999;
  transition: all 0.5s ease-out;
  padding: 0.5em;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export default StyleCartDropDown;
