import icon from '../../images/sideBarIcon/SideBarIcon.svg';
import s from './Header.module.scss';

const Header = ({ setActive }) => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <button className={s.boxBtn__closeBtn}>
          <svg className={s.boxBtn__closeIcon}>
            <use href={`${icon}#icon-burgerMenu`}></use>
          </svg>
        </button>
        <div className={s.boxContent}>
          <div className={s.boxContent__thema}>Thema</div>
          <div className={s.boxContent__name}>Name</div>
          <div className={s.boxContent__avatar}>
            <img src="" alt="Avatar" className={s.boxContent__avatar__img} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
//onClick={() => setActive(false)}
