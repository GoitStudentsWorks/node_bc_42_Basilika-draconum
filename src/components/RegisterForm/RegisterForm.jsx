// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import style from './registerForm.module.scss';
import icons from 'images/auth.svg';
import GooseRegister from 'images/goose-register.png';
import GooseRegister2x from 'images/goose-register@2x.png';
// import { useNavigate } from "react-router-dom";


import { registerThunk } from '../../redux/auth/authOperations';
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
const initialValues = {
  name: '',
  email: '',
  password: '',
};
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      registerThunk({
        name: values.name,
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
          <h1 className={style.form_title}>Sign Up</h1>
            <label className={style.login_label}>
              <p className={style.login_paragraph}>Name</p>
              <Field
                className={style.login_input}
                type="name"
                name="name"
                placeholder="Name"
              />
            </label>
            <ErrorMessage
              component="span"
              className={style.error_message}
              name="name"
            />
            <label className={style.login_label}>
              <p className={style.login_paragraph}>Email</p>
              <Field
                className={style.login_input}
                type="email"
                name="email"
                placeholder="Email"
              />
            </label>
            <ErrorMessage
              component="span"
              className={style.error_message}
              name="email"
            />
            <label className={style.login_label}>
              <p className={style.login_paragraph}>Password</p>
              <Field
                className={style.login_input}
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
            <ErrorMessage
              component="span"
              className={style.error_message}
              name="password"
            />

            <button className={style.form_button} type="submit">
              <span className={style.button_text}>Sign up</span>
              <svg className={style.svg}>
                <use href={`${icons}#icon-log-in`} />
              </svg>
            </button>
          </Form>
          <img
            className={style.img}
            srcSet={`${GooseRegister} 1x, ${GooseRegister2x} 2x`}
            src={`${GooseRegister}`}
            alt="goose"
          />
        </div>
      </div>
    </Formik>
  );
};
