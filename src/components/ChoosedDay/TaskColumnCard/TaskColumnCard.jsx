import s from './taskColumnCard.module.scss';

import avatar from '../../../images/goose-start.png';


const maxLengthTitle = 30;


const truncateString = (str) => {
  if (str.length <= maxLengthTitle) {
    return str;
  } else {
    return str.slice(0, maxLengthTitle) + '...';
  }
};

const choosePriorityTextColor = priority => {
  if (priority === 'low') {
    return 'var(--bgColor-range-low)';
  }
  if (priority === 'medium') {
    return 'var(--bgColor-range-medium)';
  }
  if (priority === 'high') {
    return 'var(--bgColor-range-high)';
  }
};

const TaskColumnCard = () => {
  const priority = 'medium';
  const description = truncateString(priority)
  const priorityBackgroundColor = choosePriorityTextColor(priority);
  return (
    <>
      <div className={s.tasksCard}>
        <p className={s.tasksCard__text}>{description}</p>
        <div className={s.tasksCard__bottomWrap}>
          <div className={s.tasksCard__info}>
            <img
              className={s.tasksCard__avatar}
              src={avatar}
              alt="Avatar"
              width={32}
              height={32}
            />
            <span
              style={{ backgroundColor: priorityBackgroundColor }}
              className={s.tasksCard__riority}
            >
              {priority}
            </span>
          </div>
          <div>TaskToolbar</div>
        </div>
      </div>
      <div>TaskModal</div>
    </>
  );
};

export default TaskColumnCard;
// 1. Компонент отримує в пропсах дані необхідні для створення картки.
// 2. Компонент підписаний на url аватару юзера
// 3. Компонент рендерить блоки:
//  - розмітку з описом завдання, який має фіксовану висоту і текст з описом, якщо той не вміщається, обрізається та показуються три крапки.
//  - аватар юзера.
//  - пріоритет завдання, з фоном відповідного кольору.
//  - TaskToolbar - інетрфейс для роботи з карткою
//  - TaskModal - модалка з формою для редагування завдання."
