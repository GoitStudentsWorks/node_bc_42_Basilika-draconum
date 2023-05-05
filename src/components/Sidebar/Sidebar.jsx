import React from 'react';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import s from './Sidebar.module.scss';
import icon from '../../images/sideBarIcon/SideBarIcon.svg';
const Sidebar = ({ setMenuActive }) => {
  return (
    <aside className={s.sectionSidebar}>
      <div className={s.sectionSidebar__blur} />
      <div className={s.sectionSidebar__container}>
        <div className={s.sectionSidebar__content}>
          <div className={s.sectionSidebar__logoBtn}>
            <Logo />
            <button
              className={s.sectionSidebar__closeBtn}
              onClick={() => setMenuActive(false)}
            >
              <svg className={s.sectionSidebar__closeBtn__closeIcon}>
                <use href={`${icon}#icon-x-close`}></use>
              </svg>
            </button>
          </div>
          <h2 className={s.sectionSidebar__title}>User Panel</h2>
          <UserNav />
        </div>

        <div>
          <LogoutBtn />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
