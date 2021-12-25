import React from "react";
import { StyleWrap } from "../../../utils/CommonStyle";
import {
  StyleFooterContainer,
  StyleWrapper,
  StyleFooterList,
} from "./StyleFooter";

const Footer = () => {
  return (
    <div style={{ background: "#353745", padding: "2rem" }}>
      <StyleWrap bgColor="#353745" height="100%" width="100%">
        <StyleFooterContainer>
          <StyleFooterList>
            <h3>COMPANY</h3>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </StyleFooterList>
          <StyleFooterList>
            <h3>ABOUT US</h3>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </StyleFooterList>
          <StyleFooterList>
            <h3>COMPANY</h3>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </StyleFooterList>
          <StyleFooterList>
            <h3>COMPANY</h3>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </StyleFooterList>
        </StyleFooterContainer>
      </StyleWrap>
    </div>
  );
};

export default React.memo(Footer);
