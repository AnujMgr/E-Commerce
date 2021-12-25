import styled from "styled-components";
import { device } from "../../Components/styles/mediaQuery";

const wrapWidth = "1300px";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20em 1fr;
  grid-column-gap: 0.5em;
  padding: 0 1rem;
  max-width: ${wrapWidth};
  margin: auto;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-column-gap: 0.8em;
  grid-row-gap: 1.5em;
  margin-bottom: 1em;
  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr;
  }
`;

export const FilterContainer = styled.div`
  padding: 0;
  width: 100%;
  margin-right: auto;
  @media ${device.tablet} {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    padding-top: 0.5em;
    z-index: 999;
  }
`;

export const StyleFilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyleHeader = styled.div`
  position: relative;
  text-align: center;
  padding: 2em 0;
  height: 18em;
  margin-top: 4.2em;
  margin-bottom: 2em;
  background-color: #00000052;
  background-image: url(${(props) => props.image});
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    z-index: 9;
    font-weight: normal;
    color: #fff;
    font-size: 2.2rem;
  }
`;

export const StyleOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000a1;
  top: 0;
  bottom: 0;
`;

export const FilterHeader = styled.div`
  border-bottom: 1px solid #b4b4b4;
  padding-bottom: 0.2em;
  margin-bottom: 0.4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClearButton = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: blue;
  background: none;
`;

export const CheckBoxContainer = styled.label`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  margin-bottom: 0.5em;
  width: 100%;
  input {
    height: 1.5em;
    width: 1.5em;
    appearance: none;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.3s;
    background-color: #98ffd1;
    cursor: pointer;
    margin-right: 0.5em;
    :checked {
      background-color: #2c09bf;
      + span::before {
        content: "\\2713";
        display: block;
        text-align: center;
        color: #fff;
        position: absolute;
        left: 0.5rem;
        top: 0.1rem;
      }
    }
  }
`;

export const FilterTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  color: #000;
  font-size: 1.2rem;
`;

export const StyleCategoryTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0;
`;

export const StyleInputFilter = styled.input`
  padding: 0px 10px;
  margin: 10px 0;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  height: 30px;
  border: 1px solid rgba(98, 92, 92, 0.33);
  width: 50px;
  border-radius: 6px;
  &::placeholder {
    color: #7d7a7a;
  }
`;

export const StyleFilterCapsule = styled.button`
  display: flex;
  align-items: center;
  background-color: #aa999c;
  width: auto;
  padding: 0.5em 1em;
  margin-right: 0.4em;
  margin-bottom: 0.4em;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  color: #fff;
  span:first-child {
    font-size: 0.8rem;
    margin-right: 1em;
    user-select: none;
  }
  span:last-child {
    display: inline-flex;
    background-color: #fff;
    border-radius: 50px;
    color: #000;
  }
`;

export const StyleMobileMenu = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: none;
  background-color: #fff;

  @media ${device.tablet} {
    display: flex;
  }
  button {
    width: 50%;
    border: 0;
    padding: 1em 2em;
    span {
      margin-left: 1em;
    }
  }
  button:first-child {
    border-right: 1px solid #bda5a5;
  }
`;
