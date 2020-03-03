import styled from "styled-components";

const MegaMenu = styled.div`
  column-count: 4;
  column-gap: 15px;
  width: 80%;
  margin: auto;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  background-color: #f9f9f9;
  left: 10%;
  top: 80px;
  z-index: 999;
  transition: all 0.2s ease-in;
  padding: 1%;
`;

export default MegaMenu;
