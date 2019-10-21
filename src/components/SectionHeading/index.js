import React from "react";
import PropTypes from "prop-types";
import Flex from "components/Flex";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 0px;
`;

const Indicator = styled.div`
  background-color: ${props => props.theme.main.gray};
  height: 4px;
  width: 20px;
  margin: 12px 0px;
`;

function SectionHeading({ children, ...rest }) {
  return (
    <>
      <Heading>{children}</Heading>
      <Indicator />
    </>
  );
}

SectionHeading.propTypes = {};

export default SectionHeading;
