import styled from "styled-components";

const MegaMenu = styled.div`
  position: absolute;
  left: 10%;
  top: 80px;
  z-index: 999;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  grid-column-gap: 1em;
  transition: all 0.2s ease-in-out;
  width: 80%;
  visibility: hidden;
  opacity: 0;
  margin: auto;
  background-color: #f9f9f9;
  padding: 0.5em;
`;

export default MegaMenu;
