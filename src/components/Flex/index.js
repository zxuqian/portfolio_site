import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex: ${props => props.flex || "initial"};
  align-items: ${props => props.align || "stretch"};
  justify-content: ${props => props.justify || "flex-start"};
  flex-direction: ${props => props.d || "row"};
`;

function Flex({ children, flex, align, justify, d, ...rest }) {
  return (
    <StyledFlex flex={flex} align={align} justify={justify} d={d} {...rest}>
      {children}
    </StyledFlex>
  );
}

export default Flex;
