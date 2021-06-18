import React from 'react';
import Filters from './Filters/Filters';
import Button from './Button/Button';

const Sidebar = ({
  setFilter,
  currentFilter,
  toggleEditable,
  isEditableVisible
}) => {

  return (
    <div className="sidebar">
      <Filters
        setFilter={ setFilter }
        currentFilter={ currentFilter }
      />
      <Button
        text="Create task"
        handler={ () => toggleEditable(!isEditableVisible) }
      />
    </div>
  );
};

export default Sidebar;
