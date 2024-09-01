import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SWIGGY_RESTAURANT_MENU_API } from '../utils/constants';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b">
            <button
                className="w-full flex justify-between items-center p-4 focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="text-lg font-medium ">{title} (Count) </span>
                <i
                    className={`ri-arrow-down-s-line transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                ></i>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} p-4 `}>

                {[1, 2, 3].map((d, i) => (
                    <div key={i}>
                        <section className="flex my-10 mb-10">
                            <div id='lhs-accordion' className='pr-12 space-y-2'>
                                <div>
                                    <h1 className='font-bold text-lg text-slate-800'>{content.name}</h1>
                                    <p className='font-bold  '>₹ 249</p>
                                </div>

                                <h3 className='text-emerald-500 text-sm font-bold'> <i className='ri-star-fill'></i>3.2<span className='text-slate-400'> (232)</span> </h3>

                                <p className='text-slate-500 font-medium'>
                                    {content.areaName}
                                    A flavorful and aromatic rice dish infused with the fragrant essence of jeera, perfect to complement any savory meal.
                                </p>
                            </div>
                            <div id='rhs-accordion' className='relative basis-[10rem] shrink-0 '>
                                <div className='rounded-xl'>
                                    <img src="" className='w-full h-full bg-cover bg-center' alt="NA" />
                                </div>
                                <button className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white hover:bg-slate-100 w-4/5 shadow-lg font-extrabold py-2 text-emerald-500 rounded-xl ' > ADD </button>
                            </div>
                        </section>
                        <hr />
                    </div>
                ))}


            </div>
        </div>
    );
};

const RestaurantMenuAccordin = ({ restaurantID }) => {
    const accordionData = [
        {
            title: 'Recommended (14)',
            content: "menuList",
        },
        {
            title: 'Accordion Item #2',
            content: 'This is the content of the second accordion item.',
        },
        {
            title: 'Accordion Item #3',
            content: 'This is the content of the third accordion item.',
        },
    ];

    return (
        <div className="w-full  mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {accordionData.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} indexToOpen={0} />
            ))}
        </div>
    );
};

export default RestaurantMenuAccordin;
