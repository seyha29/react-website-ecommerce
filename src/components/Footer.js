import React from "react";
import styled from "styled-components";

import { Typography } from ".";

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography.P>
        &copy;{new Date().getFullYear()} by
        <a href='https://github.com/seyha29'> :fake api store@2024</a>, All rights
        reserved
      </Typography.P>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #808080; /* Direct gray color code */
  height: var(--footer-height);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    color: var(--white-color);
  }

  a {
    color: #fff;
    font-size: var(--fs-500);
  }
`;

export default Footer;
