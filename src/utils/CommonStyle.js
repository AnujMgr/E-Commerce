import styled from "styled-components";

export const StyleWrap = styled.div`
  max-width: 1300px;
  width: 100%;
  height: ${(props) => (props.height ? props.height : "calc(100vh - 200px)")};
  padding: ${(props) => (props.padding ? props.padding : "0 0.6em")};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
`;

export const StylePrimaryButton = styled.button`
  transition: all ease-in-out 0.4s;
  border: ${(props) => (props.border ? props.border : "1px solid")};
  color: #000;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0 0.6em")};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  :hover {
    background-color: ${(props) =>
      props.hoverBgColor ? props.hoverBgColor : "#000"};
    color: ${(props) => (props.hoverColor ? props.hoverColor : "#fff")};
  }
`;

export const StyleFlexSB = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyleText = styled.div`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  color: ${(props) => (props.color ? props.color : "#000")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0"};
`;

export const StyleSpan = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  color: ${(props) => (props.color ? props.color : "#000")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0"};
`;
