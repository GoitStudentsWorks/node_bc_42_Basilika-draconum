import css from './TaskConfirmationModal.module.css';
import { useDispatch } from 'react-redux';
import { deleteTaskThunk } from 'redux/tasks/tasksOperations';

export const TaskConfirmationModal = ({confirmationModalOpen, task}) => {
  const dispatch = useDispatch();

  const handleClick = (evt) =>{
    const {id} = evt.currentTarget;
    if (id === 'yes'){    
      dispatch(deleteTaskThunk(task._id));
    }
    confirmationModalOpen();
  };

  return (
    <div  className={css.confirmation__container}>
      <p className={css.confirmation__title}>Are you confirming the deletion?</p>
      <div className={css.confirmation__btnContainer}>
        <div>
          <button className={css.confirmation__btn} onClick={handleClick} id="yes">Yes</button>         
        </div>
        <div>
          <button className={css.confirmation__btn} onClick={handleClick} id="no">No</button> 
        </div>
      </div>
    </div>
  );
};
