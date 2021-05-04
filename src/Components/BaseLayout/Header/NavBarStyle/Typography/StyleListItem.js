import styled from "styled-components";

const ListItem = styled.li`
  li {
    padding: 0.8em 0;
    margin-left: 0%;
    transition: 0.5s all ease;
    font-weight: 400;
    &:hover {
      padding-left: 0.5em;
    }

    &:hover a {
      color: #b2b41e;
    }
  }
`;

export default ListItem;
