import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';
import style from './registerForm.module.scss';
import icons from 'images/auth-svg/auth.svg';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { registerThunk } from 'redux/auth/authOperations';
import GooseRegister from 'images/goose-register.png';
import GooseRegister2x from 'images/goose-register@2x.png';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        registerThunk({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
    },
    validationSchema: yup.object().shape({
      name: yup.string().email().required(),
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
    }),
  });

  return (
    <div className={style.wrapper}>
      <div className={style.loginFormContainer}>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <h1 className={style.form_title}>Sign Up</h1>
          <label className={style.login_label}>
            <p
              className={
                formik.touched.name
                  ? formik.errors.name
                    ? style.error_paragraph
                    : style.done_paragraph
                  : style.login_paragraph
              }
            >
              Name
            </p>
          </label>
          <div className={style.input_container}>
            <input
              className={
                formik.touched.name
                  ? formik.errors.name
                    ? style.error_input
                    : style.done_input
                  : style.login_input
              }
              type="name"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name ? (
              formik.errors.name ? (
                <>
                  <span className={style.error_message}>
                    This is an ERROR name
                  </span>
                  <svg className={style.icon_error}>
                    <use href={`${icons}#icon-error`}></use>
                  </svg>
                </>
              ) : (
                <>
                  <span className={style.done_message}>
                    This is an CORRECT name
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
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
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
            <span className={style.button_text}>Sign Up</span>
            <svg className={style.svg}>
              <use href={`${icons}#icon-log-in`} />
            </svg>
          </button>
        </form>

        <AuthNavigate route={'/login'} text="Log In" />
        <img
          className={style.img}
          srcSet={`${GooseRegister} 1x, ${GooseRegister2x} 2x`}
          src={`${GooseRegister}`}
          alt="goose"
        />
      </div>
    </div>
  );
};
