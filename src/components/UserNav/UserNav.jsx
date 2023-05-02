import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../../images/sideBarIcon/SideBarIcon.svg';
import s from './UserNav.module.scss';

const UserNav = () => {
  return (
    <div className={s.userNavLinks}>
      <NavLink to="" className={s.userNavLinks__link}>
        <svg className={s.userNavLinks__link__icon}>
          <use href={`${icon}#icon-userCheck`}></use>
        </svg>
        <span className={s.userNavLinks__link__text}>My account</span>
      </NavLink>
      <NavLink to="" className={s.userNavLinks__link}>
        <svg className={s.userNavLinks__link__icon}>
          <use href={`${icon}#icon-calendarCheck`}></use>
        </svg>
        <span className={s.userNavLinks__link__text}>Calendar</span>
      </NavLink>
    </div>
  );
};

export default UserNav;
