import React, { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import wechatQRcode from "assets/images/wechatQRcode.jpg";

import {
  FaWeixin,
  FaWeibo,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer(props) {
  return (
    <StyledFooter>
      <IconContext.Provider value={{ size: "1.2em" }}>
        <SocialIcons>
          <Popover
            content={<img src={wechatQRcode} width="150" alt="微信二维码" />}
          >
            <FaWeixin />
          </Popover>
          <SocialLink url="https://weibo.com/jeffava">
            <FaWeibo />
          </SocialLink>
          <SocialLink url="https://github.com/zxuqian">
            <FaGithub />
          </SocialLink>
          <SocialLink url="https://www.linkedin.com/in/zxuqian">
            <FaLinkedin />
          </SocialLink>
          <SocialLink url="https://twitter.com/zxuqian">
            <FaTwitter />
          </SocialLink>
          <SocialLink url="https://www.facebook.com/zxuqian">
            <FaFacebook />
          </SocialLink>
        </SocialIcons>
      </IconContext.Provider>
      <p>&copy;2019 张旭乾 保持优秀，持续进步</p>
    </StyledFooter>
  );
}

function SocialLink({ url, children }) {
  return <StyledSocialLink href={url}>{children}</StyledSocialLink>;
}

function Popover({ content, children }) {
  const [show, setShow] = useState(false);
  return (
    <StyledPopover
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && <PopoverContent>{content}</PopoverContent>}
      {children}
    </StyledPopover>
  );
}

Footer.propTypes = {};

const StyledFooter = styled.footer`
  margin-top: 24px;
  padding: 24px;
  background-color: ${props => props.theme.main.gray};
  color: ${props => props.theme.main.light};
`;

const SocialIcons = styled.p`
  margin: 0;
  svg {
    margin: 0 12px;
  }
`;

const StyledSocialLink = styled.a`
  color: inherit;
`;

const StyledPopover = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

const PopoverContent = styled.div`
  position: absolute;
  bottom: 1.4em;
`;

export default Footer;
