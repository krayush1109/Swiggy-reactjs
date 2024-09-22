import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import HeroSlider from '../components/HeroSlider'
import OrderOnline from '../pages/OrderOnline'
import NotFound from '../pages/NotFound'
import RestaurantMenu from '../pages/RestaurantMenu'

// 😴💤 lazy loading applied on Contact Page
// import Contact from '../pages/Contact'

const MainRoutes = () => {

    const Contact = lazy(() => import("../pages/Contact"))

    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/order-online' element={<OrderOnline />} ></Route>
            <Route path='/unknown/:id' element={<HeroSlider />} ></Route>
            <Route path='/res-menu/:id' element={<RestaurantMenu />} ></Route>
            <Route path='/contact' element={<Suspense fallback={<h1>Loading...</h1>} > <Contact /> </Suspense> } ></Route>

            {/* <Route path='*' element={<h1 className='not-found'>Page Not Found! </h1>} ></Route> */}
            <Route path='*' element={<NotFound />} ></Route>
        </Routes>
    )
}

export default MainRoutes