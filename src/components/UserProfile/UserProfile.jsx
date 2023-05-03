import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiPlus, FiChevronDown } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';

import { selectUser } from 'redux/auth/authSelectors';
import {
  getCurrentUserThunk,
  updateAvatarThunk,
  updateUserInfoThunk,
} from 'redux/auth/authOperations';

import css from './UserProfile.module.scss';
import './DatePickerStyles.scss';

const isWeekendDay = date => {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
};

const weekendDayClassName = 'weekend-day';

// Validation Schema
const profileSchema = Yup.object({
  name: Yup.string().max(16, 'Must be 16 characters or less').required(),
  phone: Yup.string()
    .matches(
      /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/,
      'invalid phone number format'
    )
    .required('Required'),
  birthday: Yup.date().default(() => new Date()),
  email: Yup.string().email('Invalid email address').required('Required'),
  skype: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .max(16, 'Must be 16 characters or less')
    .required(),
});

// UserProfile
const UserProfile = () => {
  const [newAvatar, setNewAvatar] = useState(null);
  const [newBirthday, setNewBirthday] = useState(new Date());
  const [updatedProfile, setUpdatedProfile] = useState(false);

  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (updatedProfile) {
      dispatch(getCurrentUserThunk());
      setUpdatedProfile(false);
    }
  }, [dispatch, updatedProfile]);

  const handleSubmit = (values, { resetForm }) => {
    const profileData = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      skype: values.skype,
      birthday: values.birthday,
      avatarURL: newAvatar,
    };
    // const profileData = new FormData();
    // profileData.append('name', values.name);
    // profileData.append('email', values.email);
    // if (values.phone) {
    //   profileData.append('phone', values.phone);
    // }
    // if (values.skype) {
    //   profileData.append('skype', values.skype);
    // }
    // profileData.append('birthday', values.birthday);
    // if (newAvatar) {
    //   profileData.append('avatar', newAvatar);
    // }
    // console.log(...profileData);
    console.log(profileData);
    console.log(newAvatar);
    dispatch(updateUserInfoThunk(profileData));
    dispatch(updateAvatarThunk(newAvatar));
    resetForm();
  };

  const uploadImage = e => {
    setNewAvatar(e.target.files[0]);
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          birthday: '',
          skype: '',
          email: '',
        }}
        // initialValues={{
        //   name: user.name || '',
        //   phone: user.phone || '',
        //   birthday: user.birthday || '',
        //   skype: user.skype || '',
        //   email: user.email || '',
        // }}
        validationSchema={profileSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form autoComplete="off" className={css.form} onSubmit={handleSubmit}>
            <div className={css.formAvatar}>
              <div className={css.containerAvatar}>
                {newAvatar ? (
                  <img
                    src={URL.createObjectURL(newAvatar)}
                    className={css.avatarImage}
                    alt="avatar"
                  />
                ) : userData?.avatarURL ? (
                  <img
                    src={userData?.avatarURL}
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
                    onChange={uploadImage}
                    accept="image/*,.png,.jpg,.gif,.web"
                    name="avatar"
                  ></input>
                </label>
              </div>

              <h3 className={css.avatarName}>Polly Mango</h3>
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
                {/* <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className={css.formInput}
                  // value={values.phone ? values.phone : ''}
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="birthday"
                ></input> */}
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
                  selected={newBirthday}
                  onChange={date => {
                    setNewBirthday(date);
                  }}
                  dateFormat="dd/MM/yyyy"
                  calendarStartDay={1}
                  closeOnScroll={e => e.target === document}
                />
                <DatePicker
                  // type="date"
                  // name="birthday"
                  // id="birthday"
                  // input={true}
                  // className={css.formInput}
                  selected={newBirthday}
                  onChange={date => {
                    setNewBirthday(date);
                  }}
                  dateFormat="dd/MM/yyyy"
                  calendarStartDay={1}
                  closeOnScroll={e => e.target === document}
                  // className={css.customStyle}
                  // calendarClassName={css.customCalendarStyle}
                  // dayClassName={css.customDayStyle}
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
          </form>
        )}
      </Formik>
    </div>
  );
};
export default UserProfile;
