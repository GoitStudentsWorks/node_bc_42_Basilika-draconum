import icon from '../../../images/svg.svg';
import s from './columnHeadBar.module.scss'

const ColumnHeadBar = ({ title, progressType }) => {
  
    const openModal = () => {
    console.log('Open moddal');
  };

  return (
    <div className={s.columnHeadBar}>
      <h3 className={s.columnHeadBar__Text}>{title}</h3>
      <button className={s.addTaskBtnIcon} onClick={openModal}>
          <svg className={s.addTaskBtnIcon__icon} alt="open modal for add task">
            <use href={`${icon}#roundPlus`}></use>
          </svg>
      </button>
    </div>
  );
};

export default ColumnHeadBar;

// "1. Компонент отримує в пропсах заголовок колонки групи та
// ?????ідентифікатор ступеню виконання задач в цій колонці(To do | In progress | Done)
// 2. Компонент рендерить блок розмітки
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі."
