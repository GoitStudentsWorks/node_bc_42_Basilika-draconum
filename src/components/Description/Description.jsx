import React from 'react'
import calendar from '../../images/mobcalendar.png'
import one from '../../images/mobone.png'
import sidebar from '../../images/mobsidebar.png'
// import style from '../Description/description.module.css'
import style from './description.module.scss'

export const Description = () => {
  return (
    <>
      <div className="container">
        <section className={style.section}>
          <div className={style.part}>
            <h2 className={style.number}>1.</h2>
            <h3 className={style.title}>CALENDAR</h3>
            <h4 className={style.subtitle}>VIEW</h4>
            <p className={style.descript}>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </p>

            <img src={calendar} alt="" />
          </div>
        </section>

        <section>
          <div className={style.part}>
            <div className={style.sidebarWrapper}>
              <h2 className={style.number}>2.</h2>
              <h4 className={style.subtitle}>SIDEBAR</h4>
              <p className={style.descript}>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </p>
            </div>
            <img src={sidebar} alt="" />
          </div>
        </section>

        <section>
          <div className={style.part}>
            <h2 className={style.number}>3.</h2>
            <h3 className={style.title}>All in</h3>
            <h4 className={style.subtitle}>ONE</h4>
            <p className={style.descript}>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </p>

            <img src={one} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
