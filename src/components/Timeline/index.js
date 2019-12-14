import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function TimeLine({ children }) {
  return <StyledTimeLine>{children}</StyledTimeLine>;
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

TimeLine.propTypes = {};

export default TimeLine;
export { TimeLineContainer };
