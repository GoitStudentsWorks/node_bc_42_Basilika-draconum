import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';
import s from './MainLayout.module.scss';
const MainLayout = () => {
  const [menuActive, setActive] = useState(false);
  return (
    <>
      <div
        className={
          menuActive ? `${s.part__sidebar} ${s.active}` : `${s.part__sidebar}`
        }
      >
        <Sidebar setActive={setActive} />
      </div>
      <div className={s.part__context}>
        <Header setActive={setActive} />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;

/* className={menuActive ? 's.part__sidebar active' : 's.part__sidebar'} */
/* className={s.part__sidebar} */
