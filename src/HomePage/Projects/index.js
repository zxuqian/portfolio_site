import React, { Component, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Isotope from "isotope-layout";
import Flex from "components/Flex";
import styled from "styled-components";
import FilterBar from "components/FilterBar";
import HoverableCard from "components/HoverableCard";
import projects from "data/projects";
import Carousel from "components/Carousel";

function Projects() {
  const projectsRef = useRef(null);
  const isoRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current) {
      // initialize Isotope
      let iso = new Isotope(projectsRef.current, {
        itemSelector: ".project-item",
        // layoutMode: "fitRows"
        masonry: {
          columnWidth: 400
          // fitWidth: true
        }
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
        {projects.map(project => {
          return (
            <div
              key={project.id}
              className={`project-item ${project.category.join(" ")}`}
            >
              <HoverableCard
                title={project.title}
                description={project.description}
              >
                <Carousel />
              </HoverableCard>
            </div>
          );
        })}
      </ProjectsContainer>
    </>
  );
}

const ProjectsContainer = styled.div`
  margin-top: 24px;
  max-width: 1240px;
  width: 100vw;
  /* flex-wrap: wrap;
  flex: 0 auto;
  align-items: center;
  justify-content: center; */
`;

export default Projects;
