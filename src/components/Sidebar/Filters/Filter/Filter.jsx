import React, { useMemo } from 'react';

const Filter = ({
  currentFilter,
  filterName,
  setFilter
}) => {

  const computedFilterClasses = (currentFilter, filterName) =>
    currentFilter === filterName
      ? 'sidebar__filters__list__item sidebar__filters__list__item--active'
      : 'sidebar__filters__list__item';

  const filterClasses = useMemo(() =>
    computedFilterClasses(currentFilter, filterName),[ filterName, currentFilter ]);

  return (
    <li
      className={ filterClasses }
      onClick={ setFilter }
    >
      <span>{ filterName }</span>
    </li>
  );
};

export default Filter;
