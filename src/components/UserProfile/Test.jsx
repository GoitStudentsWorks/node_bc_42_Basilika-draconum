import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { getUser } from 'redux/auth/authSelectors';
import {
  getCurrentUserThunk,
  updateUserInfoThunk,
} from 'redux/auth/authOperations';

import css from './UserProfile.module.scss';
import './DatePickerStyles.scss';

const UserProfile = () => {
  const [isUpdated, setIsUpdated] = useState(null);

  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdated) {
      dispatch(getCurrentUserThunk());
      setIsUpdated(false);
    }
  }, [dispatch, isUpdated]);

  const handleSubmit = (values, { resetForm }) => {
    const profileData = {
      name: values.name,
      birthday: values.birthday,
    };

    dispatch(updateUserInfoThunk(profileData));
    setIsUpdated(true);
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik
        enableReinitialize
        initialValues={{
          name: user.name || '',
          birthday: user.birthday ? new Date(user.birthday) : new Date(),
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form autoComplete="off" className={css.form} onSubmit={handleSubmit}>
            <div className={css.formCenter}>
              <div className={css.formRow}>
                <label className={css.formLabel} htmlFor="name">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={css.formInput}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                ></input>
              </div>

              <div className={css.formRow}>
                <label className={css.formLabel} htmlFor="birthday">
                  Birthday
                </label>
                <DatePicker
                  type="date"
                  name="birthday"
                  id="birthday"
                  input={true}
                  formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
                  className={css.formInput}
                  calendarClassName={css.customCalendarStyle}
                  selected={values.birthday}
                  onChange={date => {
                    handleChange({
                      target: { name: 'birthday', value: date },
                    });
                  }}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
            <button className={css.formBtn} type="submit">
              Save changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default UserProfile;
