import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  input {
    padding: 0 0 0 40px;
    margin: 10px 0;
    font-size: 14px;
    font-weight: 400;
    color: #000;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: #fffffff2;
    height: 40px;
    border: 0 !important;
    min-width: 30em;
    border-radius: 0.2rem;
    :focus {
      background-color: #ffffff;
    }

    &::placeholder {
      color: #7d7a7a;
    }
  }

  i {
    position: absolute;
    left: 10px;
    color: #7d7a7a;
  }
`;

export default SearchWrapper;
