import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  input {
    padding: 0 20px 0 40px;
    margin: 10px 0;
    font-size: 14px;
    font-weight: 400;
    color: #000;
    border: 1px solid #f5f5f6;
    background-color: #eaeaeb;
    height: 40px;
    min-width: 22em;
    border-radius: 0.2rem;
    :focus {
      background-color: #ffffff;
      outline: none;
      border: 1px solid #eaeaeb;
    }

    &::placeholder {
      color: #7d7a7a;
    }
  }

  svg {
    position: absolute;
    left: 10px;
    color: #7d7a7a;
  }
`;

export default SearchWrapper;
