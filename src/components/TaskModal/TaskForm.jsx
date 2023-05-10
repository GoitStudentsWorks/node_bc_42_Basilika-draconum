import React, { useEffect, useState } from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import Notiflix from 'notiflix';
import { isModalEditShownAction } from 'redux/tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import close from '../../images/modal-svg/closeModal.svg';
import icon from '../../images/modal-svg/plus.svg';

import { selectArrTasks } from 'redux/tasks/tasksSelectors';

import style from './TaskForm.module.scss';
import { addTask } from 'redux/tasks/tasksOperations';
import { selectDate } from 'redux/date/dateSelectors';

function TaskPopUp({ task, closeModal, type }) {
  // const format = 'H:mm';
  const currentDate = useSelector(selectDate);
  const [start, setStart] = useState(
    task ? task.start : dayjs(`${currentDate} 09:00`)
  );
  const [end, setEnd] = useState(
    task ? task.end : dayjs(`${currentDate} 09:00`)
  );
  const [priority, setPriority] = useState(task ? task.priority : 'low');
  const [title, setTitle] = useState(task ? task.title : '');

  useEffect(() => {
    setStart(dayjs(`${currentDate} 9:00`));
    setEnd(dayjs(`${currentDate} 12:00`));
  }, [currentDate]);

  const dispatch = useDispatch();

  const chooseProgressType = type => {
    if (type === 'To do') {
      return 'toDo';
    }
    if (type === 'In progress') {
      return 'inProgress';
    }
    if (type === 'Done') {
      return 'done';
    }
  };

  const onChangeStart = (time, valueString) => {
    setStart(dayjs(`${currentDate} ${valueString}`));
  };

  const onChangeEnd = (time, valueString) => {
    setEnd(dayjs(`${currentDate} ${valueString}`));
  };

  const onChangePriority = e => {
    setPriority(e.target.value);
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const filterTasks = useSelector(selectArrTasks);
  const handleAdd = e => {
    e.preventDefault();
    const status = chooseProgressType(type);
    const data = { date: { start, end }, priority, title, status };
    if (
      filterTasks.find(
        task =>
          task.title.toLowerCase() === title.toLowerCase() &&
          task.date.start.slice(0, 10) === currentDate
      )
    ) {
      Notiflix.Notify.failure(`${title} is already added.`);
      return;
    }
    if (start >= end) {
      Notiflix.Notify.warning('Incorrect time of the event');
      return;
    }
    dispatch(addTask(data))
      .unwrap()
      .then(() => hadleCloseModal());

    setTitle('');
  };

  const handleCancel = () => {
    isModalEditShownAction(false);
    closeModal(false);
  };

  const hadleCloseModal = () => {
    closeModal(false);
  };

  return (
    <>
      <form action="" className={style.popupForm} onSubmit={handleAdd}>
        <label htmlFor="start" className={style.titleLabel}>
          <p className={style.title}>Title</p>
          <input
            name="title"
            type="text"
            placeholder="Enter text"
            value={title}
            onChange={onChangeTitle}
          />
        </label>
        <div className={style.timePickersWrapper}>
          <label htmlFor="title" className={style.timePickerLabel}>
            <p className={style.start}>Start</p>
            <TimePicker
              name="start"
              onChange={onChangeStart}
              value={start}
              defaultValue={'08:00'}
              format={'H:mm'}
              minuteStep={5}
              suffixIcon={false}
              clearIcon={false}
              className={style.timePicker}
              placement="bottomLeft"
            />
          </label>
          <label htmlFor="end" className={style.timePickerLabel}>
            <p className={style.end}>End</p>
            <TimePicker
              name="end"
              onChange={onChangeEnd}
              value={end}
              defaultValue={'12:00'}
              format={'H:mm'}
              minuteStep={5}
              suffixIcon={false}
              clearIcon={false}
              className={style.timePicker}
            />
          </label>
        </div>
        <div className={style.radioGroup}>
          <div className={style.radioButton}>
            <input
              type="radio"
              id="low"
              name="priority"
              value="low"
              checked={priority === 'low'}
              onChange={onChangePriority}
              className={style.radioInput}
            />
            <label htmlFor="low" id="low">
              Low
            </label>
          </div>
          <div className={style.radioButton}>
            <input
              type="radio"
              id="medium"
              name="priority"
              value="medium"
              checked={priority === 'medium'}
              onChange={onChangePriority}
              className={style.radioInput}
            />
            <label htmlFor="medium" id="medium">
              Medium
            </label>
          </div>
          <div className={style.radioButton}>
            <input
              type="radio"
              id="high"
              name="priority"
              value="high"
              checked={priority === 'high'}
              onChange={onChangePriority}
              className={style.radioInput}
            />
            <label htmlFor="high" id="high">
              High
            </label>
          </div>
        </div>
        {!task ? (
          <div className={style.buttonWrapper}>
            <button type="submit" className={style.submitButton}>
              <svg className={style.submitButton__icon} alt="plus">
                <use href={`${icon}#plus`}></use>
              </svg>
              Add
            </button>
            <button
              type="button"
              className={style.cancelButton}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button type="button" className={style.editButton}>
            Edit
          </button>
        )}
        <button
          type="button"
          onClick={hadleCloseModal}
          className={style.closeButton}
        >
          <svg className={style.closeButton_icon}>
            <use href={`${close}#icon-Vector`} />
          </svg>
        </button>
      </form>
    </>
  );
}

export default TaskPopUp;
