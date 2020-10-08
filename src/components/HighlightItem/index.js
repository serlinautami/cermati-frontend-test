import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css';


const HighlightItem = ({
  title,
  body,
  icon
}) => {
  return (
    <div className="highlight-item">
      <FontAwesomeIcon color="#A0A0A0" size="2x" className="highlight-item-icon" icon={icon} />
      <h3 className="highlight-item-title">{title}</h3>
      {body && <p className="highlight-item-body">{body}</p>}
    </div>
  )
}

HighlightItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  icon: PropTypes.any
}

HighlightItem.defaultProps = {
  title: '',
  body: '',
  icon: null
}

export default React.memo(HighlightItem)