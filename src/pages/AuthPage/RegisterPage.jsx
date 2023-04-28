import { useState } from 'react';


import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";

import { registerThunk } from '../../redux/auth/authOperations';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      registerThunk({
        name,
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(console.log);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          value={name}
          onChange={handleChange}
          type="name"
          name="name"
          className="form-control"
          placeholder="Name"
        />
      </div>

      <div className="input-group mb-3">
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
        />
      </div>

      <div className="input-group mb-3">
        <input
          value={password}
          onChange={handleChange}
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <button type="submit">Join</button>
    </form>
  );
};
