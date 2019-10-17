import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CanvasSpace, Pt, Group, Num, Create, Line } from "pts";

const StyledHeaderBG = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

function HeaderBG({ ...rest }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      console.log(canvasRef.current);
      let space = new CanvasSpace(canvasRef.current);
      space.setup({ bgcolor: "#123", retina: true, resize: true });

      let form = space.getForm();

      let pts = new Group();

      space.add({
        // creatr 200 random points
        start: bound => {
          pts = Create.distributeRandom(space.innerBound, 200);
        },

        animate: (time, ftime) => {
          // make a line and turn it into an "op" (see the guide on Op for more)
          let perpend = new Group(
            space.center.$subtract(0.1),
            space.pointer
          ).op(Line.perpendicularFromPt);
          pts.rotate2D(0.0005, space.center);

          pts.forEach((p, i) => {
            // for each point, find the perpendicular to the line
            let lp = perpend(p);
            let ratio = Math.min(
              1,
              1 - lp.$subtract(p).magnitude() / (space.size.x / 2)
            );
            form.stroke(`rgba(255,255,255,${ratio}`, ratio * 2).line([p, lp]);
            form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 1);
          });
        }
      });

      space
        .bindMouse()
        .bindTouch()
        .play();
    }
  }, [canvasRef]);

  return <StyledHeaderBG ref={canvasRef} {...rest}></StyledHeaderBG>;
}

HeaderBG.propTypes = {};

export default HeaderBG;
