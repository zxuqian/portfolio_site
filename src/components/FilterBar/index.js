import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFilterBar } from "./hooks";

const filters = [
  { name: "所有", value: "*" },
  { name: "前端", value: ".frontend" },
  { name: "后端", value: ".backend" },
  { name: "移动端", value: ".mobile" }
];

function FilterBar({ children, onFilter, ...rest }) {
  const {
    activeTab,
    activeWidth,
    indicatorOffset,
    onFilterTabClick,
    filterBarRef
  } = useFilterBar(onFilter);

  return (
    <StyledFilterBar ref={filterBarRef}>
      {filters.map((v, i) => {
        return (
          <FilterTab
            active={i === activeTab}
            indicatorWidth={activeWidth + "px"}
            indicatorOffset={indicatorOffset + "px"}
            key={i}
            onClick={onFilterTabClick.bind(null, i, v.value)}
          >
            {v.name}
          </FilterTab>
        );
      })}
    </StyledFilterBar>
  );
}

const StyledFilterBar = styled.div`
  position: relative;
`;

const FilterTab = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  background: none;
  color: ${props => (props.active ? `#fff` : `initial`)};
  transition: color 0.2s linear 0.1s;

  /* remove active box shadow  */
  &:focus {
    outline: 0;
  }

  &:not(:last-child) {
    margin-right: 16px;
  }

  &:first-child {
    ::before {
      content: "";
      display: block;
      position: absolute;
      background: ${props => props.theme.main.primary};
      width: ${props => props.indicatorWidth || 0};
      z-index: -50;
      top: 0;
      bottom: 0;
      left: ${props => props.indicatorOffset || 0};
      transition: left 0.3s ease-in-out;
    }
  }
`;

FilterBar.propTypes = {};

export default FilterBar;
