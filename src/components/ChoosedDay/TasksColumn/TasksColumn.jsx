import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';

import s from './tasksColumn.module.scss';
import { useState } from 'react';
import TaskPopUp from 'components/TaskModal/TaskForm';
import Modal from 'components/TaskModal/Modal';

const TasksColumn = ({ title, tasks }) => {
  const [activateModal, setActivateModal] = useState(false);

  const openModal = () => {
    setActivateModal(pS => !pS);
  };

  return (
    <li className={s.tasksColumnWrap}>
      <ColumnHeadBar title={title} openModal={openModal} />
      {tasks?.length !== 0 && (
        <ColumnsTasksList tasks={tasks} progressType={title} />
      )}
      <AddTaskBtn text={'Add task'} icon={'plus'} openModal={openModal} />
      {activateModal && (
        <Modal active={activateModal} setActive={setActivateModal}>
          <TaskPopUp closeModal={setActivateModal} type={title} />
        </Modal>
      )}
    </li>
  );
};

export default TasksColumn;
