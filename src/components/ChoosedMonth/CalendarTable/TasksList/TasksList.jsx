import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import ModalTaskEdit from '../ModalTaskEdit/ModalTaskEdit';
import css from './tasks-list.module.scss';

const TasksList = ({ task }) => {
  const screenMobile = useMediaQuery('(max-width: 767.9px)');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const closeModalEdit = ({ code }) => {
      if (code === 'Escape' && openModal) {
        setOpenModal(!openModal);
      }
    };
    window.addEventListener('keydown', closeModalEdit);
    return () => {
      window.removeEventListener('keydown', closeModalEdit);
    };
  }, [openModal]);

  const openModalEdit = () => {
    setOpenModal(!openModal);
  };

  const closeModalEdit = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setOpenModal(!openModal);
    }
  };

  const truncateString = str => {
    if (screenMobile) {
      return str.substring(0, 3) + '...';
    }
    if (str.length > 7) {
      return str.substring(0, 7) + '...';
    }
    return str;
  };

  return (
    <div className={css.tasksListStyle}>
      <div key={task._id} className={css.tasksListItem} onClick={openModalEdit}>
        <p
          className={
            (task.priority === 'low' && css.low) ||
            (task.priority === 'medium' && css.medium) ||
            (task.priority === 'high' && css.high)
          }
        >
          {truncateString(task.title)}
        </p>
      </div>
      {openModal && <ModalTaskEdit closeModal={closeModalEdit} task={task} />}
    </div>
  );
};

export default TasksList;
