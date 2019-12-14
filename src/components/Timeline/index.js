import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function TimeLine(props) {
  return (
    <StyledTimeLine>
      <TimeLineContainer left>
        <ContentContainer>
          <Title>华兴资本逐鹿X</Title>
          <Description>高级前端工程师</Description>
          <Duration>2018.07-2019.08</Duration>
          <Content>
            content long long long long long long long long long long long long
            long
          </Content>
        </ContentContainer>
      </TimeLineContainer>
      <TimeLineContainer>
        <ContentContainer>
          <Title>美国斯蒂文斯理工学院</Title>
          <Description>计算机科学 研究生</Description>
          <Duration>2016.07-2018.01</Duration>
          <Content>
            content long long long long long long long long long long long long
            long long
          </Content>
        </ContentContainer>
      </TimeLineContainer>
      <TimeLineContainer left>
        <ContentContainer>
          <Title>华美宏大信息技术（北京）有限公司</Title>
          <Description>Staff Software Engineer</Description>
          <Duration>2013.07-2016.07</Duration>
          <Content>
            content long long long long long long long long long long long long
            long long
          </Content>
        </ContentContainer>
      </TimeLineContainer>
      <TimeLineContainer>
        <ContentContainer>
          <Title>自由职业</Title>
          <Description>软件工程师</Description>
          <Duration>2011.02 - 2013.01</Duration>
          <Content>
            content long long long long long long long long long long long long
            long long
          </Content>
        </ContentContainer>
      </TimeLineContainer>
      <TimeLineContainer left>
        <ContentContainer>
          <Title>北京大学网络教育学院</Title>
          <Description>计算机科学与硕士 专升本</Description>
          <Duration>2010.07-2014.01</Duration>
          <Content>
            content long long long long long long long long long long long long
            long long
          </Content>
        </ContentContainer>
      </TimeLineContainer>
      <TimeLineContainer>
        <ContentContainer>
          <Title>北京北大软件工程发展有限公司</Title>
          <Description>软件工程师</Description>
          <Duration>2010.07-2010.12</Duration>
          <Content>
            content long long long long long long long long long long long long
            long long
          </Content>
        </ContentContainer>
      </TimeLineContainer>
    </StyledTimeLine>
  );
}

const StyledTimeLine = styled.div`
  /* background: tran; */
  position: relative;
  ::after {
    content: "";
    width: 4px;
    top: 4px;
    bottom: 0;
    left: calc(50% - 2px);
    position: absolute;
    background: ${props => props.theme.main.light};
  }
`;

const TimeLineContainer = styled.div`
  /* background: #eeffff; */
  position: relative;
  width: 50%;
  padding: 0px 20px;

  left: ${props => (props.left ? "0" : "calc(50% + 2px)")};
  text-align: ${props => (props.left ? "right" : "left")};

  /* circle */
  ::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    right: ${props => (props.left ? "-10px" : "auto")};
    left: ${props => (!props.left ? "-12px" : "auto")};
    top: 4px;
    background-color: white;
    border: 4px solid ${props => props.theme.main.primary};
    border-radius: 50%;
    z-index: 1;
  }
`;

const ContentContainer = styled.div`
  /* background: ${props => props.theme.main.primary}; */
  border-radius: 6px;
  padding: 2px 12px;
`;

const Title = styled.h4`
  font-size: 18px;
  margin: 4px 0;
`;

const Duration = styled.p`
  font-size: 12px;
  color: ${props => props.theme.main.gray};
  /* margin-top: -8px;
  margin-bottom: 6px; */
`;

const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.main.gray};
`;

const Content = styled.p`
  margin: 0;
`;

TimeLine.propTypes = {};

export default TimeLine;
