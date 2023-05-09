import { useState, useEffect } from 'react';
import icon from '../../images/sideBarIcon/SideBarIcon.svg';
import s from './Header.module.scss';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSelectors';
import { getUserAvatar } from './../../redux/auth/authSelectors';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import goose from '../../images/goose-header.png';
import { useParams, Link } from 'react-router-dom';
import { selectArrTasks } from 'redux/tasks/tasksSelectors';
import { selectDate } from 'redux/date/dateSelectors';
const Header = ({ setMenuActive }) => {
  const userName = useSelector(getUser);
  const userAvatar = useSelector(getUserAvatar);
  const params = useParams();
  const avatarName = userName.name.slice(0, 1).toUpperCase();
  //const task = useSelector(selectArrTasks);
  //console.log(task);

  const arrTasks = useSelector(selectArrTasks);
  const currentDay = useSelector(selectDate);
  const [tasksFilter, setTasksFilter] = useState();

  const dayFromParams = new Date(`${currentDay}`).toISOString().slice(0, 10);

  useEffect(() => {
    const filteredTasks = arrTasks?.filter(
      t => t.date.start.slice(0, 10) === dayFromParams
    );
    setTasksFilter(filteredTasks);
  }, [dayFromParams, arrTasks, currentDay]);
  const filterTodo = tasksFilter?.filter(task => task.status === 'toDo');
  //console.log(filterTodo?.length);

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
          {filterTodo?.length ? (
            <img src={goose} alt="Goose" width={64} height={60} />
          ) : null}
          <div className={s.header__boxPage__description}>
            <p className={s.header__boxPage__titlePage}>
              {params.currentDate || params.currentDay
                ? 'Calendar'
                : 'User Profile'}
            </p>
            {filterTodo?.length ? (
              <p className={s.header__boxPage__message}>
                <span className={s.header__boxPage__message__textBlue}>
                  Let go
                </span>{' '}
                of the past and focus on the present!
              </p>
            ) : null}
          </div>
        </div>
        <div className={s.boxContent}>
          <ThemeToggler />

          {/* <div className={s.boxContent__name}>{userName.name}</div> */}
          <Link to="/account" className={s.boxContent__name}>
            {userName.name}
          </Link>
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
