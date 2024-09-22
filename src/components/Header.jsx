import React from 'react'

import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar-container">
            <div className='nav-top'>
                <div className='w-full h-16 mt-5 text-white font-bold bg-zinc-800 px-[--nav-px] '>
                    <div className='flex justify-between items-center w-full h-full'>
                        <div className='navt-t-left'>
                            <NavLink
                                to='/'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/order-online'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Order Online
                            </NavLink>
                            <NavLink
                                to='/unknown/2'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Your Whishlist
                            </NavLink>
                        </div>
                        <div className='navt-t-center h-60 w-60 translate-y-5'>
                            <div className='h-full w-full  border-8 rounded-full border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 duration-500 cursor-pointer  ' >
                                <div className='h-full w-full bg-lime-500 hover:bg-green-500 duration-1000  rounded-full flex justify-center items-center  ' >
                                    <img src="/img/nav/logo.png" alt="NA" />
                                </div>
                            </div>
                        </div>
                        <div className='navt-t-right'>
                            <NavLink
                                to='/unknown/3'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Our Menu
                            </NavLink>
                            <NavLink
                                to='/unknown/4'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Latest News
                            </NavLink>
                            <NavLink
                                to='/contact'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-bottom h-[7.25rem] w-full font-semibold'>
                <div className='px-[--nav-px] h-full flex items-center'>
                    <div className='h-12 my-auto w-full flex justify-between items-center'>
                        <div className="nav-b-lhs flex">
                            <img src="/img/nav/delivery.svg" alt="" />
                            <div className='ml-4' >
                                <p className='font-normal text-neutral-800' >For Delivery, Call us</p>
                                <span className='text-neutral-800 font-bold text-xl' >123-456-789</span>
                            </div>
                        </div>
                        <div className="nav-b-rhs flex">
                            <div className='other-links flex justify-center items-center  gap-4 w-40'>
                                <img className='other-link-img' src="/img/nav/search.svg" alt="" />
                                <img className='other-link-img' src="/img/nav/avatar.svg" alt="" />
                                <img className='other-link-img' src="/img/nav/cart.svg" alt="" />
                            </div>

                            <button type="button" className=' flex gap-3 px-5 py-3 bg-red-600 hover:bg-lime-500 text-white ease duration-300 uppercase font-serif '>
                                Make Your Pizza
                                <img src="/img/nav/pizza.png" alt="" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header