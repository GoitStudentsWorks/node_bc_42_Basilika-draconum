import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAccessToken } from '../../redux/auth/authSelectors';

const PublicRoute = ({ component }) => {
  const token = useSelector(getAccessToken);
  console.log(token);
  return token ? <Navigate to={'/account'} /> : component;
};

export default PublicRoute;
