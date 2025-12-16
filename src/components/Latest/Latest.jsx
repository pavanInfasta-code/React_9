import React from 'react'


import l1 from '../../assets/Latest/l1.png'
import l2 from '../../assets/Latest/l2.png'
import l3 from '../../assets/Latest/l3.png'
import './Latest.css'
const Latest = () => {
  return (
   <section className='latest-section'>

    <div className="container">


        <div className="latest">

            <div className="title">

                <h3>Latest trends & <span className='style'>insights</span></h3>
            </div>


<div className="boxes">


            <div className="box">

                <img src={l1} alt="" />

                <h3>3 Low-Cost Campaigns You Must Run to Win BFCM</h3>
            </div>
            <div className="box">

                <img src={l2} alt="" />

<h3>Postcard Marketing: The Definitive Guide to High ROI [2022]</h3>
            </div>
            <div className="box">

                <img src={l3} alt="" />

<h3>The Ultimate Guide to Thank You Notes for Ecommerce</h3>
            </div>

</div>

        </div>
    </div>


   </section>
  )
}

export default Latest
