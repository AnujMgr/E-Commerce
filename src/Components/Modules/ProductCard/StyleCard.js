import styled from "styled-components";

export const StyleCard = styled.div`
  height: 100%;
  max-height: 25em;
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
  padding: 1em 0.5em;
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
    }
    p {
      width: 180px;
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
  padding: 0 0.5em;
  padding-bottom: 0.5em;
`;

export const StyleCartCounter = styled.div`
  display: flex;
  align-items: center;
  button,
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2em;
    width: 2em;
    border: 1px solid #000;
    padding: 0.4rem;
    font-size: 1em;
  }

  span {
    border-left: 0;
    border-right: 0;
  }
`;
export const StyleAddToCartBtn = styled.button`
  border: 1px solid #000;
  padding: 0 0.8rem;
  border-radius: 50px;
  cursor: pointer;
`;
