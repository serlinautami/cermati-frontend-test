import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

// component
const SectionHeader = ({
  title,
  subtitle,
  description,
  children,
  isDark,
  align,
  className,
}) => {

  const wrapperClass = classNames("section-header", {
    'is-dark':  isDark,
  }, `align-${align}`, className)

  return (
    <div className={wrapperClass}>
      {title && <h2 className="section-header-title">{title}</h2>}
      {subtitle && <h3 className="section-header-subtitle">{subtitle}</h3>}
      {description && <p className="section-header-description">{description}</p>}
      {children}
    </div>
  )
}

// proptypes
SectionHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  isDark: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

// defaultprops
SectionHeader.defaultProps = {
  title: '',
  subtitle: '',
  isDark: false,
  children: null,
  align: 'center',
  description: ''
}


export default React.memo(SectionHeader);