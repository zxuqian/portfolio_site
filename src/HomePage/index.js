import React from "react";
import styled from "styled-components";
import Flex from "components/Flex";
import Hero from "assets/images/hero.svg";
import HeaderBG from "components/HeaderBG";
import Projects from "./Projects";

const Header = styled.header`
  /* background: #cccccc; */
  height: 100vh;
  width: 100vw;
  padding: 24px 10vh;
`;

const IntroContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const HeadLine = styled.h1`
  color: #fff;
`;

const Emphasize = styled.strong`
  color: ${props => props.theme.main.primary};
`;

const LogoText = styled.h1`
  margin: 0;
`;

const MenuItem = styled.li`
  list-style: none;
  display: inline-block;
  :not(:last-child) {
    margin-right: 24px;
  }
`;

function HomePage() {
  return (
    <>
      <Header>
        <HeaderBG />
        <IntroContainer>
          {/* <Flex justify="space-between">
            <nav>
              <ul>
                <MenuItem>首页</MenuItem>
                <MenuItem>简历</MenuItem>
              </ul>
            </nav>
          </Flex> */}
          <Flex align="center" justify="center" d="column">
            <HeadLine>
              我是<Emphasize>张旭乾</Emphasize>，我是一名前端工程师。
            </HeadLine>
            <HeadLine>我可以做基于React生态的项目开发，</HeadLine>
            <HeadLine>以及网站、APP、小程序的设计与实现。</HeadLine>
          </Flex>
        </IntroContainer>
      </Header>
      <section>
        <Projects />
      </section>
      <section>portfolios</section>
      <footer>footer</footer>
    </>
  );
}

export default HomePage;
