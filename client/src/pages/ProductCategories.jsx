import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import productimg from '../images/product1-img.jpg';



const ProductCategories = () => {
  return (

<div className='container pt-20 mt-10'>
      <div><Breadcrumb aria-label="Solid background breadcrumb example" className="bg-white py-2 items-center dark:bg-gray-800">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">SteelSmith</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Toggle Clamps</Breadcrumb.Item>
        <Breadcrumb.Item>Vertical Hold Down Action</Breadcrumb.Item>
      </Breadcrumb></div>
      <div>
        
        <div className='w-full h-auto'>

          {/* Right Top Row */}
          <div className='w-full flex justify-between items-end p-4 bg-white'>
            <span className="text-xl font-normal text-gray-800 p-2"><strong>Toggle Clamps</strong></span>
            {/* <span><a href="#" className="inline-block rounded-lg border bg-white px-4  text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a></span> */}
          </div>

          {/* Products List */}
          <div className='bg-white px-8'>
            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 ">
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="/products"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src={productimg}
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1 text-xs uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </a>
                <div className='p-2'>
                  <a href="/products" className="leading-none hover:gray-800 mb-1 text-gray-800 transition duration-100 no-underline ">
                    Vertical Hold Down Action Heavy Duty Flanged Base
                  </a>

                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="/products"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src={productimg}
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </a>
                <div className='p-2'>
                  <a href="/products" className="leading-none hover:gray-800 mb-1 text-gray-800 transition duration-100 no-underline ">
                    Vertical Hold Down Action Heavy Duty Flanged Base
                  </a>

                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="#"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src={productimg}
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1 text-xs uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </a>
                <div className='p-2'>
                  <a href="#" className="leading-none hover:gray-800 mb-1 text-gray-800 transition duration-100 no-underline ">
                    Vertical Hold Down Action Heavy Duty Flanged Base
                  </a>

                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="#"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src={productimg}
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1 text-xs uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </a>
                <div className='p-2'>
                  <a href="#" className="leading-none hover:gray-800 mb-1 text-gray-800 transition duration-100 no-underline ">
                    Vertical Hold Down Action Heavy Duty Flanged Base
                  </a>

                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="#"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src={productimg}
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </a>
                <div className='p-2'>
                  <a href="#" className="leading-none hover:gray-800 mb-1 text-gray-800 transition duration-100 no-underline ">
                    Vertical Hold Down Action Heavy Duty Flanged Base
                  </a>

                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="#"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src={productimg}
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </a>
                <div className='p-2'>
                  <a href="#" className="leading-none hover:gray-800 mb-1 text-gray-800 transition duration-100 no-underline ">
                    Vertical Hold Down Action Heavy Duty Flanged Base
                  </a>

                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="#"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src={productimg}
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </a>
                <div className='p-2'>
                  <a href="#" className="leading-none hover:gray-800 mb-1 text-gray-800 transition duration-100 no-underline ">
                    Vertical Hold Down Action Heavy Duty Flanged Base
                  </a>

                </div>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="#"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src={productimg}
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </a>
                <div className='p-2'>
                  <a href="#" className="leading-none hover:gray-800 mb-1 text-gray-800 transition duration-100 no-underline ">
                    Vertical Hold Down Action Heavy Duty Flanged Base
                  </a>

                </div>
              </div>
              {/* product - end */}
            </div>
          </div>
          <div className='w-full justify-center py-8'>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-center">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductCategories