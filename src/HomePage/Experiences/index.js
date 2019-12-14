import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TimeLine, { TimeLineContainer } from "components/Timeline";
import experience from "data/experience";

function Experiences(props) {
  return (
    <div>
      <TimeLine>
        {experience.map((exp, index) => {
          return (
            <TimeLineContainer left={index % 2 === 0} key={exp.id}>
              <ContentContainer>
                <Title>{exp.title}</Title>
                <Description>{exp.description}</Description>
                <Duration>{exp.duration}</Duration>
                <Content>{exp.content}</Content>
              </ContentContainer>
            </TimeLineContainer>
          );
        })}
      </TimeLine>
    </div>
  );
}

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

Experiences.propTypes = {};

export default Experiences;
