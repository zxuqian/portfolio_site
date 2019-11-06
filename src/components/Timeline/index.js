import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function TimeLine(props) {
  return (
    <StyledTimeLine>
      <TimeLineContainer left>
        <ContentContainer>
          <Title>华兴资本逐鹿X</Title>
          <Description>高级前端工程师</Description>
          <Content>content long long long long long long long long long long long long long</Content>
        </ContentContainer>
      </TimeLineContainer>
      <TimeLineContainer>
        <ContentContainer>
          <Title>美国斯蒂文斯理工学院</Title>
          <Description>计算机科学 研究生</Description>
          <Content>content long long long long long long long long long long long long long long</Content>
        </ContentContainer>
      </TimeLineContainer>
    </StyledTimeLine>
  )
}

const StyledTimeLine = styled.div`
  /* background: tran; */
  position: relative;
  ::after {
    content: '';
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

  left: ${props => props.left ? "0" : "calc(50% + 2px)"};
  text-align: ${props => props.left ? "right" : "left"};


   /* circle */
  ::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    right: ${props => props.left ? "-10px" : "auto"};
    left: ${props => !props.left ? "-12px" : "auto"};
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

const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.main.gray};
`;

const Content = styled.p`
  margin: 0;
`;


TimeLine.propTypes = {

}

export default TimeLine

