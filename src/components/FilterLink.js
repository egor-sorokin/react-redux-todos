import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const FilterLink = ({ filter, children }) => {
  const style = {
    textDecoration: 'none',
    color: 'black',
  };

  return filter === 'all'
    ? <IndexLink to="/" activeStyle={style}>{children}</IndexLink>
    : <Link to={filter} activeStyle={style}>{children}</Link>;
};

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired,
};


export default FilterLink;
