import { useState } from 'react';

import TaskPopUp from 'components/TaskModal/TaskForm';
import Modal from 'components/TaskModal/Modal';
import icon from '../../../images/svg.svg';

import s from './addTaskBtn.module.scss';

const AddTaskBtn = ({ progressType }) => {
  const [activateModal, setActivateModal] = useState(false);

  const openModal = () => {
    setActivateModal((pS)=>!pS);
  };

  return (
    <>
      <Modal active={activateModal} setActive={setActivateModal} >
        <TaskPopUp closeModal={setActivateModal} type={ progressType } />
      </Modal>
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
