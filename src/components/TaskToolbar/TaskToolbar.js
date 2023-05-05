import css from './TaskToolbar.module.css';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {TaskConfirmationModal} from './TaskConfirmationModal';
import TaskPopUp from '../TaskModal/TaskForm';
import { isModalEditShownAction } from 'redux/tasks/tasksSlice';
import { selectIsModalEditShown } from 'redux/tasks/tasksSelectors';
import { updateTaskStatusThunk } from 'redux/tasks/tasksOperations';
import icon from '../../images/icons.svg';
import Notiflix from 'notiflix';
  
export const TaskToolbar = ({ task }) => {     
  const [isModalStatus, setIsModalStatus] = useState(false);
   
  const [isModalConfirmation, setIsModalConfirmation] = useState(false);   
  const dispatch = useDispatch(); 
  const isModalEdit = useSelector(selectIsModalEditShown);       
  const statusArray = ['To do', 'In progress', 'Done'];    
  const changeStatus = (status) => {
    if (status === 'toDo'){
      return status = 'To do';
    }
    if (status === 'inProgress'){
      return status = 'In progress';        
    }
    if (status === 'Done'){
      return status = 'done';        
    }
  };

  const currentStatus = changeStatus(task.status);
      
                    
  const toggleModal = () => {     
    setIsModalConfirmation(false);
    dispatch(isModalEditShownAction(false));
    setIsModalStatus(prev => !prev);   
  };
       
  const openTaskModal = id => { 
    setIsModalConfirmation(false);
    setIsModalStatus(false);     
    dispatch(isModalEditShownAction(!isModalEdit)); 
  };
  
  const confirmationModalOpen = () => {
    setIsModalStatus(false);
    dispatch(isModalEditShownAction(false));
    setIsModalConfirmation(prev => !prev);      
  };

  const handleStatusChange = status => {
    status = changeStatus(status);
    dispatch(updateTaskStatusThunk({status, id: task._id}));
    Notiflix.Notify.success(`Status changed to "${status}"`);
    setIsModalStatus(false);
  };
  
  return (
    <>
      <div className={css.toolbar}>
        <button className={css.toolbar__btn} onClick={toggleModal}>
          <svg  className={css.toolbar__svg}>
            <use xlinkHref={icon + '#icon-round-arrow'}></use>
          </svg>
        </button>
        {isModalStatus && (
          <div className={css.statusModal} data-modal="true">
            {statusArray
              .filter(status => status !== currentStatus)
              .map(status => (
                <button className={css.statusModal__btn}
                  key={status}
                  onClick={()=> handleStatusChange(status)}
                >
                  <div className={css.statusModal__container}>
                    <p className={css.statusModal__status}>{status}</p>
                    <svg className={css.toolbar__svg}>
                      <use xlinkHref={icon + '#icon-round-arrow'}></use>
                    </svg>
                  </div>
                </button>
              ))}
          </div>
        )}
        <button className={css.toolbar__btn} onClick={() => openTaskModal(task._id)}>
          <svg className={css.toolbar__svg}>
            <use xlinkHref={icon + '#icon-pencil'}></use>
          </svg>
        </button> 
        {isModalEdit && <TaskPopUp task={task}/>}
        <button className={css.toolbar__btn} onClick={confirmationModalOpen}>
          <svg className={css.toolbar__svg}>
            <use xlinkHref={icon + '#icon-trash'}></use>
          </svg>
        </button>
        {isModalConfirmation && <TaskConfirmationModal confirmationModalOpen={confirmationModalOpen} task={task}/>}
      </div>
    </>
  );
};
  