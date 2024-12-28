import React from 'react'
import style from "./Section.module.css";
const Section = () => {
  return (
    <>
      
      <div className={style.imageone}>

        <div className={style.committed}>
            <span>---  COMMITTED TO SUCCESS</span>
            <br />
            <h1> We help to grow <br /> your business </h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit Numquam eius inventore.  </p>
            <br />
            <button>OUR SERVICES</button>
        </div>
      </div>
      <div className={style.top}>
      <span>--- Our Top Services</span>
      <h6>Our Best Services</h6>
      </div>
    </>
  )
}

export default Section
