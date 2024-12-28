
import React from 'react' 
import style from './Sectiontwo.module.scss'

const Sectiontwo = () => {
  return (
    <>
    <div className={style.top}>
      <span>--- Our Top Services</span>
      <h6>Our Best Services</h6>
    </div>

    <div className={style.Sectionthree}> 
   
        <div className={style.color}> 
        </div>
        <div className={style.coloring}>
        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png" alt="" />

        <div className={style.content}>
            <span>Our Top Services</span>
            <h1>Our Best Services</h1>
            <h5>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</h5>
            <p>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
            <button className={style.btnone}>MORE ABOUT US</button>

        </div>
        </div>
    </div>
    </>
  )
}

export default Sectiontwo