import React, { useState } from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import Notiflix from 'notiflix';
import { isModalEditShownAction } from 'redux/tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import close from '../../images/close.svg';

import { selectArrTasks } from 'redux/tasks/tasksSelectors';

import style from './TaskForm.module.scss';
import { addTask } from 'redux/tasks/tasksOperations';

function TaskPopUp({ task, closeModal }) {
  const format = 'H:mm';
  const [start, setStart] = useState(
    task ? task.start : dayjs('09:00', format)
  );
  const [end, setEnd] = useState(task ? task.end : dayjs('12:00', format));
  const [priority, setPriority] = useState(task ? task.priority : 'low');
  const [title, setTitle] = useState(task ? task.title : 'Enter text');

  const dispatch = useDispatch();

  const onChangeStart = (time, valueString) => {
    setStart(dayjs(valueString, format));
  };

  const onChangeEnd = (time, valueString) => {
    setEnd(dayjs(valueString, format));
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
    const data = {date:{start, end}, priority, title };
    if (
      filterTasks.find(task => task.title.toLowerCase() === title.toLowerCase())
    ) {
      Notiflix.Notify.failure(`${title} is already added.`);
      return;
    }

    dispatch(addTask(data));
    setTitle('');
  };

  const handleCancel = () => {
    isModalEditShownAction(false);
  };

  const hadleCloseModal = () => {
    closeModal(false);
  };

  return (
    <>
      {/* <Modal active={activateModal} setActive={setActivateModal}> */}
      {/* <div className={style.backdrop}>
        <div className={style.popup}> */}
      <form action="" className={style.popupForm}>
        <label htmlFor="start" className={style.titleLabel}>
          <p>Title</p>
          <input type="text" name="title" onChange={onChangeTitle} />
        </label>
        <div className={style.timePickersWrapper}>
          <label htmlFor="title" className={style.timePickerLabel}>
            <p>Start</p>
            <TimePicker
              name="start"
              onChange={onChangeStart}
              value={start}
              format={'H:mm'}
              minuteStep={5}
              suffixIcon={false}
              clearIcon={false}
              className={style.timePicker}
              placement="bottomLeft"
            />
          </label>
          <label htmlFor="end" className={style.timePickerLabel}>
            <p>End</p>
            <TimePicker
              name="end"
              onChange={onChangeEnd}
              value={end}
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
            <button
              type="submit"
              className={style.submitButton}
              onClick={handleAdd}
            >
              <span></span>Add
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
          <img src={close} alt="close" />
        </button>
      </form>
      {/* </div>
      </div> */}
      {/* </Modal> */}
    </>
  );
}

export default TaskPopUp;

// export const addTask = createAsyncThunk(
//   'task/addTask',
//   async (tasksData, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/task', { ...tasksData });
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addTask = createAsyncThunk(
//   'task/addTask',
//   async (tasksData, thunkAPI) => {
//     try {
//       const response = await fetch('/task', {
//         method: 'POST',
//         body: JSON.stringify(tasksData),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
