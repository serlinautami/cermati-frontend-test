import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SiteContainer = ({ children }) => {
  return (
    <div className="site-container">
      {children}
    </div>
  )
}

SiteContainer.propTypes = {
  children: PropTypes.node
}

SiteContainer.defaultProps = {
  children: null
}

export default React.memo(SiteContainer);