import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FiPlus, FiChevronDown } from 'react-icons/fi';

import css from './UserProfile.module.scss';
import photo from './images/cat.jpg';

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

const UserProfile = () => {
  const handleSubmit = (values, { resetForm }) => {
    const profileData = {
      name: values.name,
      phone: values.phone,
      birthday: values.birthday,
      skype: values.skype,
      email: values.email,
    };
    console.log(profileData);
    resetForm();
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
        validationSchema={profileSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form autoComplete="off" className={css.form} onSubmit={handleSubmit}>
            <div className={css.formAvatar}>
              <div className={css.figureAvatar}>
                <img className={css.avatarImage} src={photo} alt="avatar" />
                <label className={css.labelUpload} htmlFor="avatar">
                  <button className={css.btnUpload}>
                    <FiPlus />
                  </button>

                  <input
                    className={css.inputUpload}
                    id="avatar"
                    type="file"
                    // onChange={event => setAvatarURL(event.target.files[0])}
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
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className={css.formInput}
                  // value={values.phone ? values.phone : ''}
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="birthday"
                ></input>
                {/* <DatePick
            type="date"
            name="birthday"
            id="birthday"
            input={true}
            maxDate={new Date()}
            selected={values.birthday}
            onChange={data => {
              setNewBirthday(data);
            }}
            placeholder="Birthday"
            dateFormat="dd/MM/yyyy"
          /> */}
                {/* 
          <VectorPng>
            <use href={Icon + '#icon-chevron-right-new'}></use>
          </VectorPng> */}
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
                  // value={values.skype ? values.skype : ''}
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
                  // value={values.email}
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
