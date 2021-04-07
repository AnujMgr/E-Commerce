import styled from "styled-components";

const ListItem = styled.li`
  li {
    padding: 5% 0;
    margin-left: 0%;
    transition: 0.5s all ease;
    font-weight: 400;
    &:hover {
      padding-left: 5%;
    }

    &:hover a {
      color: #b2b41e;
    }
   
  }
`;

export default ListItem;
