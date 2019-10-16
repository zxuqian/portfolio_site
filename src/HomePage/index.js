import React from "react";
import styled from "styled-components";
import Flex from "components/Flex";
import Hero from "assets/images/hero.svg";

const Header = styled.header`
  /* background: #cccccc; */
  height: 100vh;
  width: 100vw;
  padding: 24px 10vh;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-position: 100% 20%;
  background-size: 60%;
  opacity: 1;
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
        <IntroContainer>
          <Flex justify="space-between">
            <div>
              <LogoText>张旭乾</LogoText>
              <p>前端工程师</p>
            </div>

            <nav>
              <ul>
                <MenuItem>首页</MenuItem>
                <MenuItem>简历</MenuItem>
              </ul>
            </nav>
          </Flex>
          <h1>你好，我是张旭乾，我是一名前端工程师</h1>
          <h1>专注于网站内容开发</h1>
        </IntroContainer>
      </Header>
      <section>
        <div>jumbtro</div>
      </section>
      <section>portfolios</section>
      <footer>footer</footer>
    </>
  );
}

export default HomePage;
