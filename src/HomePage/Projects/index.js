import React, { Component, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Isotope from "isotope-layout";

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
      <button onClick={onFilter.bind(null, ".p1")}>1</button>
      <button onClick={onFilter.bind(null, ".p2")}>2</button>
      <div ref={projectsRef}>
        <div className="project-item p1">abc</div>
        <div className="project-item p2">efg</div>
      </div>
    </>
  );
}

export default Projects;
