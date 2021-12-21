import React from 'react';
import {
  Github,
  Instagram,
  Linkedin,
  LogoWa,
  Medium,
  Pacers,
} from '../../../assets/images';
import './footer.scss';

const Icon = ({ img }) => {
  return (
    <div className='icon-wrapper'>
      <img className='icon-medsos' src={img} alt='icon' />
    </div>
  );
};

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <img className='logo' src={Pacers} alt='logo-footer' />

        <div className='social-wrapper'>
          <Icon img={LogoWa} />
          <Icon img={Instagram} />
          <Icon img={Github} />
          <Icon img={Medium} />
          <Icon img={Linkedin} />
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright</p>
      </div>
    </div>
  );
}
