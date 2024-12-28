import React from 'react'
import style from "./Sectionthree.module.css";
const Sectionthree = () => {
    return (
        <>
        <div className={style.ourr}>
        <span>---- Our Professional members</span>
                <h4>Our Team Mambers</h4>   
        </div>
            <div className={style.ethan}>
                <div className={style.welch}>
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png" alt="" />
                    <br />
                    <a href="">Ethan Welch</a>
                    <br />
                    <span>-- UX Designer</span>
                </div>

                <div className={style.design}>
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png" alt="" />
                    <br />
                    <a href="">Ethan Welch</a>
                    <br />
                    <span>-- UX Designer</span>
                </div>

                <div className={style.ux}>
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png" alt="" />
                    <br />
                    <a href="">Ethan Welch</a>
                    <br />
                    <span>-- UX Designer</span>
                    
                </div>

            </div>
        </>
    )
}

export default Sectionthree
