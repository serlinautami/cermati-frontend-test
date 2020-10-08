import React from 'react';
import { imgLogo } from '../../assets/images';
import Container from '../Container';
import './styles.css';


const SiteHeader = () => {
  return (
    <div className="site-header">
      <Container>
        <img src={imgLogo} alt="" className="site-header-logo" />
      </Container>
    </div>
  )
}

export default React.memo(SiteHeader);