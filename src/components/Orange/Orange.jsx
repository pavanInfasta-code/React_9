import React from 'react'
import orange from '../../assets/Orange/orange.png'

import './Orange.css'
const Orange = () => {
  return (
    <section className='orange-section'>

        <div className="container">

            <div className="orange">

            <div className="orange-left side">
                <h2>Try PostPilot Risk-Free</h2>
                <p>No contracts. No commitments. Guaranteed results.*</p>

                <div className="orange-btn">
              <div className="o-btn">
                <button>GET STARTED</button>
              </div>

                  <div className="stars">
                      <div className="o-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>

                        <div className="s-p">
                          <p>5.0 Shopify Rating</p>
                        </div>
                  </div>
            </div>

            <div className="foot">

            <p>* for qualified brands with over $1m annual Shopify revenue.</p>
            </div>
            
            </div>


            <div className="orange-right side">
                <img src={orange} alt="" />
            </div>
        </div>

            </div>


    </section>
  )
}

export default Orange
