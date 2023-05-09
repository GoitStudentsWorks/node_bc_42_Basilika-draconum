// import { useState } from 'react';

// import TaskPopUp from 'components/TaskModal/TaskForm';
// import Modal from 'components/TaskModal/Modal';
import icon from '../../../images/svg.svg';


import s from './addTaskBtn.module.scss';

const AddTaskBtn = ({ openModal }) => {
  return (
    <>
      <button className={s.addTaskBtn} onClick={openModal}>
        <svg className={s.addTaskBtn__icon} alt="plus">
          <use href={`${icon}#plus`}></use>
        </svg>
        <span className={s.addTaskBtn__text}>Add task</span>
      </button>
    </>
  );
};

export default AddTaskBtn;
