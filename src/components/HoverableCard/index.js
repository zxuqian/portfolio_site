import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "components/Flex";

function HoverableCard({ title, description }) {
  return (
    <div>
      <ThumbNail>
        <ThumbNailAction>
          <Title>
            <h3>{title}</h3>
            <p>{description}</p>
          </Title>

          <button>查看详情</button>
        </ThumbNailAction>
      </ThumbNail>
    </div>
  );
}

const ThumbNail = styled.div`
  width: 400px;
  height: 300px;
  background: #cccccc;
`;

const Title = styled.div`
  h3 {
    text-align: center;
    margin: 0;
    font-size: 20px;
  }

  p {
    color: ${props => props.theme.main.primary};
    text-align: center;
    padding: 0 12px;
  }
`;

const ThumbNailAction = styled(Flex)`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 48px 0;
  background: #fff;
  opacity: 0;
  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
    ${Title} {
      transform: translateY(32px);
    }
    button {
      transform: translateY(-32px);
    }
  }

  ${Title},
  button {
    transform: translateY(0);
    transition: all 0.3s ease-in-out;
  }

  button {
    background: none;
    border: 2px solid ${props => props.theme.main.primary};
    padding: 10px 24px;
    font-size: 14px;

    :hover {
      background-color: ${props => props.theme.main.primary};
      color: #fff;
    }
  }
`;

HoverableCard.propTypes = {};

export default HoverableCard;
