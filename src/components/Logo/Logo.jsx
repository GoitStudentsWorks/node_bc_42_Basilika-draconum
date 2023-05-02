import React from 'react';
import icon from '../../images/sideBarIcon/SideBarIcon.svg';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.box}>
      <a href="/" className={s.box__logo}>
        {/* <img
          className={s.box__logo__img}
          src={logoMobile}
          alt="LogoGooseTrack"
        /> */}
      </a>
      <button className={s.box__closeBtn}>
        <svg className={s.box__closeIcon}>
          <use href={`${icon}#icon-x-close`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Logo;
