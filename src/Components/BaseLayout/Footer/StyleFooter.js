import styled from "styled-components";
import { device } from "../../../Components/styles/mediaQuery";

export const StyleFooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 0;
`;

export const StyleFooterList = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: auto;
  color: #fff;
  gap: 12px;

  p {
    margin: 0.4rem 0;
  }
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
