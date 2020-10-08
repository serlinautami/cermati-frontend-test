import React from 'react';
import { 
  HeroShoot,
  NotificationPanel,
  HighlightPanel,
  SiteHeader,
  SiteFooter,
  NewsletterPanel
} from '../../components';
import { NotificationContainer, SiteContainer } from '../../containers';

const Home = () => {
  return (
    <React.Fragment>
      <NotificationContainer>
        <NotificationPanel />
      </NotificationContainer>
      <SiteContainer>
        <SiteHeader />
        <HeroShoot />
        <HighlightPanel />
        <SiteFooter />
        <NewsletterPanel />
      </SiteContainer>
    </React.Fragment>
  );
}

export default Home;
