import React, { useEffect, useState } from 'react'
import RestaurantMenuAccordin from '../components/RestaurantMenuAccordin'
import { useParams } from 'react-router'
import { FetchMenuData } from '../utils/helpers/FetchMenuData';

const RestaurantMenu = () => {
  const restaurantID = useParams().id;

  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    (async () => {
      const list = await FetchMenuData(restaurantID)
      setResInfo(list);
      console.log(list);
    })()
  }, [])

  // console.log(resInfo.cuisines.join(', '))
  return (
    <>
      <div className="main-container w-[50rem] mx-auto">
        <section className="container w-full">
          <div id='menu-top' >
            <h1 className='text-2xl font-extrabold mb-6 ml-3'>{resInfo.name}</h1>

            <div id='res-detail-box' className='border-[1px] shadow-md border-slate-300 px-4 py-3 rounded-2xl'>
              <div className='font-bold space-y-1'>
                <div className='flex space-x-4' >
                  <div>
                    <span> <i className='ri-star-fill text-yellow-400'></i> {resInfo.avgRating} </span>
                    <span>({resInfo.totalRatingsString})</span>
                  </div>
                  <div className='inline-block flex items-center' >
                    <p className='inline-block w-1 h-1  rounded-full bg-slate-400 mr-2'></p>
                    <span className='inline'>{resInfo.costForTwoMessage}</span>
                  </div>
                </div>
                <p className='text-orange-600 underline cursor-pointer'>
                  {/* {resInfo?.cuisines?.length > 0 ? resInfo.cuisines.join(', ') : ''} */}
                  {resInfo?.cuisines?.join(', ')}
                </p>
              </div>

              <div className='my-2 flex flex-col space-y-1 mb-5'>
                <p><strong><i className="ri-map-pin-2-line text-red-500"></i> Outlet </strong> {resInfo.areaName}</p>
                <p className='font-bold lowercase'><i className='ri-time-line text-gray-600'></i> {resInfo.timing} </p>
              </div>
              <hr />
              <p className=' py-2 text-gray-600 font-normal'><i className="ri-e-bike-2-fill mr-1"></i> {resInfo.freeDeliveryAbove} </p>
            </div>
          </div >
        </section>

        <section id='menu-container' className=''>

          <h1 className='text-center my-8 font-semibold text-gray-600'>
            <i className="ri-restaurant-2-line"></i>
            <span className='mx-4'>MENU</span>
            <i className="ri-restaurant-2-line"></i>
          </h1>

          <div className='relative'>
            <input type="text" className='w-full py-2 text-lg text-center text-black font-semibold bg-slate-200 outline-none rounded-md' placeholder='Search for dishes...' />
            <i className='ri-search-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold'></i>
          </div>
          <RestaurantMenuAccordin restaurantID={restaurantID} />
        </section>
      </div>
    </>
  )
}

export default RestaurantMenu