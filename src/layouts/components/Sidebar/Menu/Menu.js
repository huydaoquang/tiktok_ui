import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ children }) => {
  return <nav>{children}</nav>;
};
Menu.propType = {
  children: PropTypes.node.isRequired,
};
export default Menu;
