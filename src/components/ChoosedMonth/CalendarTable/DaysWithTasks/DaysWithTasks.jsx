import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isToday, parseISO } from 'date-fns';
import { useMediaQuery } from '@mui/material';
import { formattedDay } from 'hooks/fotmattedDay';
import TasksList from '../TasksList/TasksList';
import ModalTaskList from '../ModalTaskList/ModalTaskList';
import css from './days-tasks.module.scss';

const DaysWithTasks = ({ day, handleClick }) => {
  const screenMobile = useMediaQuery('(max-width: 767.9px)');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const closeModalList = ({ code }) => {
      if (code === 'Escape' && openModal) {
        setOpenModal(!openModal);
      }
    };
    window.addEventListener('keydown', closeModalList);
    return () => {
      window.removeEventListener('keydown', closeModalList);
    };
  }, [openModal]);

  const openModalList = () => {
    setOpenModal(!openModal);
  };

  const closeModalList = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setOpenModal(!openModal);
    }
  };

  return (
    <td className={css.styledTd} onClick={e => handleClick(e, day.date)}>
      <p
        className={
          isToday(parseISO(day.date)) ? css.today : css.styledNumberDay
        }
      >
        {formattedDay(day.date)}
      </p>

      {day.tasks.length > 0 ? (
        <>
          {day.tasks.map((task, index) => {
            return (
              <div key={index}>
                {screenMobile
                  ? index === 0 && <TasksList task={task} />
                  : index <= 1 && <TasksList task={task} />}
              </div>
            );
          })}

          {screenMobile && day.tasks.length > 1 ? (
            <p className={css.burgerListTasks} onClick={openModalList}>
              +{day.tasks.length - 1} ...
            </p>
          ) : !screenMobile && day.tasks.length > 2 ? (
            <p className={css.burgerListTasks} onClick={openModalList}>
              +{day.tasks.length - 2} tasks
            </p>
          ) : null}
        </>
      ) : null}

      {openModal && (
        <div className={css.styledModalTd}>
          <ModalTaskList closeModalList={closeModalList} taskList={day} />
        </div>
      )}
    </td>
  );
};

DaysWithTasks.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
    ).isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
};

export default DaysWithTasks;
