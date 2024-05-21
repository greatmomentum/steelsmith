import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import photogrid from '../images/photo-grid.jpg';
import factory from '../images/factory.jpg';
import qualitystandards from '../images/surpassing-quality-standards.jpg';
import aboutimgcategory from '../images/about-img-category.jpg';
import productimg from '../images/product.png';
import winner from '../images/winner.png';
import productdevelopment from '../images/product-development.png';
import anniversary from '../images/anniversary.png';
import squarefeet from '../images/squarefeet-icon.png';
import isoicon from '../images/iso-icon.png';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';
import logo7 from '../images/logo7.png';
import logo9 from '../images/logo9.png';
import logo10 from '../images/logo10.png';
import logo11 from '../images/logo11.png';
import logo12 from '../images/logo12.png';
import logo13 from '../images/logo13.png';
import logo14 from '../images/logo14.png';
import logo15 from '../images/logo15.png';
import logo16 from '../images/logo16.png';







const AboutUs = () => {
  return (
    <div className=' pt-6'>
      <div class="w-full bg-white py-6 sm:py-8 lg:py-12 ">
        <div class="mx-auto px-4 md:px-8">
          <div class=" bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
            <p class="mb-2 text-center font-semibold text-[#003D6A] md:mb-3 lg:text-lg">Introduction</p>
            

            <h2 class="mb-4 text-center text-3xl font-semibold text-[#003D6A] md:mb-6 ">India's leader in toggle clamps for 50+ years</h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Steel Smith pioneered the development of toggle clamps in India over 50 years ago
              and still manufactures the country's widest and most recognized line of these useful and adaptable tools.</p>
          </div>
        </div>
      </div>

      {/* content */}

      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 container">

        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
              <span className="mb-4 text-4xl font-bold leading-10 text-[#003D6A] ">
                The toggle clamp Manufacturers
                <br />
                & engineering experts
              </span>
              <p className="max-w-md leading-normal text-gray-500 xl:text-lg">
                Designed & made by engineers, for engineers
              </p>
            </div>
            <div className="mb-12 flex w-full md:mb-16 lg:w-[800px] h-[400px]">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img
                  src={photogrid}
                  loading="lazy"
                  alt="Photo by Kaung Htet"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="overflow-hidden bg-gray-100 shadow-lg">
                <img
                  src={factory}
                  loading="lazy"
                  alt="Photo by Manny Moreno"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </section>
      </div>



      <section className="text-gray-600 body-font bg-slate-200">
        <div className="container px-5 py-14 mx-auto items-center">
          <div className="flex flex-wrap text-center space-x-4">
            <div className="w-[49%] h-[600px] mb-2 px-4 bg-white  ">
              <div className="h-64 overflow-hidden my-6">
                <img
                  alt="content" src={qualitystandards}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3  py-1">
                Surpassing Quality Standards
              </h2>
              <p className="leading-relaxed text-base  text-gray-700">
                From conceptualization to execution, from drawing to production, there’s just one single largest force that drives us, our customer. He was with us when we first ventured into the uncharted area of toggle clamp manufacturing in India. Four decades later, he still looks up to us with the same trust he began with. Because even as the times changed along with the application areas our products kept pace. Only improving in terms of quality.
              </p>
              {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Button
        </button> */}
            </div>
            <div className="w-[49%] h-[600px] mb-10 px-4 bg-white ">
              <div className="h-64 w-auto overflow-hidden my-6">
                <img
                  alt="content" src={aboutimgcategory}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 py-1">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Introducing newer and innovative products, continuously improving upon the existing ones and catering to our customers with prompt after sales service; we’ve grown. We’ve grown from a small set-up to an established brand name. Today Steel-Smith is the largest manufacturer and exporter of a wide range of toggle clamps and other industrial accessories. In doing so, we owe a lot to our customer; our source of inspiration and unrelenting support.
              </p>
              {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Button
        </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}


      {/* Numbers */}

      <div className="bg-white py-6 sm:py-8 lg:py-12 container">
        <div className="mx-auto ">
          {/* text - start */}

          {/* text - end */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6 xl:gap-16">
            {/* feature - start */}
            <div className="flex flex-col items-center bg-white p-2">
              <div className="mb-3 flex h-6 w-6 items-center justify-center text-[#003D6A] sm:mb-4 md:h-14 md:w-14">
                <img src={winner} />
              </div>
              <p className="mb-2 text-center text-3xl font-medium text-[#003D6A]">
                #1
              </p>
              <p className="mb-2 text-center leading-snug text-[#003D6A]">
                India's # 1 Manufacturer of Toggle clamps
              </p>

            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center bg-white p-2">
              <div className="mb-3 flex h-6 w-6 items-center justify-center text-[#003D6A] sm:mb-4 md:h-14 md:w-14">
                <img src={productimg} />
              </div>
              <p className="mb-2 text-center text-3xl font-medium text-[#003D6A]">
                500+
              </p>
              <p className="mb-2 text-center text-[#003D6A]">
                More than 500 models offered off the shelf
              </p>

            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center bg-white p-2">
              <div className="mb-3 flex h-6 w-6 items-center justify-center text-[#003D6A] sm:mb-4 md:h-14 md:w-14">
                <img src={productdevelopment} />
              </div>
              <p className="mb-2 text-center text-3xl font-medium text-[#003D6A]">
                750,000
              </p>
              <p className="mb-2 text-center text-[#003D6A]">
                Production capacity of 7.5 Lakh clamps /year
              </p>

            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center bg-white p-2">
              <div className="mb-3 flex h-6 w-6 items-center justify-center text-[#003D6A] sm:mb-4 md:h-14 md:w-14">
                <img src={anniversary} />
              </div>
              <p className="mb-2 text-center text-3xl font-medium text-[#003D6A]">
                50+
              </p>
              <p className="mb-2 text-center text-[#003D6A]">
                Established in the year 1970
              </p>

            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center bg-white p-2">
              <div className="mb-3 flex h-3 w-3 items-center justify-center text-[#003D6A] sm:mb-4 md:h-14 md:w-12">
                <img src={squarefeet} />
              </div>
              <p className="mb-2 text-center text-3xl font-medium text-[#003D6A]">
                40,000
              </p>
              <p className="mb-1 text-center text-[#003D6A]">
                40,000 sq.ft. of manufacturing area
              </p>

            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center bg-white p-2">
              <div className="mb-3 flex h-6 w-6 items-center justify-center text-[#003D6A] sm:mb-4 md:h-14 md:w-14">
                <img src={isoicon} />
              </div>
              <p className="mb-1 text-center text-3xl font-medium text-[#003D6A]">
                ISO
              </p>
              <p className="mb-2 text-center text-[#003D6A]">
                ISO 9001:2015
              </p>

            </div>
            {/* feature - end */}
          </div>
        </div>
      </div>

      <div className='container h-[170px] text-white flex justify-center items-center border-t-[1px] '>
        <Carousel opts={{ align: "start", }} className="w-full max-w-[1200px]">
          <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo1}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo2}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo3}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo4}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo5}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo6}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo7}/></CarouselItem>
              {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src="../src/images/logo8.png"/></CarouselItem> */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo9}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo10}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo11}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo12}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo13}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo14}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo15}/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img alt="content" src={logo16}/></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>




    </div>
  );
};

export default AboutUs;
