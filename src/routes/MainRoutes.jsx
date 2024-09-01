import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import HeroSlider from '../components/HeroSlider'
import OrderOnline from '../pages/OrderOnline'
import NotFound from '../pages/NotFound'
import RestaurantMenu from '../pages/RestaurantMenu'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/order-online' element={<OrderOnline />} ></Route>
            <Route path='/unknown/:id' element={<HeroSlider />} ></Route>
            <Route path='/res-menu/:id' element={<RestaurantMenu />} ></Route>

            {/* <Route path='*' element={<h1 className='not-found'>Page Not Found! </h1>} ></Route> */}
            <Route path='*' element={<NotFound />} ></Route>
        </Routes>
    )
}

export default MainRoutes