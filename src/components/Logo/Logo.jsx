import React from 'react';

import s from './Logo.module.scss';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <NavLink to="/" className={s.logo}></NavLink>
    </>
  );
};

export default Logo;
