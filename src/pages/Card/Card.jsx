import React from 'react'
import style from "./Card.module.css";
import { GoClock } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
const Card = () => {
  return (
    <>

<div className={style.carrd}>
  <h1>FAVORI</h1>
</div>

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


</div>
    </>
  )
}

export default Card