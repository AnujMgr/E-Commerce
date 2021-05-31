import styled from "styled-components";
const wrapWidth = "1200px";

export const StyleNavTabsContainer = styled.div`
  max-width: ${wrapWidth};
  margin: auto;
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
  justify-content: center;
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
  border-bottom: 2px solid #fff;

  :hover {
    border-bottom: 2px solid #000;
  }
`;

export const StyleTabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-column-gap: 0.8em;
  grid-row-gap: 1.5em;
  div {
    text-align: center;
    img {
      width: 100%;
      height: 20em;
      object-fit: cover;
    }
    p {
      margin: 0;
    }
  }
`;
