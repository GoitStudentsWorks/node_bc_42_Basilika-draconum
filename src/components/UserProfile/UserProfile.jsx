import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Form } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiPlus, FiChevronDown } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';

import { getUser } from 'redux/auth/authSelectors';
import {
  getCurrentUserThunk,
  updateAvatarThunk,
  updateUserInfoThunk,
} from 'redux/auth/authOperations';

import css from './UserProfile.module.scss';
import './DatePickerStyles.scss';
import { profileSchema } from './ValidationSchemaProfile';
import { isWeekendDay, weekendDayClassName } from './DatePickerCalendar';

// UserProfile
const UserProfile = () => {
  const [newAvatar, setNewAvatar] = useState(null);
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
      phone: values.phone,
      email: values.email,
      skype: values.skype,
      birthday: values.birthday,
    };

    console.log(values.birthday);

    if (newAvatar) {
      const avatarData = new FormData();
      avatarData.append('avatar', newAvatar);
      dispatch(updateAvatarThunk(avatarData));
    }

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
          phone: user.phone ? user.phone : '',
          birthday: user.birthday ? new Date(user.birthday) : new Date(),
          skype: user ? user.skype : '',
          email: user ? user.email : '',
        }}
        validationSchema={profileSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form autoComplete="off" className={css.form} onSubmit={handleSubmit}>
            <div className={css.formAvatar}>
              <div className={css.containerAvatar}>
                {newAvatar ? (
                  <img
                    src={URL.createObjectURL(newAvatar)}
                    className={css.avatarImage}
                    accept="image/*,.png,.jpg,.gif,.web"
                    alt="avatar"
                  />
                ) : user?.avatarURL ? (
                  <img
                    src={user?.avatarURL}
                    className={css.avatarImage}
                    alt="avatar"
                  />
                ) : (
                  <AiOutlineUser className={css.avatarIcon} />
                )}
                <label htmlFor="avatar">
                  <button className={css.btnUpload}>
                    <FiPlus />
                  </button>
                  <input
                    className={css.inputUpload}
                    id="avatar"
                    type="file"
                    onChange={e => {
                      setNewAvatar(e.target.files[0]);
                    }}
                    accept="image/*,.png,.jpg,.gif,.web"
                    name="avatar"
                  ></input>
                </label>
              </div>

              <h3 className={css.avatarName}>
                {user.name ? user.name : 'My name'}
              </h3>
              <span className={css.avatarRole}>User</span>
            </div>

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
                <ErrorMessage
                  component="div"
                  className={css.formError}
                  name="name"
                />
              </div>

              <div className={css.formRow}>
                <label className={css.formLabel} htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className={css.formInput}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+380"
                ></input>
                <ErrorMessage
                  component="div"
                  className={css.formError}
                  name="phone"
                />
              </div>

              <div className={css.formRow}>
                <FiChevronDown className={css.dateIcon} />
                <label className={css.formLabel} htmlFor="birthday">
                  Birthday
                </label>
                <DatePicker
                  type="date"
                  name="birthday"
                  id="birthday"
                  input={true}
                  formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
                  dayClassName={date =>
                    isWeekendDay(date) ? weekendDayClassName : undefined
                  }
                  className={css.formInput}
                  calendarClassName={css.customCalendarStyle}
                  selected={values.birthday}
                  onChange={date => {
                    handleChange({
                      target: { name: 'birthday', value: date },
                    });
                  }}
                  dateFormat="dd/MM/yyyy"
                  calendarStartDay={1}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  closeOnScroll={e => e.target === document}
                />
                <ErrorMessage className={css.formError} name="birthday" />
              </div>

              <div className={css.formRow}>
                <label className={css.formLabel} htmlFor="skype">
                  Skype
                </label>
                <input
                  type="text"
                  name="skype"
                  id="skype"
                  className={css.formInput}
                  placeholder="Skype"
                  value={values.skype}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                <ErrorMessage
                  component="div"
                  className={css.formError}
                  name="skype"
                />
              </div>

              <div className={css.formRow}>
                <label className={css.formLabel} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={css.formInput}
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                <ErrorMessage
                  component="div"
                  className={css.formError}
                  name="email"
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
