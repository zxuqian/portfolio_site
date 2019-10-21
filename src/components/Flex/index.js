import React from "react";
import styled from "styled-components";
import View from "components/View";

const StyledFlex = styled(View)`
  display: flex;
  flex: ${props => props.flex || "initial"};
  align-items: ${props => props.align || "stretch"};
  justify-content: ${props => props.justify || "flex-start"};
  flex-direction: ${props => props.d || "row"};
`;

function Flex({ children, flex, align, justify, d, ...rest }, ref) {
  return (
    <StyledFlex
      ref={ref}
      flex={flex}
      align={align}
      justify={justify}
      d={d}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
}

export default React.forwardRef(Flex);
