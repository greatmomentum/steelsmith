import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Label, RangeSlider } from "flowbite-react";

const Products = () => {

  return (

    <div className='container pt-20 '>
      <div><Breadcrumb aria-label="Solid background breadcrumb example" className="bg-white py-2 items-center dark:bg-gray-800">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">SteelSmith</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Toggle Clamps</Breadcrumb.Item>
        <Breadcrumb.Item>Vertical Hold Down Action</Breadcrumb.Item>
      </Breadcrumb></div>
      <div className='flex '>
        <div className='w-1/4 h-auto p-3 bg-slate-100'>

          <div class="filters">
            <div className="filter-item bg-white rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Handle Type</h6>
              <div className='pl-4 pb-4'>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-1" /><label class="form-check-label" for="formCheck-1">Vertical</label></div>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-2" /><label class="form-check-label" for="formCheck-2">Horizontal</label></div>
              </div>
            </div>
            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Product Type</h6>
              <div className='pl-4 pb-4'>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-3" /><label class="form-check-label" for="formCheck-3">Light Duty</label></div>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-4" /><label class="form-check-label" for="formCheck-4">Medium Duty</label></div>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-5" /><label class="form-check-label" for="formCheck-5">Heavy Duty</label></div>
              </div>
            </div>
            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Standard Material</h6>
              <div className='pl-4 pb-4'>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-6" /><label class="form-check-label" for="formCheck-6">Steel</label></div>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-7" /><label class="form-check-label" for="formCheck-7">Stainless Steel</label></div>
              </div>
            </div>
            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Additional Locking Mechanism</h6>
              <div className='pl-4 pb-4'>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-8" /><label class="form-check-label" for="formCheck-8">Yes</label></div>
              </div>
            </div>
            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Clamp Arm Style</h6>
              <div className='pl-4 pb-4'>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-9" /><label class="form-check-label" for="formCheck-9">Adjustable Arm</label></div>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-10" /><label class="form-check-label" for="formCheck-10">Solid Arm - Weldable</label></div>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-11" /><label class="form-check-label" for="formCheck-11">Spindle Fixed</label></div>
              </div>
            </div>
            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Base Mounting Style</h6>
              <div className='pl-4 pb-4'>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-12" /><label class="form-check-label" for="formCheck-12">Flange</label></div>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-13" /><label class="form-check-label" for="formCheck-13">Front Mounting</label></div>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-14" /><label class="form-check-label" for="formCheck-14">Straight</label></div>
              </div>
            </div>

            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Base Material</h6>
              <div className='pl-4 pb-4'>
                <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-15" /><label class="form-check-label" for="formCheck-15">Steel</label></div>
              </div>
            </div>

            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Holding Capacity</h6>
              <div className='pl-4 pb-4 px-4'>
                <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">1kn - 14kn</label>
                <RangeSlider id="default-range" />
              </div>
            </div>

            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Length</h6>
              <div className='pl-4 pb-4 px-4'>
                <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">1kn - 14kn</label>
                <RangeSlider id="default-range" />
              </div>
            </div>

            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Width</h6>
              <div className='pl-4 pb-4 px-4'>
                <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">1kn - 14kn</label>
                <RangeSlider id="default-range" />
              </div>
            </div>

            <div className="filter-item bg-white mt-2 rounded">
              <h6 className='border-slate-200 border-b-[1px] pl-4 pt-2 pb-2'>Height</h6>
              <div className='pl-4 pb-4 px-4'>
                <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">1kn - 14kn</label>
                <RangeSlider id="default-range" />
              </div>
            </div>



          </div>
        </div>
        <div className='w-3/4 h-auto'>

          {/* Right Top Row */}
          <div className='w-full flex justify-between items-end p-4 bg-white'>
            <span className="text-xl font-bold text-gray-800 p-2">Vertical Hold Down Action</span>
            {/* <span><a href="#" className="inline-block rounded-lg border bg-white px-4  text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a></span> */}
          </div>

          {/* Products List */}
          <div className='bg-white px-8'>
            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 ">
              {/* product - start */}
              <div className='transition duration-100 hover:shadow-xl border divide-x divide-dashed'>
                <a
                  href="/productmodels"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src="../src/images/product1-img.jpg"
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1 text-xs uppercase tracking-wider text-white">
                    NEW
                  </span>
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1 text-xs uppercase tracking-wider text-white">
                    NEW
                  </span>
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
                  href="/productmodels"
                  className="group relative mb-2 block overflow-hidden bg-gray-100 lg:mb-3"
                >
                  <img
                    src="../src/images/product1-img.jpg"
                    loading="lazy"
                    alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                    className="h-[220px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <span className="absolute left-0 top-0 rounded-rt-lg bg-red-500 px-3 py-1 text-xs uppercase tracking-wider text-white">
                    NEW
                  </span>
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
                    src="../src/images/product1-img.jpg"
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
            <nav aria-label="Page navigation example ">
              <ul class="pagination justify-center ">
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

export default Products