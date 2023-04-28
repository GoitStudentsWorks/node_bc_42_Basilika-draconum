import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';


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
      <Form>
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

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

// import React from 'react';
// import { Input } from 'antd';

// const App: React.FC = () => <Input placeholder="Basic usage" />;

// export default App;