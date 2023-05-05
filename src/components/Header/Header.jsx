import icon from '../../images/sideBarIcon/SideBarIcon.svg';
import s from './Header.module.scss';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSelectors';
import { getUserAvatar } from './../../redux/auth/authSelectors';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import goose from '../../images/goose-header.png';
import { useParams } from 'react-router-dom';
const Header = ({ setMenuActive }) => {
  const userName = useSelector(getUser);
  const userAvatar = useSelector(getUserAvatar);
  const params = useParams();

  console.log(userAvatar); //undefined
  //console.log(userAvatar === undefined);
  const avatarName = userName.name.slice(0, 1).toUpperCase();
  console.log(avatarName);
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
        <div className={s.header__boxPage}>
          {params.currentDay && (
            <img src={goose} alt="Goose" width={64} height={60} />
          )}
          <div className={s.header__boxPage__description}>
            <p className={s.header__boxPage__titlePage}>
              {params.currentDate || params.currentDay
                ? 'Calendar'
                : 'User Profile'}
            </p>
            {params.currentDay && (
              <p className={s.header__boxPage__message}>
                <span className={s.header__boxPage__message__textBlue}>
                  Let go
                </span>
                of the past and focus on the present!
              </p>
            )}
          </div>
        </div>
        <div className={s.boxContent}>
          <ThemeToggler />

          <div className={s.boxContent__name}>{userName.name}</div>
          <div className={s.boxContent__avatar}>
            {userAvatar ? (
              <img
                src={userAvatar}
                alt="Avatar"
                className={s.boxContent__avatar__img}
              />
            ) : (
              <p className={s.boxContent__avatar__title}>{avatarName}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
