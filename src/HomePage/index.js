import React from "react";
import styled from "styled-components";
import Flex from "components/Flex";
import Hero from "assets/images/hero.svg";
import HeaderBG from "components/HeaderBG";
import Projects from "./Projects";
import SectionHeading from "components/SectionHeading";

const Header = styled(Flex)`
  /* background: #cccccc; */
  height: 100vh;
  width: 100vw;
  padding: 24px 10vh;
  position: relative;
  align-items: center;
`;

const IntroContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const HeadLine = styled.h1`
  color: #fff;
  width: 60%;
  line-height: 1.5em;
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
              我是<Emphasize> 张旭乾，</Emphasize>
              &lt;前端工程师 /&gt;
              ，我可以做基于React生态的项目开发，以及网站、APP、小程序的设计与实现。
            </HeadLine>
          </Flex>
        </IntroContainer>
      </Header>
      <section>
        <Flex d="column" align="center">
          <SectionHeading>作品</SectionHeading>
          <Projects />
        </Flex>
      </section>
      <section>简历</section>
      <footer>footer</footer>
    </>
  );
}

export default HomePage;
