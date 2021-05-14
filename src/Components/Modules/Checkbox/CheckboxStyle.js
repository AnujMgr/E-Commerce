import styled from "styled-components";

export const CheckBoxContainer = styled.label`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  margin-bottom: 0.5em;
  width: 100%;
  input {
    height: 1.5em;
    width: 1.5em;
    appearance: none;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.3s;
    background-color: #98ffd1;
    cursor: pointer;
    margin-right: 0.5em;
    :checked {
      background-color: #2c09bf;
      + span::before {
        content: "\\2713";
        display: block;
        text-align: center;
        color: #fff;
        position: absolute;
        left: 0.5rem;
        top: 0.1rem;
      }
    }
  }
`;
