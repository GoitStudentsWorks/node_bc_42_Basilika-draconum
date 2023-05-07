import { useState } from 'react';
import icon from '../../../images/svg.svg';

import TaskPopUp from 'components/TaskModal/TaskForm';
import Modal from 'components/TaskModal/Modal';

import s from './columnHeadBar.module.scss';

const ColumnHeadBar = ({ title, progressType }) => {
   const [activateModal, setActivateModal] = useState(false);

  const openModal = () => {
    setActivateModal((pS)=>!pS);
  };

  return (<>
    
    <div className={s.columnHeadBar}>
      <h3 className={s.columnHeadBar__Text}>{title}</h3>
      <button className={s.addTaskBtnIcon} onClick={openModal}>
        <svg className={s.addTaskBtnIcon__icon} alt="open modal for add task">
          <use href={`${icon}#roundPlus`}></use>
        </svg>
      </button>
    </div>
     <Modal active={activateModal} setActive={setActivateModal} >
        <TaskPopUp closeModal={setActivateModal} type={ progressType } />
      </Modal>
  </>
     
  );
};

export default ColumnHeadBar;
