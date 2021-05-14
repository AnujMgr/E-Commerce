import styled from "styled-components";

export const StyleBtnContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const StyledCard = styled.div`
  display: block;
  position: relative;
  margin: 0.5rem 0;
  background-color: #fff;
  border-radius: 0.5rem;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const StyleCardContent = styled.div`
  padding: 2% 6%;
`;

export const StyleOverlay = styled.div`
  position: absolute;
  opacity: ${((props) => props.visibility) ? "1" : 0};
  visibility: ${(props) => props.visibility};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyleOptionOverlay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: ${((props) => props.visibility) ? "1" : 0};
  visibility: ${(props) => props.visibility};
  width: 100%;
  height: auto;
  text-align: left;
  background: #fff;
  padding: 10px 0px;
  z-index: 2;
  animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  button {
    border: none;
    padding: 10px;
    margin: 2px 4px;
    border-radius: 50%;
    cursor: pointer;

    :focus {
      background-color: black;
      color: #fff;
    }
  }
`;

export const StylePriceContainer = styled.div`
  margin: 1% 0 5%;
  padding: 5% 0 40px 0;
`;

export const StyleRibbon = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px;
  height: 75px;
  text-align: right;
`;

export const StyleCardBtn = styled.button`
  display: block;
  border: 1px solid #ffeaea;
  padding: 3% 0%;
  height: 40px;
  background: #fff;
  text-align: center;
  width: 33.333%;
  cursor: pointer;
  span {
    color: black;
    -webkit-transition: all 0.7ms ease-in;
    transition: all 0.2s ease-in;
    font-size: 22px;
  }

  &:hover span {
    font-size: 28px;
  }
`;

export const StyleCardImg = styled.img`
  display: block;
  border-radius: 2px 2px 0 0;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`;

export const StyleBrandTitle = styled.p`
  text-align: center;
  padding: 14px 0;
  color: #6b6f82;
  margin: 0;
`;

export const StyleItemName = styled.p`
  color: #6b6f82;
  font-size: 14px;
  font-weight: 300;
`;

export const StyleNewPrice = styled.span`
  font-family: "Roboto";
  font-weight: 300;
  font-size: 16px;
  padding-right: 10px;
  color: #625757;
`;

export const StyleOldPrice = styled.span`
  color: #ada1a1;
  text-decoration: line-through;
  font-weight: 300;
  font-size: 16px;
  padding: 0;
`;

export const StyleSpan = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  width: 100px;
  display: block;
  background: #79a70a;
  background: linear-gradient(#351ec9 0%, #2b2ba7 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px;
  right: -21px;

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #2b2ba7;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #2b2ba7;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #2b2ba7;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #2b2ba7;
  }
`;
