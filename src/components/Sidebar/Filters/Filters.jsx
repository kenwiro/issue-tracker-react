import React from 'react';
import Filter from './Filter/Filter';

const filterNames = [ 'ALL', 'OPENED', 'PENDING', 'CLOSED' ];

const Filters = ({ setFilter, currentFilter }) => {

  const FilterList =
    filterNames
      .map(filterName =>
        <Filter
          key={ filterName }
          filterName={ filterName }
          currentFilter={ currentFilter }
          setFilter={ () => setFilter(filterName) }
        />
      );

  return (
    <div className="sidebar__filters">
      <ul className="sidebar__filters__list" >
        { FilterList }
      </ul>
    </div>
  );
};

export default Filters;
