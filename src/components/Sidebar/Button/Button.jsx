import React from 'react';

const Button = ({ handler, text }) => {

  return (
    <button
      className="sidebar__button"
      onClick={ handler }
    >{ text }</button>
  );
};

export default Button;
