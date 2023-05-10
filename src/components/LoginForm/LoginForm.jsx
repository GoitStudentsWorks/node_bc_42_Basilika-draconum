import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import style from './loginForm.module.scss';
import icons from 'images/auth-svg/auth.svg';
import GooseLogIn from 'images/goose-login.png';
import GooseLogIn2x from 'images/goose-login@2x.png';

import { loginThunk } from '../../redux/auth/authOperations';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        loginThunk({
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).max(64).required(),
    }),
  });

  return (
    <div className={style.wrapper}>
      <div className={style.loginFormContainer}>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <h1 className={style.form_title}>Log In</h1>
          <label className={style.login_label}>
            <p
              className={
                formik.touched.email
                  ? formik.errors.email
                    ? style.error_paragraph
                    : style.done_paragraph
                  : style.login_paragraph
              }
            >
              Email
            </p>
          </label>
          <div className={style.input_container}>
            <input
              className={
                formik.touched.email
                  ? formik.errors.email
                    ? style.error_input
                    : style.done_input
                  : style.login_input
              }
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email ? (
              formik.errors.email ? (
                <>
                  <span className={style.error_message}>
                    This is an ERROR email
                  </span>
                  <svg className={style.icon_error}>
                    <use href={`${icons}#icon-error`}></use>
                  </svg>
                </>
              ) : (
                <>
                  <span className={style.done_message}>
                    This is an CORRECT email
                  </span>
                  <svg className={style.icon_done}>
                    <use href={`${icons}#icon-done`}></use>
                  </svg>
                </>
              )
            ) : null}
          </div>

          <label className={style.login_label}>
            <p
              className={
                formik.touched.password
                  ? formik.errors.password
                    ? style.error_paragraph
                    : style.done_paragraph
                  : style.login_paragraph
              }
            >
              Password
            </p>
          </label>
          <div className={style.input_container}>
            <input
              className={
                formik.touched.password
                  ? formik.errors.password
                    ? style.error_input
                    : style.done_input
                  : style.login_input
              }
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password ? (
              formik.errors.password ? (
                <>
                  <span className={style.error_message}>
                    This is an ERROR password
                  </span>
                  <svg className={style.icon_error}>
                    <use href={`${icons}#icon-error`}></use>
                  </svg>
                </>
              ) : (
                <>
                  <span className={style.done_message}>
                    This is an CORRECT password
                  </span>
                  <svg className={style.icon_done}>
                    <use href={`${icons}#icon-done`}></use>
                  </svg>
                </>
              )
            ) : null}
          </div>

          <button className={style.form_button} type="submit">
            <span className={style.button_text}>Log In</span>
            <svg className={style.svg}>
              <use href={`${icons}#icon-log-in`} />
            </svg>
          </button>
        </form>

        <AuthNavigate route={'/register'} text="Sign Up" />
        <img
          className={style.img}
          srcSet={`${GooseLogIn} 1x, ${GooseLogIn2x} 2x`}
          src={`${GooseLogIn}`}
          alt="goose"
        />
      </div>
    </div>
  );
};
