import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';
import s from './MainLayout.module.scss';
const MainLayout = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div
        className={
          menuActive ? `${s.part__sidebar} ${s.active}` : `s.part__sidebar`
        }
        onClick={() => setMenuActive(false)}
      >
        <Sidebar setMenuActive={setMenuActive} menuActive={menuActive} />
      </div>
      <div className={s.part__context}>
        <Header setMenuActive={setMenuActive} />
        <main>
          <Outlet onClick={e => e.stopPropagation()} />
        </main>
      </div>
    </>
  );
};

export default MainLayout;

// onClick={() => setMenuActive(false)}
//onClick={e => e.stopPropagation()}
/* className={menuActive ? 's.part__sidebar active' : 's.part__sidebar'} */
/* className={s.part__sidebar} */
