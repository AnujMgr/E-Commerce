import styled from "styled-components";

export const StyleCard = styled.div`
  height: 100%;
  max-height: 26em;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  overflow: hidden;
  figure {
    margin: 0;
    height: 17em;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const StyleCardBody = styled.div`
  padding: 0.8em 1em;
  padding-top: 1.2em;

  div {
    display: flex;
    justify-content: space-between;
    h5 {
      font-size: 1rem;
      margin: 0;
    }
  }
`;

export const StyleCardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 0.3em;
    h5 {
      font-size: 1.3rem;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    p {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 1rem;
      margin: 0.3rem 0;
      color: #6b6f82;
    }
  }
  span {
    color: #43444b;
    font-size: 1.2rem;
    margin: 0;
    font-weight: bold;
  }
`;

export const StyleCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  padding-bottom: 0.8em;
`;
