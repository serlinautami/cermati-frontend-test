import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import { imgBackground } from '../../assets/images';
import './styles.css';

// component
const HeroShoot = () => {
  return (
    <div className="hero-shoot" style={{backgroundImage: `url(${imgBackground})`}}>
      <div className="hero-shoot-layer" />
      <div className="hero-shoot-layer-content">
        <Container>
          <SectionHeader
            title="Hello! I'm Serlina Utami"
            subtitle="Consult, Design, and Develop Websites"
            description={
              <React.Fragment>
                Have something great in mind? Feel free to contact me.
                <br />
                I'll help you to make it happen
              </React.Fragment>
            } 
            isDark
          >
            <a href="#" className="hero-shoot-button">
              Let's Make Contact
            </a>
          </SectionHeader>
        </Container>
      </div>
    </div>
  )
}

export default React.memo(HeroShoot);