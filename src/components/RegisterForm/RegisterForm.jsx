// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
      <Form >
        <div className="input-group mb-3">
          <Field
            type="name"
            name="name"
            className="form-control"
            placeholder="Name"
          />
          <ErrorMessage name="name" />
        </div>

        <div className="input-group mb-3">
          <Field
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />
          <ErrorMessage name="email" />
        </div>

        <div className="input-group mb-3">
          <Field
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
          />
          <ErrorMessage name="password" />
        </div>

        <button type="submit">Sing Up</button>
      </Form>
    </Formik>
  );
};
