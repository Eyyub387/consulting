import React from 'react'
import style from "./Header.module.css";
import { GoClock } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className={style.container}>

        <div className={style.write}>
          <i className={style.clock}><GoClock /></i>
          <p> Mon - SAT: 6.00 am - 10.00 pm</p>
          <p> Sun: Closed</p>
        </div>

        <div className={style.icons}>
          <a href=""><FaFacebookF /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaLinkedinIn /></a>
          <a href=""><FaGooglePlusG /></a>
          <a href="./Card"><MdFavorite /></a>
          <a href="./Wish"><FaShoppingBasket />   </a>
        </div>
      </div>

      <div className={style.consulting}>
        <div className={style.logo}>
          <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png" alt="" />
        </div>

        <div className={style.home}>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </div>
      </div>
    </>
  )
}
export default Header