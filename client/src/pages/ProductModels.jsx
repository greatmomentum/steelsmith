import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import EcommerceGallery from '../components/EcommerceGallery';
import Table from '../components/Table'; // Import the Table component



const ProductModels = () => {


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
          <Breadcrumb.Item>Vertical Hold Down Action</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="text-xl font-bold text-gray-800 p-2"> Vertical Hold Down Action T – Handle Flanged Base</div>
        {/* <span><a href="#" className="inline-block rounded-lg border bg-white px-4  text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a></span> */}
        <div className=' mb-6 p-2'>Discover top-tier steel products from Steel-Smith alongside the esteemed offerings of Kipp, IMAO & Turnlock.
          As an official distributor, we bring you a curated selection of high-quality products & solutions, ensuring excellence and reliability in every project.</div>
      </div>

      <div className='flex p-2 '>
        <div className='w-1/2 p-1'>
          <div className='w-full p-2 border shadow-md'>
            <EcommerceGallery images={images} />
          </div>
          {/* button */}
          <div>
            <button>
              <div className='flex p-3 mt-2 bg-[#003D6A] text-white rounded-md'>
                <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                </span>
                <span>Watch Video</span>
              </div>
            </button>
          </div>
          {/* button end */}
        </div>
        <div className='w-1/2  p-6 '>
          <span className="text-xl font-bold text-gray-800p-2"> <a href='/productsingle' className=' no-underline text-[#003d6a]'>Vertical Hold Down Action T – Handle Flanged Base</a></span>
          {/* section 1 */}
          <div className='pt-3'>
            <p className='p-2'>
              <span className='font-medium'>Material:</span>
              <ul>
                <li>Clamp stainless steel</li>
                <li>Grip polyamide</li>
                <li>Force sensor stainless steel</li>
                <li>Electronics housing stainless steel</li>
                <li>Spacer sleeve stainless steel</li>
                <li>Grub screw stainless steel</li>
                <li>Protective cap thermoplastic</li>
              </ul>
              <span className='font-medium'>Version:</span>
              <ul>
                <li>Stainless steel parts bright</li>
                <li>Protective cap black</li>
              </ul>
              <span className='font-medium'>Note:</span>
              <ul>
                <li>incl. 1 set clamping elements K1464</li>
                <li>Technical data:</li>
                <li>Force sensor:</li>
                <li>Nom. force Fnom: clamping force F4</li>
                <li>Calibration range: 0 - clamping force F4</li>
              </ul>
              <span className='font-medium'>Accessory:</span>
              <ul>
                <li>K1464</li>
              </ul>
              <span className='font-medium'>Drawing reference:</span>
              <ul>
                <li>1 - Clamping element K1464</li>
              </ul>
            </p>
          </div>
          {/* <div>
            <p className='p-2'>
              Test
            </p>
          </div> */}
        </div>
      </div>

      <div className='space-y-10 mb-20'>

        {/* GROUP 1 start */}
        <div className='border-4 border-slate-300 '>
          <div className='mx-auto justify-center'><span className='bg-slate-300 text-white p-2'>Product Group 1</span></div>

          {/* 3 Buttons  */}
          <div className='flex justify-center border-b-2 my-2 space-x-1'>
            <div className='items-center'>
              <button>
                <div className='flex p-3 mt-2 bg-[#003D6A] text-white'>
                  <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                  </svg>

                  </span>
                  <span>Data Sheet</span>
                </div>
              </button>
            </div>
            <div>
              <button>
                <div className='flex p-3 mt-2 bg-[#003D6A] text-white'>
                  <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>

                  </span>
                  <span>Technical Information</span>
                </div>
              </button>
            </div>
            <div>
              <button>
                <div className='flex p-3 mt-2 bg-[#003D6A] text-white'>
                  <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                  </span>
                  <span>Accessories</span>
                </div>
              </button>
            </div>
          </div>
          {/* 3 Buttons end here */}

          {/* CAD image starts*/}
          <div className="flex justify-center items-center">
            <div className=' bg-blue-200 w-3/4'>
              <img className=' h-auto' src='../src/images/cadd-draw.jpg'></img>
            </div>
          </div>
          {/* CAD image ends */}

          {/* table starts here */}
          <div className='bg-slate-100 p-4 w-full'>
            <Table /> {/* Render the Table component */}
          </div>
          {/* table ends here */}

        </div>
        {/* GROUP 1 ENDS */}

        {/* ----------------------------------------------------- */}

        {/* GROUP 2 start */}
        <div className='border-4 border-slate-300'>
          <div className='mx-auto justify-center'><span className='bg-slate-300 text-white p-2'>Product Group 2</span></div>

          {/* 3 Buttons  */}
          <div className='flex justify-center border-b-2 my-2 space-x-1'>
            <div className='items-center'>
              <button>
                <div className='flex p-3 mt-2 bg-[#003D6A] text-white'>
                  <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                  </svg>

                  </span>
                  <span>Data Sheet</span>
                </div>
              </button>
            </div>
            <div>
              <button>
                <div className='flex p-3 mt-2 bg-[#003D6A] text-white'>
                  <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>

                  </span>
                  <span>Technical Information</span>
                </div>
              </button>
            </div>
            <div>
              <button>
                <div className='flex p-3 mt-2 bg-[#003D6A] text-white'>
                  <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                  </span>
                  <span>Accessories</span>
                </div>
              </button>
            </div>
          </div>
          {/* 3 Buttons end here */}

          {/* CAD image starts*/}
          <div className="flex justify-center items-center">
            <div className=' bg-blue-200 w-3/4'>
              <img className=' h-auto' src='../src/images/cadd-draw.jpg'></img>
            </div>
          </div>
          {/* CAD image ends */}

          {/* table starts here */}
          <div className='bg-slate-100 p-4 w-full'>
            <Table /> {/* Render the Table component */}
          </div>
          {/* table ends here */}

          {/* table starts here */}
          <div className='bg-slate-100 p-4 w-full'>
            <Table /> {/* Render the Table component */}
          </div>
          {/* table ends here */}

        </div>
        {/* GROUP 2 ENDS */}

        {/* ----------------------------------------------------- */}

      </div>




    </div>

  );
};


export default ProductModels;