import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 18em 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 1.5em;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-column-gap: 0.5em;
`;

export const FilterContainer = styled.div`
  padding: 0 1.5em;
  width: 100%;
  margin-right: auto;
`;

export const StyleFilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyleHeader = styled.div`
  text-align: center;
  margin: 2em 0;
  h1 {
    font-weight: bold;
    color: #6b6a6a;
  }
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
