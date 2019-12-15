import React from "react";
import styled from "styled-components";
import Flex from "components/Flex";
import Hero from "assets/images/hero.svg";
import HeaderBG from "components/HeaderBG";
import Projects from "./Projects";
import SectionHeading from "components/SectionHeading";
import Experiences from "./Experiences";
import Footer from "./Footer";
import AboutMe from "./AboutMe";

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
          {/* <Flex align="center" justify="center" d="column"> */}
          <HeadLine style={{ marginTop: 0 }}>
            我是<Emphasize> 张旭乾</Emphasize>
          </HeadLine>
          <HeadLine>&lt;前端工程师 /&gt;</HeadLine>
          <HeadLine>擅长基于React生态的项目开发</HeadLine>
          <HeadLine>勇于提升，乐于求知。</HeadLine>
          {/* </Flex> */}
        </IntroContainer>
      </Header>
      <Content>
        <section>
          <SectionHeading>关于我</SectionHeading>
          <AboutMe />
        </section>
        <section>
          {/* <Flex d="column" align="center"> */}
          <SectionHeading>作品</SectionHeading>
          <Projects />
          {/* </Flex> */}
        </section>
        <section>
          <SectionHeading>经历</SectionHeading>
          <Experiences />
        </section>
      </Content>
      <Footer />
    </>
  );
}

const Header = styled(Flex)`
  /* background: #cccccc; */
  height: 100vh;
  width: 100vw;
  padding: 24px 0;
  position: relative;
  align-items: center;
  justify-content: center;
  /* flex: 1 1 auto; */

  @media screen and (max-width: 1024px) {
    height: 75vh;
  }
`;

const IntroContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const HeadLine = styled.h1`
  color: #fff;
  /* width: 60%; */
  /* padding: 0 20%; */
  line-height: 1.5em;
  /* text-align: center; */

  @media screen and (max-width: 600px) {
    font-size: 1.6em;
    text-align: center;
  }
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomePage;
