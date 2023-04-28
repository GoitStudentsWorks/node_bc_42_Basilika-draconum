import { useState } from 'react';

import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";

import { loginThunk } from '../../redux/auth/authOperations';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
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
      loginThunk({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(console.log);
  };

  return (
    <form onSubmit={handleSubmit}>
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
