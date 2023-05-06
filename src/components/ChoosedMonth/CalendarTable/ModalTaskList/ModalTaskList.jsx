import { useMediaQuery } from '@mui/material';
import TasksList from '../TasksList/TasksList';
import css from './modal-task.module.scss';

const ModalTaskList = ({ closeModalList, taskList }) => {
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

export default ModalTaskList;
