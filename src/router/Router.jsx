import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/home'
import Card from '../pages/Card/Card'
import Wish from '../pages/Wish/Wish'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/wish' element={<Wish/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
