import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function AboutMe(props) {
  return (
    <Container>
      <p>
        我把自己定位于全能型软件工程师。自工作以来，我从事过后端开发、移动开发、前端开发以及全栈开发，对软件整体的结构有着清晰的认识。我擅长编写可复用的代码，以用最少的代码实现最多的功能，并在后期的维护过程中减少重复劳动，提升效率。
        {/* </p> */}
        {/* <p> */}
        我热爱学习，在高考失利后，我没有放弃学习，从专科到专升本到美国硕士，我以求知为己任，不断充实自己，有着强大的学习与研究能力。由于对技术的热爱，业余时间我会关注最新的技术动向，去学习感兴趣的新技术，以丰富自己的技术栈，在遇到职业变动或希望尝试不同方向时，能很快适应。
        {/* </p> */}
        {/* <p> */}
        {/* </p> */}
        {/* <p> */}
        我目前专注于前端和全栈开发，如您有需要，可到页面底部
        <strong>查看联系方式。</strong>
      </p>
    </Container>
  );
}

AboutMe.propTypes = {};

const Container = styled.div`
  padding: 0 1.1em;
  font-size: 1.1em;
  line-height: 1.8em;

  strong {
    color: ${props => props.theme.main.primary};
  }
`;

export default AboutMe;
