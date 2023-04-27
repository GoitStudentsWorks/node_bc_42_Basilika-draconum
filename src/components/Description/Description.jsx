import React from 'react'
import calendar from '../../images/image-calendar.png'
import one from '../../images/image-one.png'
import sidebar from '../../images/image-sidebar.png'

export const Description = () => {
  return (
      <>
      <section>
        <div>
          <h2>1.</h2>
          <h3>Calendar</h3>
          <h4>VIEW</h4>
          <p>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.
          </p>
        </div>
        <img src={calendar} alt=""/>
        
        
      </section>

      <section>
        <div>
          <h2>2.</h2>
          <h4>SIDEBAR</h4>
          <p>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
          </p>
        </div>
        <img src={sidebar} alt=""/>
        
      </section>
      
     <section>
        <div>
          <h2>3.</h2>
          <h3>All in</h3>
          <h4>ONE</h4>
          <p>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.
          </p>
        </div>
        <img src={one} alt=""/>
        
        
      </section> 
      </>
  )
}
