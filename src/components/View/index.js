import React from "react";
import styled from "styled-components";

const StyledView = styled.div`
  align-self: ${props => props.alignSelf || "initial"};
  margin: ${props => props.m || "initial"};
  padding: ${props => props.p || "initial"};
`;

function View({ children, ...rest }, ref) {
  return (
    <StyledView {...rest} ref={ref}>
      {children}
    </StyledView>
  );
}

export default React.forwardRef(View);
