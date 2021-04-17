import styled from "styled-components";
import { device } from "../../../../styles/mediaQuery";

const StyleLeftNavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  list-style: none;
  align-items: center;
  width: 85%;
  margin-left: 3%;

  @media ${device.tablet} {
    @media ${device.tablet} {
      display: none;
    }
  }
`;

export default StyleLeftNavLinks;
