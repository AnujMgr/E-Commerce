import styled from "styled-components";
import { device } from "../../../Components/styles/mediaQuery";

const wrapWidth = "1300px";

export const StyleNavTabsContainer = styled.div`
  max-width: ${wrapWidth};
  margin: auto;
  margin-bottom: 3em;
  padding: 0 1em;
  text-align: center;
  h1 {
    margin-top: 3em;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const StyleTab = styled.div`
  display: grid;
`;

export const StyleNavsContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar {
    width: 2px;
  }
  @media ${device.tablet_min} {
    justify-content: center;
  }
`;

export const StyleNavItem = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  transition: all ease-in-out 0.3s;
  border-bottom: ${(props) =>
    props.active ? "2px solid #000" : "2px solid #fff"};

  :hover {
    border-bottom: 2px solid #000;
  }
`;

export const StyleTabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13em, 1fr));
  grid-column-gap: 0.4em;
  grid-row-gap: 1.5em;
  div {
    text-align: center;
    padding-bottom: 1em;
    img {
      width: 100%;
      height: 20em;
      object-fit: cover;
    }
    p {
      margin: 0;
    }
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  }
  @media ${device.mobileXL} {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  }
`;
