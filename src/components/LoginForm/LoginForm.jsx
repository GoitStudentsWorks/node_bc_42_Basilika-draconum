import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import style from './loginForm.module.scss';
import icons from 'images/auth.svg';
import GooseLogIn from 'images/goose-login.png';
import GooseLogIn2x from 'images/goose-login@2x.png';

import { loginThunk } from '../../redux/auth/authOperations';
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
const initialValues = {
  email: '',
  password: '',
};
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      loginThunk({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <div className={style.wrapper}>
        <div className={style.loginFormContainer}>
          <Form className={style.form}>
            <h1 className={style.form_title}>Log in</h1>
            <label className={style.login_label}>
              <p className={style.login_paragraph}>Email</p>
            <Field
              className={style.login_input}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            </label>
            <ErrorMessage
              component="span"
              className={style.error_message}
              name="email"
            />
            <label className={style.login_label}>
              <p className={style.login_paragraph}>Password</p>
            </label>
            <Field
              className={style.login_input}
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              component="span"
              className={style.error_message}
              name="password"
            />

            <button className={style.form_button} type="submit">
              <span className={style.button_text}>Log in</span>
              <svg className={style.svg}>
                <use href={`${icons}#icon-log-in`} />
              </svg>
            </button>
          </Form>
          <img
            className={style.img}
            srcSet={`${GooseLogIn} 1x, ${GooseLogIn2x} 2x`}
            src={`${GooseLogIn}`}
            alt="goose"
          />
        </div>
      </div>
    </Formik>
  );
};
