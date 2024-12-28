import React from 'react'
import Products from './components/Products/Products';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import Sectiontwo from '../../components/Sectiontwo/Sectiontwo';
import Sectionthree from '../../components/Sectionthree/Sectionthree';
import Sectionfour from '../../components/Sectionfour/Sectionfour';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <>
    <Header/>
    <Section/>
    <Products />
    <Sectiontwo/>
    <Sectionthree/>
    <Sectionfour/>
    <Footer/>
    </>
  )
}

export default Home;