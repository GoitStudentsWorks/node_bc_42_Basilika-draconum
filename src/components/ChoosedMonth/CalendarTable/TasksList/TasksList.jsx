import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import ModalTaskEdit from '../ModalTaskEdit/ModalTaskEdit';
import css from './tasks-list.module.scss';

const TasksList = ({ task }) => {
  const screenMobile = useMediaQuery('(max-width: 767.9px)');
  const screenTablet = useMediaQuery('(max-width: 1439.9px)');
  const screenDescktop = useMediaQuery('(min-width: 1440px)');
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
    if (screenMobile && str.length > 3) {
      return str.substring(0, 3) + '...';
    }
    if (screenTablet && str.length > 8) {
      return str.substring(0, 8) + '...';
    }
    if (screenDescktop && str.length > 16) {
      return str.substring(0, 16) + '...';
    }
    return str;
  };

  return (
    <div className={css.tasksListStyle}>
      <div key={task._id} className={css.tasksListItem} onClick={openModalEdit}>
        <p
          className={
            (task.priority === 'low' && css.lowColor) ||
            (task.priority === 'medium' && css.mediumColor) ||
            (task.priority === 'high' && css.highColor)
          }
        >
          {truncateString(task.title)}
        </p>
      </div>
      {openModal && <ModalTaskEdit closeModal={closeModalEdit} task={task} />}
    </div>
  );
};

TasksList.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    date: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
    }).isRequired,
    owner: PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TasksList;
