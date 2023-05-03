import icon from '../../../images/svg.svg';
import s from './columnHeadBar.module.scss'

const ColumnHeadBar = ({ title }) => {
  
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
