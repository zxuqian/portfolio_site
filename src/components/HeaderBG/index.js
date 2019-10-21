import React, { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components";
import { CanvasSpace, Pt, Group, Num, Create, Line } from "pts";

const StyledHeaderBG = styled.div`
  position: absolute;
  /* z-index: -1; */
  left: 0;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
`;

function HeaderBG({ ...rest }) {
  const canvasRef = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (canvasRef.current) {
      let space = new CanvasSpace(canvasRef.current);
      space.setup({ bgcolor: "#123", retina: true, resize: true });

      let form = space.getForm();

      let pts = new Group();

      space.add({
        start: bound => {
          pts = Create.distributeRandom(space.innerBound, 80);
          pts.forEach(p => (p.ratio = 0.1));
        },
        animate: (time, ftime) => {
          let perpend = new Group(new Pt(0, 0), new Pt(space.size.x, 0)).op(
            Line.perpendicularFromPt
          );

          pts.rotate2D(0.0005, space.center);

          let mouse = space.pointer;

          pts.forEach((p, i) => {
            let lp = perpend(p);

            // calculate distance with mouse pointer
            let distance = Line.distanceFromPt([p, lp], mouse);

            if (distance <= 50) {
              if (p.ratio < 0.3) {
                p.ratio += 0.015;
              }
            } else {
              if (p.ratio > 0.1) {
                p.ratio -= 0.01;
              }
            }

            form.stroke(`rgba(255,255,255, ${p.ratio})`, 1).line([p, lp]);
            form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 0.6);
          });
        }
      });

      // space.add({
      //   // creatr 200 random points
      //   start: bound => {
      //     pts = Create.distributeRandom(space.innerBound, 200);
      //   },

      //   animate: (time, ftime) => {
      //     // make a line and turn it into an "op" (see the guide on Op for more)
      //     let perpend = new Group(
      //       space.center.$subtract(0.1),
      //       space.pointer
      //     ).op(Line.perpendicularFromPt);
      //     pts.rotate2D(0.0005, space.center);

      //     pts.forEach((p, i) => {
      //       // for each point, find the perpendicular to the line
      //       let lp = perpend(p);
      //       let ratio = Math.min(
      //         1,
      //         1 - lp.$subtract(p).magnitude() / (space.size.x / 2)
      //       );
      //       form.stroke(`rgba(255,255,255,${ratio}`, ratio * 2).line([p, lp]);
      //       form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 1);
      //     });
      //   }
      // });

      space
        .bindMouse()
        .bindTouch()
        .play();
    }
  }, [canvasRef, theme.main.dark]);

  return (
    <StyledHeaderBG>
      <canvas ref={canvasRef} {...rest}></canvas>
    </StyledHeaderBG>
  );
}

HeaderBG.propTypes = {};

export default HeaderBG;
