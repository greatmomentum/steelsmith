import React from 'react';
import aboutimgcategory from '../images/about-img-category.jpg';
import { NavLink, Link } from 'react-router-dom';


const IntroductionToClamps = () => {
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">

                    <div className="flex flex-wrap md:-m-2 m-1">
                        <div className="flex flex-wrap w-1/2">

                            <div class="flex flex-wrap justify-center w-full  bg-[#003D6A] py-[56px] px-2 mt-[60px] relative m-1">
                                
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-10 absolute inset-0" src={aboutimgcategory} />
                                    <div class="text-center items-center pt-6 z-10 w-full">
                                        <h2 class="text-2xl text-white font-medium title-font mb-2 no-underline">What is a Toggle Clamp?</h2>
                                        <p class="leading-relaxed text-white">Toggle clamp is a simple Mechanism which holds instantly.</p>
                                        <NavLink to="/WhatIsAToggleClamp">
                                        <p class="mt-3 text-white inline-flex items-center hover:underline ">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2 text-white" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </p>
                                        </NavLink>
                                    </div>
                                
                            </div>

                            <div className="w-full flex justify-between ">


                                <div class="bg-[#003D6A] py-[36px] px-2 m-1 relative w-1/2">
                                    {/* <img alt="gallery" class="w-full object-cover h-full object-center block opacity-10 absolute inset-0" src={aboutimgcategory} /> */}
                                    <div class="text-center pt-8 items-center relative z-10 w-full">
                                        <h2 class="text-2xl text-white font-medium title-font">Testing Facilities</h2>
                                        <p class=" text-sm px-4 font-normal leading-relaxed text-white">Clamping Force and Life cycle at state-of-the art testing facilities.</p>
                                        <NavLink to="/TestingFacilities">
                                        <p class="mt-3 text-white inline-flex items-center hover:underline">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2 text-white" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </p>
                                        </NavLink>
                                    </div>
                                </div>

                                <div class="bg-[#003D6A] py-[36px] px-2 m-1 relative w-1/2">
                                    {/* <img alt="gallery" class="w-full object-cover h-full object-center block opacity-10 absolute inset-0" src={aboutimgcategory} /> */}
                                    <div class="text-center pt-8 items-center relative z-10 w-full">
                                        <h2 class="text-2xl text-white font-medium title-font">Applications</h2>
                                        <p class=" text-sm px-4 font-normal leading-relaxed text-white">Clamping Force and Life cycle at state-of-the art testing facilities.</p>
                                        <NavLink to="/Applications">
                                        <p class="mt-3 text-white inline-flex items-center hover:underline">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2 text-white" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </p>
                                        </NavLink>
                                    </div>
                                </div>


                            </div>



                        </div>
                        <div className="flex flex-wrap w-1/2">

                            <div class="m-1 py-[165px] relative w-full">
                                <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src={aboutimgcategory} />
                            </div>



                            <div className="md:p-2 p-1 w-full">
                                <div class="flex flex-wrap w-full items-center bg-[#003D6A] py-[30px]  pt-[40px] relative ">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-10 absolute inset-0" src={aboutimgcategory} />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-2xl text-white font-medium title-font mb-2">Types of Toggle Action</h2>
                                        <p class="leading-relaxed text-sm px-24 font-normal text-white">This catalogue contains about 300 different standard toggle clamps & clamping systems.</p>
                                        <NavLink to="/TypesOfToggleAction">
                                        <p class="mt-3 text-white inline-flex items-center hover:underline">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2 text-white" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default IntroductionToClamps