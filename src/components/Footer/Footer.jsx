
import React from 'react'
import style from './Footer.module.css';
import { MdFavorite } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className={style.foot}>
                <div className={style.write}>
                    <p>Copyright ©2024 All rights reserved | This template is made with</p>
                    <i><MdFavorite /></i>
                    <p>by |</p>
                    <span>Eyyub</span>
                </div>
            </div>
        </>
    )
}
export default Footer