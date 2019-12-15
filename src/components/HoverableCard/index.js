import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "components/Flex";
import Modal from "react-modal";

function HoverableCard({ title, description, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ThumbNail>
        <ThumbNailAction>
          <Title>
            <h3>{title}</h3>
            <p>{description}</p>
          </Title>
          <button onClick={openModal}>查看详情</button>
        </ThumbNailAction>
      </ThumbNail>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={hideModal}
        style={modalStyles}
      >
        {children}
      </Modal>
    </div>
  );
}

const ThumbNail = styled.div`
  width: 400px;
  height: 300px;
  background: #cccccc;

  @media screen and (max-width: 400px) {
    width: 100vw;
  }
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

const modalStyles = {
  content: {
    background: "none",
    border: "none"
  },
  overlay: {
    background: "rgba(255, 255, 255, 0.95)"
  }
};

HoverableCard.propTypes = {};

export default HoverableCard;
