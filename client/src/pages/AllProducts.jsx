import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Label, RangeSlider } from "flowbite-react";
import groupproduct1 from '../images/group-product-1.jpg';
import groupproduct2 from '../images/group-product-2.jpg';
import groupproduct3 from '../images/group-product-3.jpg';
import groupproduct4 from '../images/group-product-4.jpg';



import brand1 from '../images/brand-1.jpg';
import brand2 from '../images/brand-2.jpg';
import brand3 from '../images/brand-3.jpg';
import brand4 from '../images/brand-4.jpg';


const Products = () => {

    return (

        <div>
            <div className="container space-y-8 pt-20 mb-20">

                {/* Block 1 start */}
                <div className='bg-white-300 border shadow-md p-4  w-full'>
                    <div className=''>
                        <img className="w-[300px]" src={brand1} alt="Logo" />
                    </div>

                    <div className='flex bg-white'>
                        <div className='w-1/3'>
                            <p className="text-sm text-gray-500 p-4">
                                <ul>
                                    <li>Toggle Clamps</li>
                                    <li>Latches</li>
                                    <li>Additional Locking Mechanism</li>
                                    <li>Automotive Clamps</li>
                                    <li>Roto-Moulding Clamps</li>
                                    <li>Leveling Pads</li>
                                </ul>
                                <a href="/products" className="group gap-4">
                                    <div className="justify-center w-full">
                                        See All
                                    </div>
                                </a>
                            </p>
                        </div>
                        <div className='flex items-center w-2/3'><img className="w-auto" src={groupproduct1} /></div>
                    </div>
                </div>
                {/* Block 1 end */}

                {/* Block 1 start */}
                <div className='bg-white-300 border shadow-md p-4  w-full'>
                    <div className=''>
                        <img className="w-[300px]" src={brand2} alt="Logo" />
                    </div>

                    <div className='flex bg-white'>
                        <div className='w-1/3'>
                            <p className="text-sm text-gray-500 p-4">
                                <ul>
                                <li>One Touch Fasteners</li>
                              <li>One Touch Clamps</li>
                              <li>One Touch Sliding Locks</li>
                              <li>OD & ID Holding Clamps</li>
                              <li>Flex Locators</li>
                              <li>Clamps & Stops</li>
                                </ul>
                                <a href="/products" className="group gap-4">
                                    <div className="justify-center w-full">
                                        See All
                                    </div>
                                </a>
                            </p>
                        </div>
                        <div className='flex items-center w-2/3'><img className="w-auto" src={groupproduct2} /></div>
                    </div>
                </div>
                {/* Block 1 end */}

                {/* Block 1 start */}
                <div className='bg-white-300 border shadow-md p-4  w-full'>
                    <div className=''>
                        <img className="w-[300px]" src={brand3} alt="Logo" />
                    </div>

                    <div className='flex bg-white'>
                        <div className='w-1/3'>
                            <p className="text-sm text-gray-500 p-4">
                                <ul>
                                <li>Buffer elements</li>
                              <li>Spring Plungers</li>
                              <li>Material Handling</li>
                              <li>Indexing Plungers</li>
                              <li>Grips and Knobs</li>
                              <li>Quater-Turn Locks</li>
                                </ul>
                                <a href="/products" className="group gap-4">
                                    <div className="justify-center w-full">
                                        See All
                                    </div>
                                </a>
                            </p>
                        </div>
                        <div className='flex items-center w-2/3'><img className="w-auto" src={groupproduct3} /></div>
                    </div>
                </div>
                {/* Block 1 end */}

                 {/* Block 1 start */}
                 <div className='bg-white-300 border shadow-md p-4  w-full'>
                    <div className=''>
                        <img className="w-[300px]" src={brand4} alt="Logo" />
                    </div>

                    <div className='flex bg-white'>
                        <div className='w-1/3'>
                            <p className="text-sm text-gray-500 p-4">
                                <ul>
                                <li>Buffer elements</li>
                              <li>Spring Plungers</li>
                              <li>Material Handling</li>
                              <li>Indexing Plungers</li>
                              <li>Grips and Knobs</li>
                              <li>Quater-Turn Locks</li>
                                </ul>
                                <a href="/products" className="group gap-4">
                                    <div className="justify-center w-full">
                                        See All
                                    </div>
                                </a>
                            </p>
                        </div>
                        <div className='flex items-center w-2/3'><img className="w-auto" src={groupproduct4} /></div>
                    </div>
                </div>
                {/* Block 1 end */}

                
            </div>

        </div>
    )
}

export default Products