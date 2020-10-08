import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const NotificationContainer = ({ children }) => {
  return (
    <div className="notification-container">
      {children}
    </div>
  )
}

NotificationContainer.propTypes = {
  children: PropTypes.node
}

NotificationContainer.defaultProps = {
  children: null
}

export default React.memo(NotificationContainer);