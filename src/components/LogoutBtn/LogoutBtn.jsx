import React from 'react';

import icon from '../../images/sideBarIcon/SideBarIcon.svg';
import s from './LogoutBtn.module.scss';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import { clearAuthHeader } from 'shared/http';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    clearAuthHeader();
  };

  return (
    <button className={s.logoutLink} onClick={handleLogOut} type="button">
      <span className={s.logoutLink__title}>Log out</span>
      <svg className={s.logoutLink__icon}>
        <use href={`${icon}#icon-logOut`}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
