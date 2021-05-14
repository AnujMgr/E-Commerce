import styled from "styled-components";

export const StyleBreadCrumb = styled.div`
  width: 100%;
  font-size: 0.8rem;
  a:not(:last-of-type) {
    color: black;
    font-weight: 500;
    &:hover {
      color: #241c69;
    }
  }
  a:last-child {
    color: rgb(107, 106, 106);
    font-weight: 600;
  }
  a:not(:first-of-type) {
    &::before {
      content: " / ";
      color: rgb(143, 136, 136);
    }
  }
`;
