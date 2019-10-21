import { useState, useCallback } from "react";

const useFilterBar = onFilter => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeWidth, setActiveWidth] = useState(0);
  const [indicatorOffset, setIndicatorOffset] = useState(0);

  const filterBarRef = useCallback(
    filterBar => {
      if (filterBar && filterBar.children) {
        const offSet = Array.from(filterBar.children).reduce(
          (prev, current, index) => {
            const filterTabWidth = current.getBoundingClientRect().width;
            if (activeTab === index) {
              setActiveWidth(filterTabWidth);
            }
            if (index < activeTab) {
              return prev + filterTabWidth + 16; // padding
            }
            return prev;
          },
          0
        );

        setIndicatorOffset(offSet);
      }
    },
    [activeTab]
  );

  const onFilterTabClick = (activeIndex, filterValue) => {
    setActiveTab(activeIndex);
    onFilter(filterValue);
  };

  return {
    activeTab,
    activeWidth,
    indicatorOffset,
    onFilterTabClick,
    filterBarRef
  };
};

export { useFilterBar };
