import React from 'react'
import newimg1 from '../images/news-img-1.jpg';
import newimg2 from '../images/news-img-2.jpg';
import newimg3 from '../images/news-img-3.jpg';
import newimg4 from '../images/news-img-4.jpg';

const News = () => {
  return (
    <div>News

<div class=" w-full bg-white pt-20 ">
  <div class="mx-auto ">

    <div class="mb-14   py-0" >
    {/* <span class="flex justify-center text-xl font-medium text-gray-800 lg:text-xl">News</span> */}

      {/* <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> */}
    </div>


    <div class="container grid gap-8 sm:grid-cols-1 sm:gap-12 lg:grid-cols-2 pb-20 xl:grid-cols-2 xl:gap-16">
        
        
        
        {/* col 1 */}   
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-86 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 border md:h-24 md:w-24 lg:h-40 lg:w-80">
          <img src={newimg1} loading="lazy" alt="Steelsmith News" class="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
        </a>
        <div class="flex flex-col gap-2">
          {/* <span class="text-sm text-gray-400">July 19, 2021</span> */}

          <h2>
            <a href="#" class="text-gray-800 text-base font-normal no-underline transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]"><b>Spring Swing Clamp – IMAO</b></a>
          </h2>

          {/* <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p> */}

          <div>
            <a href="#" class="text-sm font-normal text-[#003D6A] transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]">Read more</a>
          </div>
        </div>
      </div>
 
      {/* col 2 */}
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 border md:h-24 md:w-24 lg:h-40 lg:w-80">
          <img src={newimg2} loading="lazy" alt="SteelSmith News" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          {/* <span class="text-sm text-gray-400">April 07, 2021</span> */}

          <h2 class="text-lg font-bold text-gray-800">
          <a href="#" class="text-gray-800 text-base font-normal no-underline transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]"><b>IMAO – Hook Clamps</b></a>
          </h2>

          {/* <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p> */}

          <div>
            <a href="#" class="text-sm font-normal text-[#003D6A] transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]">Read more</a>
          </div>
        </div>
      </div>

      {/* col 3 */}
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 border md:h-24 md:w-24 lg:h-40 lg:w-80">
          <img src={newimg3} loading="lazy" alt="SteelSmith News" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          {/* <span class="text-sm text-gray-400">March 15, 2021</span> */}

          <h2 class="text-lg font-bold text-gray-800">
          <a href="#" class="text-gray-800 text-base font-normal no-underline transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]"><b>Leveling Pads</b></a>
          </h2>

          {/* <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p> */}

          <div>
            <a href="#" class="text-sm font-normal text-[#003D6A] transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]">Read more</a>
          </div>
        </div>
      </div>

      {/* col 4 */}
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 border md:h-24 md:w-24 lg:h-40 lg:w-80">
          <img src={newimg4} loading="lazy" alt="SteelSmith News" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          {/* <span class="text-sm text-gray-400">January 27, 2021</span> */}

          <h2 class="text-lg font-bold text-gray-800">
          <a href="#" class="text-gray-800 text-base font-normal no-underline transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]"><b>Roto Moulding Fixture</b></a>
          </h2>

          {/* <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p> */}

          <div>
            <a href="#" class="text-sm font-normal text-[#003D6A] transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]">Read more</a>
          </div>
        </div>
      </div>

      
      {/* col 2 */}
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 border md:h-24 md:w-24 lg:h-40 lg:w-80">
          <img src={newimg2} loading="lazy" alt="SteelSmith News" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          {/* <span class="text-sm text-gray-400">April 07, 2021</span> */}

          <h2 class="text-lg font-bold text-gray-800">
          <a href="#" class="text-gray-800 text-base font-normal no-underline transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]"><b>IMAO – Hook Clamps</b></a>
          </h2>

          {/* <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p> */}

          <div>
            <a href="#" class="text-sm font-normal text-[#003D6A] transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]">Read more</a>
          </div>
        </div>
      </div>
      

      {/* col 6  */}
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-86 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 border md:h-24 md:w-24 lg:h-40 lg:w-80">
          <img src={newimg1} loading="lazy" alt="Steelsmith News" class="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
        </a>
        <div class="flex flex-col gap-2">
          {/* <span class="text-sm text-gray-400">July 19, 2021</span> */}

          <h2 class="text-lg font-bold text-gray-800">
          <a href="#" class="text-gray-800 text-base font-normal no-underline transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]"><b>Spring Swing Clamp – IMAO</b></a>
          </h2>

          {/* <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p> */}

          <div>
            <a href="#" class="text-sm font-normal text-[#003D6A] transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]">Read more</a>
          </div>
        </div>
      </div>

      {/* col 3 */}
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 border md:h-24 md:w-24 lg:h-40 lg:w-80">
          <img src={newimg3} loading="lazy" alt="Steelsmith News" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          {/* <span class="text-sm text-gray-400">March 15, 2021</span> */}

          <h2 class="text-lg font-bold text-gray-800">
          <a href="#" class="text-gray-800 text-base font-normal no-underline transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]"><b>Leveling Pads</b></a>
          </h2>

          {/* <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p> */}

          <div>
            <a href="#" class="text-sm font-normal text-[#003D6A] transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]">Read more</a>
          </div>
        </div>
      </div>

      {/* col 2 */}
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 border md:h-24 md:w-24 lg:h-40 lg:w-80">
          <img src={newimg2} loading="lazy" alt="Steelsmith News" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          {/* <span class="text-sm text-gray-400">April 07, 2021</span> */}

          <h2 class="text-lg font-bold text-gray-800">
          <a href="#" class="text-gray-800 text-base font-normal no-underline transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]"><b>IMAO – Hook Clamps</b></a>
          </h2>

          {/* <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p> */}

          <div>
            <a href="#" class="text-sm font-normal text-[#003D6A] transition duration-100 hover:text-[#003D6A] active:text-[#003D6A]">Read more</a>
          </div>
        </div>
      </div>
      


     
    </div>
  </div>
</div>
    </div>
  )
}

export default News