import React, { useState } from 'react';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';
import s from './MainLayout.module.scss';
const MainLayout = () => {
  const [menuActive, setActive] = useState();
  return (
    <>
      <div
        className={menuActive ? 's.part__sidebar active' : 's.part__sidebar'}
      >
        <Sidebar />
      </div>
      <div className={s.part__context}>
        <Header setActive={setActive} />
        <div>UserProfile</div>
      </div>
    </>
  );
};

export default MainLayout;

/* className={menuActive ? 's.part__sidebar active' : 's.part__sidebar'} */
/* className={s.part__sidebar} */
