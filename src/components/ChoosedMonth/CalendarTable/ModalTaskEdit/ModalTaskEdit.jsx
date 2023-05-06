import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import Notiflix from 'notiflix';
import { fetchTasks, updateTaskThunk } from 'redux/tasks/tasksOperations';
import close from 'images/close.svg';
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

  const onChangeStart = (time, valueString) => {
    setStartDate(dayjs(valueString, 'H:mm'));
  };

  const onChangeEnd = (time, valueString) => {
    setEndDate(dayjs(valueString, 'H:mm'));
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
      Notiflix.Notify.warning('Try to change something first.');
      return;
    }
    dispatch(updateTaskThunk({ id, dataTask }))
      .unwrap()
      .then(() => {
        hadleCloseModal();
        Notiflix.Notify.success('The task has been successfully changed.');
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
            className={css.closeButton}
          >
            <img src={close} alt="close" />
          </button>

          <label htmlFor="start" className={css.titleLabel}>
            <p className={css.title}>Title</p>
            <input
              name="title"
              type="text"
              placeholder="Enter text"
              value={title}
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

export default ModalTaskEdit;
