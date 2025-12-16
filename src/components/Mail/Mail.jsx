import React from 'react'
import mail from '../../assets/Mail/mail.png'
import './Mail.css'
const Mail = () => {
  return (

    <section className='mail-section'>
        <div className="container">
      

      <div className="mail">
      <h2>
        Why use direct mail? <br />
It <span className='style'>works</span> like crazy.
      </h2>


      <div className="mail-box">
        <div className="m-card">
            <h3>28X</h3>
            <p>Higher response reate then email and digital</p>
        </div>
        <div className="m-card">
            <img src={mail} alt="" />
            <p>Your messages get read</p>
        </div>
        <div className="m-card">
            <h3>17Days</h3>
           <p>Lifespan of a postcard vs. seconds for email or SMS</p>
        </div>
      </div>
        
      </div>



        </div>

    </section>


  )
}

export default Mail
