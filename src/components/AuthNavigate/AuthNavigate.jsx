import { Link } from 'react-router-dom';
import style from './authNavigate.module.scss'

export const AuthNavigate = ({ route, text }) => (
  <Link className={style.link} to={route}>{text}</Link>
);