import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import TasksList from '../TasksList/TasksList';
import css from './modal-task.module.scss';

const ModalTaskList = ({ taskList, closeModalList }) => {
  const screenMobile = useMediaQuery('(max-width: 767.9px)');

  return (
    <>
      <div className={css.overlay} onClick={closeModalList}></div>
      <div className={css.modalWrapper}>
        {/* <button onClick={closeModalList} className={css.modalBtnClose} /> */}
        <div className={css.modalBox}>
          {taskList.tasks.map((task, index) => {
            return (
              <div key={index}>
                {screenMobile
                  ? index > 0 && <TasksList task={task} />
                  : index > 1 && <TasksList task={task} />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

ModalTaskList.propTypes = {
  taskList: PropTypes.shape({
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
  closeModalList: PropTypes.func.isRequired,
};

export default ModalTaskList;
