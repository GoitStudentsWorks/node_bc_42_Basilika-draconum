import icon from '../../images/sideBarIcon/SideBarIcon.svg';
import s from './Header.module.scss';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSelectors';
import { getUserAvatar } from './../../redux/auth/authSelectors';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';

const Header = ({ setMenuActive }) => {
  const userName = useSelector(getUser);
  const userAvatar = useSelector(getUserAvatar);
  //console.log(userAvatar);

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <button
          className={s.boxBtn__closeBtn}
          onClick={() => setMenuActive(true)}
        >
          <svg className={s.boxBtn__closeIcon}>
            <use href={`${icon}#icon-burgerMenu`}></use>
          </svg>
        </button>
        <div className={s.boxContent}>
          {/* <div className={s.boxContent__thema}></div> */}
          <ThemeToggler />

          <div className={s.boxContent__name}>{userName.name}</div>
          <div className={s.boxContent__avatar}>
            <img
              src={userAvatar}
              alt="Avatar"
              className={s.boxContent__avatar__img}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
//onClick={() => setActive(true)}
