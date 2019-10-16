import React from "react";
import styled from "styled-components";

const StyledView = styled.div`
  align-self: ${props => props.alignSelf || "initial"};
  margin: ${props => props.m || "initial"};
`;

function View({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

export default View;
