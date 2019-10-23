import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import styled from "styled-components";
import Flex from "components/Flex";
import Sample from "assets/images/sample.jpeg";

function Carousel({ children, ...rest }) {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    customPaging: i => {
      return <img src={Sample} />;
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Flex align="center" justify="center" style={{ height: "100%" }}>
      <Flex style={{ maxWidth: "1240px" }}>
        <div style={{ maxWidth: "700px", padding: "0 24px" }}>
          <StyledSlider {...settings}>
            <div>
              <img src={Sample} width="700" height="400" />
            </div>
            <div>
              <img src={Sample} width="700" height="400" />
            </div>
            <div>
              <img src={Sample} width="700" height="400" />
            </div>
          </StyledSlider>
        </div>

        <Description>
          这是项目描述这是项目描述这是项目描述这是项目描述这是项目描述这是项目描述这是项目描述这是项目描述这是项目描述这是项目描述这是项目描述
        </Description>
      </Flex>
    </Flex>
  );
}

const Description = styled.div`
  color: #fff;
  margin-left: 150px;
`;

const StyledSlider = styled(Slider)`
  .slick-thumb {
    bottom: -75px;
    li {
      width: auto;
      height: auto;
      img {
        width: 100px;
      }
    }
  }
`;

Carousel.propTypes = {};

export default Carousel;
