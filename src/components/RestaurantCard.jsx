/* eslint-disable react/prop-types */
// SwiggyCard.js
import React from 'react';
import { PREMIUM_RATING } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ data }) => {
    const {
        id,
        image,
        restaurantName,
        rating,
        description,
        cuisines,
        deliveryTime,
        price
    } = data;

    return (
        <Link to={`/res-menu/${id}`} className="relative max-w-sm rounded overflow-hidden shadow-xl bg-white w-72 h-[29rem] hover:-translate-y-1 duration-500 cursor-pointer">
            {(rating > PREMIUM_RATING) &&
                <div className="absolute top-0 right-5 px-2 py-1 cutive-mono-regular font-extrabold text-white bg-amber-500 text-sm font-bold rounded-b-lg shadow-xl ">
                    PREMIUM
                </div>
            }

            <img className="w-full h-[45%] object-cover" src={image} alt={restaurantName} />

            <div className='flex flex-col justify-between h-[55%] pb-4' >
                <div className="px-6 py-2">
                    <div>
                        <div className="font-bold text-xl mb-2">{restaurantName}</div>
                        <span className="text-gray-700 text-base"> {cuisines.join(', ').slice(0, 55) + "..."}</span>
                    </div>
                </div>
                <div className="px-6 text-gray-700 text-base">
                    📍 {description}
                    <br />
                </div>
                <div>
                    <div className='px-6 pb-2 flex justify-between' >
                        <span className="inline-block bg-green-500 text-white text-xs leading-relaxed px-2 rounded-full mr-2">{rating}⭐</span>
                        <span className='text-gray-700 px-2 font-[KaushanFont]' >{deliveryTime} min.</span>
                    </div>
                    <div className="px-6 pb-2 flex justify-between items-center ">
                        <span className='text-lg font-bold px-2' >₹ {price}</span>
                        <button className="bg-red-600 hover:bg-lime-500 duration-200 text-white font-bold py-2 px-4 rounded">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

// 🚀 Higher Order Components 🚀 (⚠️ only concept is used but not used in this project)
// input is component and output is (modified) component
// export const withPromotedLabel = (RestaurantCard) => {
//     return (props) => {
//         return (
//             <div className='relative'>
//                 <RestaurantCard {...props} />
//                 <p className='absolute top-0 right-0 bg-teal-300'>Promoted</p>
//             </div>
//         )
//     }
// }

export default RestaurantCard;
