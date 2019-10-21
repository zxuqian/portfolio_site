import React, { Component, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Isotope from "isotope-layout";
import Flex from "components/Flex";
import styled from "styled-components";
import FilterBar from "components/FilterBar";

function Projects() {
  const projectsRef = useRef(null);
  const isoRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current) {
      // initialize Isotope
      let iso = new Isotope(projectsRef.current, {
        itemSelector: ".project-item",
        layoutMode: "fitRows"
      });
      isoRef.current = iso;
    }
  }, [projectsRef]);

  /**
   * Filter items
   * @param {string} filter The class query selector value for the filter
   */
  const onFilter = filter => {
    let iso = isoRef.current;
    if (iso) {
      iso.arrange({ filter });
    }
  };

  return (
    <>
      {/* project filter buttons */}

      <FilterBar onFilter={onFilter} />
      <ProjectsContainer ref={projectsRef} justify="center">
        <div className="project-item p1">
          <div>
            <ThumbNail>
              <div>aabb</div>
            </ThumbNail>
          </div>
        </div>
        <div className="project-item p2">
          <div>
            <ThumbNail />
            <div>aabb</div>
          </div>
        </div>
        <div className="project-item p2">
          <div>
            <ThumbNail />
            <div>aabb</div>
          </div>
        </div>
        <div className="project-item p1">
          <div>
            <ThumbNail />
            <div>aabb</div>
          </div>
        </div>
        <div className="project-item p2">
          <div>
            <ThumbNail />
            <div>aabb</div>
          </div>
        </div>
        <div className="project-item p2">
          <div>
            <ThumbNail />
            <div>aabb</div>
          </div>
        </div>
      </ProjectsContainer>
    </>
  );
}

const ProjectsContainer = styled(Flex)`
  margin-top: 24px;
  max-width: 1240px;
  width: 100%;
  flex-wrap: wrap;
`;

const ThumbNail = styled.div`
  width: 400px;
  height: 300px;
  background: #cccccc;
`;

export default Projects;
