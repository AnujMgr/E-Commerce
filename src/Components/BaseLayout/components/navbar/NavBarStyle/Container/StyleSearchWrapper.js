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
    background-color: rgba(224, 215, 215, 0.329);
    height: 40px;
    border: 0 !important;
    min-width: 300px;
    border-radius: 20px;    
    
    &::placeholder {
      color: #7d7a7a;
    }
  }

  i{
      position: absolute;
      left: 10px;
      color: #7d7a7a;
    }
`;

export default SearchWrapper;
