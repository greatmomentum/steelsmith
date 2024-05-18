import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import EcommerceGallery from '../components/EcommerceGallery';
import Table from '../components/Table'; // Import the Table component
import { Label, TextInput } from "flowbite-react";


const ProductSingle = () => {

  const images = [
    '../src/images/pro-img1.jpg',
    '../src/images/pro-img2.jpg',
    '../src/images/pro-img1.jpg',
    '../src/images/pro-img2.jpg',
    // Add more image URLs as needed
  ];

  return (

    <div className='container'>
      <div className='mt-20'>
        <Breadcrumb aria-label="breadcrumb" className="bg-white py-2 items-center dark:bg-gray-800 pl-0">
          <Breadcrumb.Item href="#" icon={HiHome}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item href="#">SteelSmith</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Toggle Clamps</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Vertical Hold Down Action</Breadcrumb.Item>
          <Breadcrumb.Item>  Vertical Hold Down Action T – Handle Flanged Base</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="text-xl font-bold text-gray-800 p-2"> VTC-201-TU</div>
        {/* <span><a href="#" className="inline-block rounded-lg border bg-white px-4  text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a></span> */}
        <div className=' mb-6 p-2'>Discover top-tier steel products from Steel-Smith alongside the esteemed offerings of Kipp, IMAO & Turnlock.
          As an official distributor, we bring you a curated selection of high-quality products & solutions, ensuring excellence and reliability in every project.</div>
      </div>

      <div className='flex p-2 '>
        <div className='w-1/2 p-1'>
          <div className='w-full p-2 border shadow-md'>
            <EcommerceGallery images={images} />
          </div>

        </div>
        <div className='w-1/2  p-6 '>
          <span className="text-xl font-bold text-gray-800p-2"> <a href='/productsingle' className=' no-underline text-[#003d6a]'>VTC-201-TU</a></span>
          {/* section 1 */}
          <div className='pt-3'>
            <span className='font-medium'>Vertical Hold Down Action T – Handle Flanged Base</span>

            {/* button container */}
            <div className='mt-6'>
              <span className='text-base font-bold'>Downloads</span>
              {/* Buttons Start*/}
              <div className='flex my-2 space-x-1'>
                <div className='items-center'>
                  <button>
                    <div className='px-3 py-1 bg-[#003D6A] text-white'>
                      <span className='text-sm'>IGS</span>
                    </div>
                  </button>
                </div>
                <div>
                  <button>
                    <div className='px-3 py-1  bg-[#003D6A] text-white'>
                      <span className='text-sm'>STEP</span>
                    </div>
                  </button>
                </div>
                <div>
                  <button>
                    <div className='px-3 py-1 bg-[#003D6A] text-white'>
                      <span className='text-sm'>CAD</span>
                    </div>
                  </button>
                </div>
                <div>
                  <button>
                    <div className='px-3 py-1 bg-[#003D6A] text-white'>
                      <span className='text-sm'>PDF</span>
                    </div>
                  </button>
                </div>
                <div>
                  <button>
                    <div className='px-3 py-1 bg-[#003D6A] text-white'>
                      <span className='text-sm'>3D PDF</span>
                    </div>
                  </button>
                </div>
                <div>
                  <button>
                    <div className='px-3 py-1 bg-[#003D6A] text-white'>
                      <span className='text-sm'>Technical Data</span>
                    </div>
                  </button>
                </div>
              </div>
              {/* Buttons End */}
            </div>
            {/* Button Container Ends */}

            {/* Enquire */}
            <div className='mt-8 w-full '>
              <span className='text-base font-bold'>Enquire</span>
              <p className='text-sm font-normal pt-2'>Enter quantity to enquire the price and availability</p>
              <div className='flex items-center'>
                <div className='w-[80px]'>
                <input name="first-name" type='number' class="w-full  border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div className='w-3/4 ml-2'>

                  <button>
                    <div className='flex p-2 bg-[#003D6A] text-white items-center'>
                      <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>

                      </span>
                      <span className='text-sm pr-2'>ADD TO CART</span>
                    </div>
                  </button>

                </div>
              </div>
            </div>

            {/* Application */}

            <div className='mt-8 w-full '>
              <span className='text-base font-bold'>Application</span>
              <p className='text-sm font-normal leading-relaxed pt-2'>Welding Fixtures, Assembly Fixtures, Checking Fixtures, Wood-Working, Closures, Food Processing, Pharmaceutical Machines, PCB Assembly.</p>

            </div>

          </div>
        </div>
      </div>

      <div className='flex pt-10 mb-10'>
        <div className='w-1/2 p-1'>

          {/* -------------------------------- */}
          <div>
            <span className='text-lg font-bold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg> <p className='px-2'>Video Preview</p></span>

          </div>

          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hU0sNEq9K-c?si=u8QYRJNcuHgIzhGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>


          {/* -------------------------------- */}
        </div>
        <div className='w-1/2 p-1 '>

          <div className='p-8 w-full'>

            <span className='text-base font-bold'>Product Attributes</span>
            <div className='w-full flex py-2 border-b-[1px] p-2 mt-2 border-gray-300'>
              <span className=' w-1/3 text-sm' >Model No. :</span>
              <span className=' w-2/3 text-sm'>VTC-6561-A</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 bg-gray-100 border-gray-300'>
              <span className=' w-1/3 text-sm ' >Type :</span>
              <span className=' w-2/3 text-sm '>VTC - Series Heavy Duty Clamp- Angle Base</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 border-gray-300'>
              <span className=' w-1/3 text-sm ' >Handle Type :</span>
              <span className=' w-2/3 text-sm '>Vertical</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 bg-gray-100 border-gray-300'>
              <span className=' w-1/3 text-sm' >Clamping Bar Style :</span>
              <span className=' w-2/3 text-sm'>Solid Arm</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 border-gray-300'>
              <span className=' w-1/3 text-sm' >Base Type :</span>
              <span className=' w-2/3 text-sm '>
Flanged Base</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 mt-2 border-gray-300'>
              <span className=' w-1/3 text-sm' >Model No. :</span>
              <span className=' w-2/3 text-sm'>VTC-6561-A</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 bg-gray-100 border-gray-300'>
              <span className=' w-1/3 text-sm' >Type :</span>
              <span className=' w-2/3 text-sm'>VTC - Series Heavy Duty Clamp- Angle Base</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 border-gray-300'>
              <span className=' w-1/3 text-sm' >Handle Type :</span>
              <span className=' w-2/3 text-sm'>Vertical</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 bg-gray-100 border-gray-300'>
              <span className=' w-1/3 text-sm' >Clamping Bar Style :</span>
              <span className=' w-2/3 text-sm'>Solid Arm</span>
            </div>
            <div className='w-full flex py-2 border-b-[1px] p-2 border-gray-300'>
              <span className=' w-1/3 text-sm' >Base Type :</span>
              <span className=' w-2/3 text-sm'>
Flanged Base</span>
            </div>



          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductSingle