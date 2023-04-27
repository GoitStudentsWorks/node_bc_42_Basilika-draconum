import React from 'react'
import { Link } from 'react-router-dom'
import style from './authSection.module.css'
import logo from '../../images/goose-start.png'


export const AuthSection = () => {
    return (
    <div className="container"> <section className={style.section}>
        <img src={logo} alt="goose"/>
      <h2>Goose Track</h2>
      <div>
        <Link to="/register">
          <linkSing>Sing Up</linkSing>
        </Link>
        <Link to="/login">
          Log in
            {/* <svgLogin>
              <use href={icon + '#icon-log-out'}></use>
            </svgLogin> */}

          
        </Link>
      </div>
    </section></div>
   

  )
}
