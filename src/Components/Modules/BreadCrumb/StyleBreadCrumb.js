import styled from "styled-components";

export const StyleBreadCrumb = styled.div`
  width: 100%;
  font-size: 0.8rem;
  z-index: 9;
  a:not(:last-of-type) {
    color: #fff;
    font-weight: 500;
  }
  a:last-child {
    color: #fff;
    font-weight: 600;
  }
  a:not(:first-of-type) {
    &::before {
      content: " / ";
      color: rgb(143, 136, 136);
    }
  }
`;
