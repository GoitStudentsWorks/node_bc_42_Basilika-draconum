import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchTasks, updateTaskThunk } from 'redux/tasks/tasksOperations';
import css from './modal-edit.module.scss';

const ModalTaskEdit = ({ task, closeModal }) => {
  const [openModal] = useState(false);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(task.title);
  const [startDate, setStartDate] = useState(dayjs(task.date.start));
  const [endDate, setEndDate] = useState(dayjs(task.date.end));
  const [priority, setPriority] = useState(task.priority);

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onChangeStart = time => {
    setStartDate(dayjs(time, 'H:mm'));
  };

  const onChangeEnd = time => {
    setEndDate(dayjs(time, 'H:mm'));
  };

  const onChangePriority = e => {
    setPriority(e.target.id);
  };

  const handleSubmitEdit = e => {
    e.preventDefault();
    const id = task._id;
    const start = startDate['$d'].toISOString();
    const end = endDate['$d'].toISOString();

    const dataTask = {
      title,
      status: task.status,
      priority,
      date: { start, end },
    };

    if (
      title === task.title &&
      startDate['$d'].toISOString() ===
        dayjs(task.date.start)['$d'].toISOString() &&
      endDate['$d'].toISOString() ===
        dayjs(task.date.end)['$d'].toISOString() &&
      priority === task.priority
    ) {
      Notify.warning('Try to change something first.');
      return;
    }
    if (start >= end) {
      Notify.warning('Incorrect time of the event');
      return;
    }
    hadleCloseModal();
    dispatch(updateTaskThunk({ id, dataTask }))
      .unwrap()
      .then(() => {
        dispatch(fetchTasks());
      });
  };

  const hadleCloseModal = () => {
    closeModal(false);
  };

  const template = (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modalEditWrapper}>
        <form action="" className={css.popupForm}>
          <button
            type="button"
            onClick={hadleCloseModal}
            className={css.closeBtn}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <title>button-close</title>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="3.2"
                d="M24 8l-16 16"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="3.2"
                d="M8 8l16 16"
              ></path>
            </svg>
          </button>

          <label htmlFor="start" className={css.titleLabel}>
            <p className={css.title}>Title</p>
            <input
              name="title"
              type="text"
              placeholder="Enter text"
              value={title}
              maxLength="250"
              autoFocus
              onChange={onChangeTitle}
            />
          </label>

          <div className={css.timePickersWrapper}>
            <label htmlFor="title" className={css.timePickerLabel}>
              <p className={css.start}>Start</p>
              <TimePicker
                name="start"
                onChange={onChangeStart}
                value={startDate}
                format={'H:mm'}
                minuteStep={5}
                suffixIcon={false}
                clearIcon={false}
                className={css.timePicker}
                placement="bottomLeft"
              />
            </label>

            <label htmlFor="end" className={css.timePickerLabel}>
              <p className={css.end}>End</p>
              <TimePicker
                name="end"
                onChange={onChangeEnd}
                value={endDate}
                format={'H:mm'}
                minuteStep={5}
                suffixIcon={false}
                clearIcon={false}
                className={css.timePicker}
              />
            </label>
          </div>

          <div className={css.radioGroup}>
            <div className={css.radioButton}>
              <input
                type="radio"
                id="low"
                name="priority"
                className={css.radioInput}
                value={priority}
                onChange={onChangePriority}
                checked={priority === 'low' ? 'checked' : ''}
              />
              <label htmlFor="low" id="low">
                Low
              </label>
            </div>

            <div className={css.radioButton}>
              <input
                type="radio"
                id="medium"
                name="priority"
                className={css.radioInput}
                value={priority}
                onChange={onChangePriority}
                checked={priority === 'medium' ? 'checked' : ''}
              />
              <label htmlFor="medium" id="medium">
                Medium
              </label>
            </div>

            <div className={css.radioButton}>
              <input
                type="radio"
                id="high"
                name="priority"
                className={css.radioInput}
                value={priority}
                onChange={onChangePriority}
                checked={priority === 'high' ? 'checked' : ''}
              />
              <label htmlFor="high" id="high">
                High
              </label>
            </div>
          </div>

          <button
            type="submit"
            className={css.btnEdit}
            onClick={handleSubmitEdit}
          >
            <div className={css.modalIcon}></div>
            Edit
          </button>
        </form>
      </div>
    </div>
  );

  return !openModal
    ? createPortal(template, document.getElementById('modal'))
    : null;
};

ModalTaskEdit.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    date: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
    }).isRequired,
    owner: PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalTaskEdit;
