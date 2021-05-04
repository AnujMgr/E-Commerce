import styled from "styled-components";

export const StyleCategoryTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0;
`;

export const StyleFilterTitle = styled.h6`
  font-size: 14px;
  font-weight: 300;
  margin: 10px 0;
  color: rgb(117, 117, 117);
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

export const StyleFilterContainer = styled.div`
  margin-right: auto;
`;
