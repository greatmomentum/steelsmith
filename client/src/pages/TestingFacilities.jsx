import React from 'react';
import holdingcapacitytesting from '../images/testingfacilities/Holding-Capacity-Testing-1-1873x2048.jpg';
import { NavLink } from 'react-router-dom';

const TestingFacilities = () => {
  return (
    <section className="container text-gray-600 body-font ">

    <div className='flex justify-center space-x-2 mt-24 items-center' >
      <NavLink to='/WhatIsAToggleClamp' className='flex bg-[#003D6A] text-white px-4 h-[36px] items-center justify-center no-underline'>What is a Toggle Clamp</NavLink>
      <NavLink to='/TypesofToggleAction' className='flex bg-[#003D6A] text-white px-4 h-[36px] items-center justify-center no-underline'>Types of Toggle Action</NavLink>
      <NavLink to='/TestingFacilities' className='flex bg-[#003D6A] text-white px-4 h-[36px] items-center justify-center no-underline'>Testing Facilities</NavLink>
      <NavLink to='/Applications' className='flex bg-[#003D6A] text-white px-4 h-[36px] items-center justify-center no-underline'>Applications</NavLink>
    </div>

    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
          Testing Facilities
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div>
      <div className="">
  
        {/* 1 */}
        <div className="w-full h-auto ">
          <div className="flex ">
            <img src={holdingcapacitytesting}/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TestingFacilities