import React from 'react';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import s from './Sidebar.module.scss';
const Sidebar = () => {
  return (
    <div className={s.sectionSidebar}>
      <div className={s.sectionSidebar__container}>
        <div className={s.sectionSidebar__content}>
          <Logo />
          <h2 className={s.sectionSidebar__title}>User Panel</h2>
          <UserNav />
        </div>

        <div>
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
