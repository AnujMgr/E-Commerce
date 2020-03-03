import styled from "styled-components";

const StyleBreadCrumb = styled.div`
  width: 96%;
  font-size: 0.8rem;
  padding: 3% 0;
  a:not(:last-of-type) {
    color: black;
    font-weight: 500; 
    &:hover {
      color: #d78e8e;
    }
  }
  a:last-child {
    color: rgb(107, 106, 106);
    font-weight: 600;
    pointer: none;
  }
  a:not(:first-of-type) {
    &::before {
      content: " / ";
      color: rgb(143, 136, 136);
    }

`;

export default StyleBreadCrumb;