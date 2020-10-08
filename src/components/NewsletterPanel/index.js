import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import './styles.css';

// component
const NewsletterPanel = () => {

  const [visible, setVisible] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  const wrapperClass = classNames('newsletter-panel', {
    'hidden': !visible
  })

  const handleScroll = React.useCallback(e => {
    const doc = e.srcElement.documentElement;
    const scrollTop = doc.scrollTop;

    const localCache = localStorage.getItem('newslettter_status')

    if(doc && !visible && scroll && !localCache) {
      console.log('scrollTop', scrollTop)

      if(scrollTop >= 100) {
        setTimeout(() => {
          setVisible(true)
          localStorage.setItem('newslettter_status', moment().format('x'))
        }, 1000)
      }
    }

    if(!scroll) {
      setScroll(true);
    }
  }, [visible, scroll])

  const close = () => setVisible(false);

  React.useEffect(() => {
    const checkStatus = () => {
      const localCache = localStorage.getItem('newslettter_status');

      if(localCache) {
        const timeCache = moment(parseInt(localCache)).format('x');
        const timeNow = moment().format('x');
        const limit = 600000;
        const timeDiff = timeNow - timeCache;

        if(timeDiff >= limit) {
          localStorage.removeItem('newslettter_status');
        }
      }
    }

    checkStatus();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll]);

  return (
    <div className={wrapperClass}>
      <span onClick={close} className="newsletter-panel-close">&times;</span>
      <h3 className="newsletter-panel-title">Get latest updates in web technologies</h3>
      <p className="newsletter-panel-body">I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</p>
      <div className="newsletter-panel-form">
          <input type="email" className="newsletter-panel-input-field" placeholder="Email Address" />
          <button type="button" className="newsletter-panel-button">Count me in!</button>
      </div>
    </div>
  )
}

export default React.memo(NewsletterPanel);