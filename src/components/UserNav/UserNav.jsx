import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../../images/sideBarIcon/SideBarIcon.svg';
// import { ReactComponent as UserCheck } from '../../images/close.svg';
import s from './UserNav.module.scss';

const UserNav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={s.userNavLinks}>
      <NavLink
        to="/account"
        className={
          isActive
            ? `${s.userNavLinks__link}`
            : `${s.userNavLinks__link} ${s.active}`
        }
      >
        <svg className={s.userNavLinks__link__icon}>
          <use href={`${icon}#icon-userCheck`}></use>
        </svg>

        <span className={s.userNavLinks__link__text}>My account</span>
      </NavLink>
      <NavLink
        to="/calendar"
        // className={({ isActive }) =>
        //   isActive ? s.userNavLinks__link + '' + s.active : s.userNavLinks__link
        // }
        className={
          isActive
            ? `${s.userNavLinks__link}`
            : `${s.userNavLinks__link} ${s.active}`
        }
      >
        <svg className={s.userNavLinks__link__icon}>
          <use href={`${icon}#icon-calendarCheck`}></use>
        </svg>
        <span className={s.userNavLinks__link__text}>Calendar</span>
      </NavLink>
    </nav>
  );
};

export default UserNav;
//  className={({ isActive }) =>
//           isActive ? s.userNavLinks__link + '' + s.active : s.userNavLinks__link
//         }
