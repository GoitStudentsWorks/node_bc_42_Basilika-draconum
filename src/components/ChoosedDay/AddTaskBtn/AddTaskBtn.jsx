import icon from '../../../images/svg.svg';
import s from './addTaskBtn.module.scss'

const AddTaskBtn = ({ progressType }) => {
  
  const openModal = () => {
    console.log('Open moddal');
  };

  return (
      <button className={s.addTaskBtn} onClick={openModal}>
          <svg className={s.addTaskBtn__icon} alt="plus">
            <use href={`${icon}#plus`}></use>
          </svg>
      <span className={s.addTaskBtn__text} >Add task</span>
    </button>
  );
};

export default AddTaskBtn;
// ???1. Компонент отримує в пропсах id групи завдань
// 3. Клік по кнопці відкриває модалку TaskModal для створення нового завдання в поточній колонці

// +2. Компонент рендерить блок розмітки кнопки.