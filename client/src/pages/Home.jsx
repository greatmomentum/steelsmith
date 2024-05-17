import React from 'react'
import '../dropdown.css';
import { Carousel } from "flowbite-react";


const Home = () => {
  return (

    <div className=''>

      {/* #1 Hero Section Banner */}
      <div className="bg-white border-b-[1px] border-gray-100">
        <div className="w-[1300px] mt-[60px] h-[400px] mx-auto items-center">
          <Carousel>
            {/* Slider1 */}
            <div className="flex items-center justify-center">
              <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 pl-6 ">
                  <h1 className="sm:text-4xl text-left text-3xl mb-4 font-bold text-gray-900">
                    Steel-Smith
                    <br className="lg:inline-block " />
                    Toggle Clamps
                  </h1>
                  <p className="mb-8 text-left leading-relaxed">
                    Browse through our selection today and experience the
                    difference that quality toggle clamps can make in your
                    workshop.
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-[#003D6A] border-0 py-1 px-6 focus:outline-none hover:bg-slate-800  text-base">
                      More Information
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200  text-base">
                      Video
                    </button>{" "}
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center "
                    alt="hero"
                    src="./src/images/products-img.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="flex h-full items-center justify-center">
              <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 pl-6 ">
                  <h1 className="sm:text-4xl text-left text-3xl mb-4 font-bold text-gray-900">
                    Steel-Smith
                    <br className="lg:inline-block " />
                    Toggle Clamps
                  </h1>
                  <p className="mb-8 text-left leading-relaxed">
                    Browse through our selection today and experience the
                    difference that quality toggle clamps can make in your
                    workshop.
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-[#003D6A] border-0 py-1 px-6 focus:outline-none hover:bg-slate-800  text-base">
                      More Information
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200  text-base">
                      Video
                    </button>{" "}
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center "
                    alt="hero"
                    src="./src/images/products-img.jpg"
                  />
                </div>
              </div>
            </div>

            {/* slider 3 */}
            <div className="flex h-full items-center justify-center ">
              <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 pl-6 ">
                  <h1 className="sm:text-4xl text-left text-3xl mb-4 font-bold text-gray-900">
                    Steel-Smith
                    <br className="lg:inline-block " />
                    Toggle Clamps
                  </h1>
                  <p className="mb-8 text-left leading-relaxed">
                    Browse through our selection today and experience the
                    difference that quality toggle clamps can make in your
                    workshop.
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-[#003D6A] border-0 py-1 px-6 focus:outline-none hover:bg-slate-800  text-base">
                      More Information
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200  text-base">
                      Video
                    </button>{" "}
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center "
                    alt="hero"
                    src="./src/images/products-img.jpg"
                  />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* #3. Intro About Steel Smith  */}
      <section className="text-gray-900 ">
        <div className="container-fluid px-4 py-5 text-center">
          <div className="lc-block">
            <div editable="rich">
              <p className="text-2xl py-3 fw-bold">Welcome to Steel-Smith</p>
            </div>
          </div>
          <div className="lc-block col-lg-6 mx-auto mb-4 ">
            <div editable="rich">
              <p className=" text-lg ">
                Steel-Smith pioneered the development of Toggle Clamps in India
                over 50 years ago and still manufactures the country’s widest and
                most recognized line of these useful and adaptable tools.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* #4. New Brands  */}
      <section className=" text-gray-600 body-font bg-slate-100 h-auto ">
        <div className="py-12  w-[1300px] mx-auto">
          <div className="flex flex-wrap w-full my-10 px-5">
            <div className="lg:w-1/3 w-full my-4 lg:mb-0">
              <p className="text-2xl font-bold title-font mb-2 text-slate-800">
                Our Brands
              </p>
              <div className="h-0.5 w-14 bg-[#003D6A] " />
            </div>
            <p className="lg:w-2/3 w-full leading-relaxed text-[#003D6A]">
              SteelSmith is renowned for its toggle clamps. Through its four main
              brands—Steelsmith, Imao, Kipp, and TurnLock— it offers a diverse
              range of engineering products, including one-touch fasteners and
              spring plungers, meeting varied industrial needs with precision and
              reliability.
            </p>
          </div>


          <div className='grid grid-cols-2 gap-3 p-4 w-[1100px] mx-auto'>

            {/* col1 */}
            <div className='flex flex-grow items-center border-[1px]  border-gray-100 transition duration-250 ease-out hover:ease-in  hover:scale-[1.02] hover:shadow-xl bg-white'>
              <div className='w-[197px] p-3'>
                <img src='../src/images/img1v-steelsmith.jpg' />
              </div>
              <div className='flex-auto  w-1/2 h-full'>
                <div className='h-full grid grid-row-3 '>
                  <div className='h-10% flex items-center '>
                    {/* logo */}
                    <div>
                      <span><img className="w-[220px]" src="./src/images/brand-1.jpg" alt="content" /></span>
                    </div>
                  </div>
                  <div className='items-stretch space-y-1 px-4'>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                  </div>
                  <div className='h-10% flex items-center '>
                    <div className="w-full items-center justify-between inline-flex px-4">
                      <a className="text-gray-800 text-sm items-center md:mb-2 lg:mb-0">
                        View Products</a>
                      <svg
                        className=" text-gray-800 w-4 h-4 ml-2 "
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* col2 */}
            <div className='flex flex-grow items-center border-[1px]  border-gray-100 transition duration-250 ease-out hover:ease-in  hover:scale-[1.02] hover:shadow-xl bg-white'>
              <div className='w-[197px] p-3'>
                <img src='../src/images/img2v-imao.jpg' />
              </div>
              <div className='flex-auto  w-1/2 h-full'>
                <div className='h-full grid grid-row-3 '>
                  <div className='h-10% flex items-center '>
                    {/* logo */}
                    <div>
                      <span><img className="w-[220px]" src="./src/images/brand-2.jpg" alt="content" /></span>
                    </div>
                  </div>
                  <div className='items-stretch space-y-1 px-4'>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                  </div>
                  <div className='h-10% flex items-center '>
                    <div className="w-full items-center justify-between inline-flex px-4">
                      <a className="text-gray-800 text-sm items-center md:mb-2 lg:mb-0">
                        View Products</a>
                      <svg
                        className=" text-gray-800 w-4 h-4 ml-2 "
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* col 2 ends */}

            {/* col 3 starts */}

            <div className='flex flex-grow items-center border-[1px]  border-gray-100 transition duration-250 ease-out hover:ease-in  hover:scale-[1.02] hover:shadow-xl bg-white'>
              <div className='w-[197px] p-3'>
                <img src='../src/images/img3v-kipp.jpg' />
              </div>
              <div className='flex-auto  w-1/2 h-full'>
                <div className='h-full grid grid-row-3 '>
                  <div className='h-10% flex items-center '>
                    {/* logo */}
                    <div>
                      <span><img className="w-[220px]" src="./src/images/brand-3.jpg" alt="content" /></span>
                    </div>
                  </div>
                  <div className='items-stretch space-y-1 px-4'>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                  </div>
                  <div className='h-10% flex items-center '>
                    <div className="w-full items-center justify-between inline-flex px-4">
                      <a className="text-gray-800 text-sm items-center md:mb-2 lg:mb-0">
                        View Products</a>
                      <svg
                        className=" text-gray-800 w-4 h-4 ml-2 "
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* col 3 ends */}

            {/* col 4 starts */}

            <div className='flex flex-grow items-center border-[1px]  border-gray-100 transition duration-250 ease-out hover:ease-in  hover:scale-[1.02] hover:shadow-xl bg-white'>
              <div className='w-[197px] p-3'>
                <img src='../src/images/img4v-turnlock.jpg' />
              </div>
              <div className='flex-auto  w-1/2 h-full'>
                <div className='h-full grid grid-row-3 '>
                  <div className='h-10% flex items-center '>
                    {/* logo */}
                    <div>
                      <span><img className="w-[220px]" src="./src/images/brand-4.jpg" alt="content" /></span>
                    </div>
                  </div>
                  <div className='items-stretch space-y-1 px-4'>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                    {/* 1 */}
                    <div className=" flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="mt-1 text-gray-800 w-3 h-3  mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-gray-800">Toggle Clamps</span>
                    </div>
                  </div>
                  <div className='h-10% flex items-center '>
                    <div className="w-full items-center justify-between inline-flex px-4">
                      <a className="text-gray-800 text-sm items-center md:mb-2 lg:mb-0">
                        View Products</a>
                      <svg
                        className=" text-gray-800 w-4 h-4 ml-2 "
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* col 4 ends */}



          </div>

          {/* Our Brands End*/}


        </div>
      </section>
      {/* #4 Products */}
      <section className="text-slate-800 body-font pb-12">
        <div className="text-center mb-6">
          <p className="text-center text-2xl pt-12 m-2 fw-bold">Featured Products</p>
          <span className="text-center">
            Take a look at our latest additions to Steel-Smith
          </span>
        </div>
        <div className=" px-5 py-4 w-[1300px] mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-2 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 -lg overflow-hidden hover:bg-white transition delay-100 ease-in-out hover:shadow-xl">
                <img
                  className="lg:h-48 w-auto mx-auto"
                  src="./src/images/thumb-product1.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Steel-Smith
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    VTC-207-UM
                  </h1>
                  <p className="text-sm leading-relaxed mb-3">
                    Vertical Hold Down Toggle Clamps
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 -lg overflow-hidden hover:bg-white transition delay-100 ease-in-out hover:shadow-xl">
                <img
                  className="lg:h-48 w-auto mx-auto"
                  src="./src/images/thumb-product2.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Steel-Smith
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    H-215-U-TRIG
                  </h1>
                  <p className="text-sm leading-relaxed mb-3">
                    Horizontal Hold Down  Toggle Clamps
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 -lg overflow-hidden hover:bg-white transition delay-100 ease-in-out hover:shadow-xl">
                <img
                  className="lg:h-48 w-auto mx-auto"
                  src="./src/images/thumb-product3.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Steel-Smith
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    HTC-2030-PS
                  </h1>
                  <p className="text-sm leading-relaxed mb-3">
                    Straight Line Action Toggle Clamps
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 -lg overflow-hidden hover:bg-white transition delay-100 ease-in-out hover:shadow-xl">
                <img
                  className="lg:h-48 w-auto mx-auto"
                  src="./src/images/thumb-product4.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Steel-Smith
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    PAH-15-500
                  </h1>
                  <p className="text-sm leading-relaxed mb-3">
                    Pull Action Clamps Toggle Clamps
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #6. Figures  */}
      <section className="text-gray-600 body-font bg-slate-100">
        <div className="container px-5 py-24  w-[1300px] mx-auto">

          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-1">
              <div className="border border-gray-200 hover:bg-white transition delay-100 ease-in-out hover:shadow-xl p-6 -lg ">
                <div className="w-24 h-24 items-center -full  text-indigo-500 mb-4 ">
                  <img
                    src="./src/images/icon1.png"
                    width="450px"
                    height="450px"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Catalogues
                  </h2>
                  <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 ">
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                {/* <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-1">
              <div className="border border-gray-200 hover:bg-white transition ease-in-out hover:shadow-xl p-6 -lg">
                <div className="w-24 h-24 inline-flex items-center justify-center -full  text-indigo-500 mb-4">
                  <img
                    src="./src/images/icon3.png"
                    width="450px"
                    height="450px"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    CAD Downloads
                  </h2>
                  <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 ">
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-1">
              <div className="border border-gray-200 hover:bg-white transition ease-in-out hover:shadow-xl p-6 -lg">
                <div className="w-24 h-24 inline-flex items-center justify-center -full  text-indigo-500 mb-4">
                  <img
                    src="./src/images/icon4.png"
                    width="450px"
                    height="450px"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Markets
                  </h2>
                  <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 ">
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-1">
              <div className="border border-gray-200 hover:bg-white transition ease-in-out hover:shadow-xl p-6 -lg">
                <div className="w-24 h-24 inline-flex items-center justify-center -full  text-indigo-500 mb-4">
                  <img
                    src="./src/images/icon5.png"
                    width="450px"
                    height="450px"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Certification
                  </h2>
                  <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 ">
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-1">
              <div className="border border-gray-200 hover:bg-white transition ease-in-out hover:shadow-xl  p-6 -lg">
                <div className="w-24 h-24 inline-flex items-center justify-center -full  text-indigo-500 mb-4">
                  <img
                    src="./src/images/icon2.png"
                    width="450px"
                    height="450px"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Videos
                  </h2>
                  <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 ">
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-1">
              <div className="border border-gray-200 hover:bg-white transition ease-in-out hover:shadow-xl p-6 -lg">
                <div className="w-24 h-24 inline-flex items-center justify-center -full  text-indigo-500 mb-4">
                  <img
                    src="./src/images/icon6.png"
                    width="450px"
                    height="450px"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Introduction to Clamps
                  </h2>
                  <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 ">
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-1">
              <div className="border border-gray-200 hover:bg-white transition ease-in-out hover:shadow-xl p-6 -lg">
                <div className="w-24 h-24 inline-flex items-center justify-center -full  text-indigo-500 mb-4">
                  <img
                    src="./src/images/icon7.png"
                    width="450px"
                    height="450px"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Testing Facilities
                  </h2>
                  <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 ">
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-1">
              <div className="border border-gray-200 hover:bg-white transition ease-in-out hover:shadow-xl p-6">
                <div className="w-24 h-24 inline-flex items-center justify-center -full  text-indigo-500 mb-4">
                  <img
                    src="./src/images/icon8.png"
                    width="450px"
                    height="450px"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Applications
                  </h2>
                  <a className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0 ">
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      {/* #4. Experts */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 w-[1300px] mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap ">
              <div className="p-2 w-1/3 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <div className=" flex pl-24">
                  {/* <svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="#000000" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M325.36 993.322a7.94 7.94 0 0 1-5.952-2.656 7.996 7.996 0 0 1 0.61-11.294l1.702-1.61c9.24-9.09 14.318-21.228 14.318-34.18 0-26.462-21.528-47.99-47.99-47.99s-47.99 21.528-47.99 47.99a47.82 47.82 0 0 0 12.216 31.994c0.688 0.78 1.406 1.53 2.148 2.248a8 8 0 0 1 0.046 11.31 7.994 7.994 0 0 1-11.31 0.062c-0.96-0.968-1.898-1.936-2.804-2.952a63.806 63.806 0 0 1-16.292-42.664c0-35.29 28.706-63.986 63.986-63.986s63.986 28.698 63.986 63.986c0 17.262-6.772 33.446-19.074 45.568l-2.256 2.124a7.954 7.954 0 0 1-5.344 2.05z" fill="" /><path d="M304.042 967.578a7.972 7.972 0 0 1-5.654-2.344l-31.994-31.994a7.996 7.996 0 1 1 11.31-11.31l31.994 31.994a7.996 7.996 0 0 1-5.656 13.654z" fill="" /><path d="M280.174 991.448a7.996 7.996 0 0 1-5.656-13.654l23.872-23.87a7.996 7.996 0 1 1 11.31 11.31l-23.87 23.87a7.98 7.98 0 0 1-5.656 2.344zM272.05 935.584a7.96 7.96 0 0 1-5.476-2.172 8 8 0 0 1-0.352-11.31l61.988-65.984a8.002 8.002 0 0 1 11.654 10.964l-61.988 65.986a7.964 7.964 0 0 1-5.826 2.516z" fill="" /><path d="M999.898 1023.442H24.102a7.994 7.994 0 0 1-7.998-8v-111.976c0-68.656 35.562-94.964 101.182-119.474 69.096-25.806 124.038-49.678 158.88-69.002 3.876-2.11 8.732-0.75 10.874 3.124a7.996 7.996 0 0 1-3.11 10.874c-35.532 19.7-91.214 43.912-161.052 70.002-61.502 22.962-90.778 44.458-90.778 104.476v103.978h959.8v-103.978c0-60.018-29.276-81.514-90.778-104.476-71.016-26.574-125.208-50.13-161.06-70.002a8.006 8.006 0 0 1-3.124-10.874c2.14-3.876 7.014-5.234 10.874-3.124 35.164 19.496 88.638 42.71 158.92 69.002 65.612 24.51 101.166 50.818 101.166 119.474v111.976a7.996 7.996 0 0 1-8 8z" fill="" /><path d="M512 735.5c-111.078 0-287.94-157.404-287.94-343.928 0-4.422 3.576-8 7.998-8a7.994 7.994 0 0 1 7.998 8c0 177.854 167.036 327.932 271.944 327.932 104.916 0 271.944-150.078 271.944-327.932 0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.996 8c0 186.524-176.87 343.928-287.94 343.928zM512.476 799.488c-4.414 0-8.076-3.578-8.076-8 0-4.42 3.5-7.998 7.92-7.998h0.156a7.994 7.994 0 0 1 7.998 7.998c0 4.422-3.576 8-7.998 8zM512.476 863.472c-4.414 0-8.076-3.576-8.076-7.996 0-4.422 3.5-8 7.92-8h0.156a7.994 7.994 0 0 1 7.998 8 7.992 7.992 0 0 1-7.998 7.996zM512.476 927.46c-4.414 0-8.076-3.578-8.076-7.998 0-4.422 3.5-7.998 7.92-7.998h0.156a7.992 7.992 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM512.476 991.448c-4.414 0-8.076-3.576-8.076-7.998s3.5-7.998 7.92-7.998h0.156c4.422 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.998 7.998z" fill="" /><path d="M711.958 703.508a7.994 7.994 0 0 1-7.998-8v-31.992c0-4.422 3.576-7.998 7.998-7.998s7.998 3.576 7.998 7.998v31.992a7.992 7.992 0 0 1-7.998 8z" fill="" /><path d="M631.974 815.484a7.996 7.996 0 0 1-4.654-1.484 8.002 8.002 0 0 1-1.844-11.17l79.982-111.976a8.046 8.046 0 0 1 11.156-1.86 8.002 8.002 0 0 1 1.842 11.17l-79.982 111.976a7.986 7.986 0 0 1-6.5 3.344z" fill="" /><path d="M631.974 815.484a7.86 7.86 0 0 1-3.576-0.844l-95.98-47.99a8.002 8.002 0 0 1-3.578-10.732 8.002 8.002 0 0 1 10.732-3.578l95.98 47.99a8 8 0 1 1-3.578 15.154zM312.042 703.508a7.994 7.994 0 0 1-7.998-8v-31.992a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.576 8 7.998v31.992a7.998 7.998 0 0 1-8 8z" fill="" /><path d="M392.034 815.484a7.968 7.968 0 0 1-6.514-3.344l-79.984-111.976a8.01 8.01 0 0 1 1.86-11.17 8.02 8.02 0 0 1 11.154 1.86l79.982 111.976a8.012 8.012 0 0 1-1.858 11.17c-1.408 1-3.032 1.484-4.64 1.484z" fill="" /><path d="M392.034 815.484a8 8 0 0 1-3.586-15.154l95.98-47.99c3.954-1.984 8.74-0.36 10.732 3.578a8 8 0 0 1-3.578 10.732l-95.98 47.99a7.9 7.9 0 0 1-3.568 0.844zM232.058 367.576a8.012 8.012 0 0 1-7.966-7.248c-9.888-105.62 13.028-189.836 68.118-250.324C374.584 19.54 510.446 0.558 609.918 0.558c56.238 0 95.356 6.14 97.01 6.39a8.02 8.02 0 0 1 6.688 6.984 8.004 8.004 0 0 1-4.906 8.31c-57.208 23.542-47.928 80.482-43.146 99.042a143.8 143.8 0 0 1 5.56-0.108c22.73 0 65.596 5.53 97.34 42.616 34.852 40.694 45.412 106.994 31.382 197.022a7.988 7.988 0 0 1-6.342 6.608 7.964 7.964 0 0 1-8.388-3.67L718.364 254.6c-25.306 9.794-120.068 44.038-208.644 44.038-88.302 0-181.916-34.056-207.292-43.96l-63.456 108.932a8.026 8.026 0 0 1-6.914 3.966z m489.602-130.894c2.702 0 5.326 1.39 6.826 3.828l58.55 95.73c8.452-73.876-1.86-128.334-30.712-162.044-27.588-32.212-65.22-37.024-85.202-37.024-6.202 0-10.06 0.484-10.31 0.514-3.67 0.532-7.404-1.702-8.654-5.296-0.282-0.812-24.588-73.266 28.166-112.508-16.824-1.624-41.444-3.328-70.406-3.328-96.246 0-227.438 18.074-305.882 104.212-47.428 52.084-69.508 123.396-65.776 212.268l53.818-92.386a8.01 8.01 0 0 1 9.998-3.344c1.084 0.454 109.766 45.334 207.644 45.334 97.916 0 207.784-44.896 208.894-45.35a8.062 8.062 0 0 1 3.046-0.606z" fill="" /><path d="M615.978 1007.444a7.992 7.992 0 0 1-7.998-7.998v-95.98a7.994 7.994 0 0 1 7.998-7.998h79.984a7.994 7.994 0 0 1 7.998 7.998c0 4.422-3.578 8-7.998 8h-71.986v87.98a7.992 7.992 0 0 1-7.998 7.998z" fill="" /><path d="M839.932 1007.444a7.994 7.994 0 0 1-7.998-7.998v-87.98h-71.984a7.994 7.994 0 0 1-7.998-8 7.994 7.994 0 0 1 7.998-7.998h79.982c4.422 0 8 3.578 8 7.998v95.98a7.994 7.994 0 0 1-8 7.998z" fill="" /><path d="M743.952 911.464H711.96a7.994 7.994 0 0 1-7.998-8v-31.992c0-4.422 3.576-8 7.998-8h31.992c4.422 0 8 3.578 8 8v31.992c0 4.422-3.578 8-8 8z m-23.994-15.998h15.998v-15.996h-15.998v15.996z" fill="" /><path d="M711.958 919.462a7.994 7.994 0 0 1-7.998-7.998v-8c0-4.42 3.576-7.998 7.998-7.998s7.998 3.578 7.998 7.998v8a7.992 7.992 0 0 1-7.998 7.998z" fill="" /><path d="M743.952 919.462a7.992 7.992 0 0 1-7.996-7.998v-8a7.992 7.992 0 0 1 7.996-7.998c4.422 0 8 3.578 8 7.998v8a7.994 7.994 0 0 1-8 7.998z" fill="" /><path d="M791.944 959.454h-127.974a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h127.974a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.998z" fill="" /><path d="M759.95 991.448h-63.986c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h63.986c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998z" fill="" /></svg> */}
                </div>
                <span className=" text-2xl py-3 fw-bold text-slate-800">
                  Speak to our Experts
                </span>
              </div>
              <div className="w-2/3">
                <p className="font-bold text-slate-800 title-font text-xl mb-2">
                  Need more guidance?
                </p>
                <p className="leading-relaxed">
                  Connect with our expert team at Steel-Smith for guided
                  assistance and answers to all your queries on our dedicated
                  helpdesk.
                </p>
                <a className="text-[#003D6A] inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <div className="border-t border-gray-200 bg-white w-full">
        <div className=" px-5 py-1 flex items-center">

          <div className="inline-flex mx-auto items-center">
            <span className="text-2xl pb-6 mt-4 fw-bold text-[#003D6A]"><img src="./src/images/envelope.jpg" width="70px" height="70px" /></span>
            <span className="text-[20px] pb-6 mt-4 pr-5 font-semibold text-[#003D6A]">Subscribe to our Newsletter</span>
            <span className="w-[300px] text-2xl pr-2 font-semibold text-[#003D6A]"><input type="text" id="footer-field" placeholder="Subscribe to Newsletter" name="footer-field" className=" w-full bg-gray-100 bg-opacity-50  border border-gray-300 focus:ring-2 py-1 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-sm font-medium outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" /></span>
            <span><button className="inline-flex text-white bg-[#003D6A] border-0  py-2 px-6 focus:outline-none hover:bg-gray-700 ">Subscribe</button></span>
          </div>



        </div>
      </div>
    </div>

  )
}

export default Home