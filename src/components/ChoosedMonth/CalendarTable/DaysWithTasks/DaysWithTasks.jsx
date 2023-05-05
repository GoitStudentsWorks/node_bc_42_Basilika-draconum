import { useState, useEffect } from 'react';
import { isToday, parseISO } from 'date-fns';
import { useMediaQuery } from '@mui/material';
import { formattedDay } from 'hooks/fotmattedDay';
import TasksList from '../TasksList/TasksList';
import ModalTaskList from '../ModalTaskList/ModalTaskList';
import css from './days-tasks.module.scss';

const DaysWithTasks = ({ day, setOpening, currentTask, handleClick }) => {
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
                  ? index === 0 && (
                      <TasksList
                        tasks={task}
                        openModal={setOpening}
                        currentTask={currentTask}
                      />
                    )
                  : index <= 1 && (
                      <TasksList
                        tasks={task}
                        openModal={setOpening}
                        currentTask={currentTask}
                      />
                    )}
              </div>
            );
          })}

          {screenMobile && day.tasks.length > 1 ? (
            <p className={css.burgerListTasks} onClick={openModalList}>
              +{day.tasks.length - 1} tasks
            </p>
          ) : !screenMobile && day.tasks.length > 2 ? (
            <p className={css.burgerListTasks} onClick={openModalList}>
              +{day.tasks.length - 2} tasks
            </p>
          ) : null}
        </>
      ) : null}

      {openModal && (
        <ModalTaskList closeModalList={closeModalList} taskList={day} />
      )}
    </td>
  );
};

export default DaysWithTasks;
