import React from 'react';
import classNames from 'classnames';
import './styles.css';


// component
const NotificationPanel = () => {

  const [visible, setVisible] = React.useState(true);
  
  const wrapperClass = classNames('notification-panel', {
    'hidden': !visible 
  })


  const close = () => setVisible(false);
  
  return (
    <div className={wrapperClass}>
      <div className="notification-panel-container">
        <div className="notification-panel-content">
          <div className="notification-panel-content-text">
            <p>By accessing and using this website, you acknowledge that you have read and
understand our <a href="#">Cookie Policy</a>, <a href="#">Privacy Policy</a>, and our <a href="#">Terms of Service</a>.</p>
          </div>
          <div className="notification-panel-content-button">
            <button onClick={close} className="notification-panel-button">Got It</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationPanel;