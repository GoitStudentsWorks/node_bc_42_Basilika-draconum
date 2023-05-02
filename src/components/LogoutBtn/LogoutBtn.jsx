import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/sideBarIcon/SideBarIcon.svg';
import s from './LogoutBtn.module.scss';

const LogoutBtn = () => {
  return (
    <Link className={s.logoutLink}>
      <span className={s.logoutLink__title}>Log out</span>
      <svg className={s.logoutLink__icon}>
        <use href={`${icon}#icon-logOut`}></use>
      </svg>
    </Link>
  );
};

export default LogoutBtn;
