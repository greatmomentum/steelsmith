import React from 'react';

const AboutUs = () => {
  return (
    <div className=' pt-6'>
      <div class="w-full bg-white py-6 sm:py-8 lg:py-12 ">
        <div class="mx-auto px-4 md:px-8">
          <div class="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
            <p class="mb-2 text-center font-semibold text-[#003D6A] md:mb-3 lg:text-lg">Introduction</p>

            <h2 class="mb-4 text-center text-3xl font-semibold text-[#003D6A] md:mb-6 ">India's leader in toggle clamps for 50+ years</h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Steel Smith pioneered the development of toggle clamps in India over 50 years ago
              and still manufactures the country's widest and most recognized line of these useful and adaptable tools.</p>
          </div>
        </div>
      </div>

      {/* content */}


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="../src/images/surpassing-quality-standards.jpg"

                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Surpassing Quality Standards
              </h2>
              <p className="leading-relaxed text-base  text-gray-700">
                From conceptualization to execution, from drawing to production, there’s just one single largest force that drives us, our customer. He was with us when we first ventured into the uncharted area of toggle clamp manufacturing in India. Four decades later, he still looks up to us with the same trust he began with. Because even as the times changed along with the application areas our products kept pace. Only improving in terms of quality.
              </p>
              {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Button
        </button> */}
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="../src/images/about-img-category.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
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


      <>
        {/* ====== Services Section Start */}

        <div className="container px-4 ">
          <div className="mx-auto mb-12 text-center lg:mb-20">
            <span className="text-primary mb-2 block text-lg font-semibold">
              Our Services
            </span>
            <div className="text-dark dark:text-white mb-3 text-2xl leading-[1.2] font-bold">
              What We Offer
            </div>

            <div className="w-full mx-auto px-4 md:px-8 ">

              <div class="mb-10 md:mb-16">
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Team by the numbers</h2>

                <p class="mx-auto text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
              </div>


              <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">

                <div class="flex flex-col items-center md:p-4">
                  <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">200</div>
                  <div class="text-sm font-semibold sm:text-base">People</div>
                </div>



                <div class="flex flex-col items-center md:p-4">
                  <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">500+</div>
                  <div class="text-sm font-semibold sm:text-base">People</div>
                </div>


                <div class="flex flex-col items-center md:p-4">
                  <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">1000+</div>
                  <div class="text-sm font-semibold sm:text-base">Customers</div>
                </div>

                <div class="flex flex-col items-center md:p-4">
                  <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">A couple</div>
                  <div class="text-sm font-semibold sm:text-base">Coffee breaks</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ====== Services Section End */}
      </>



    </div>
  );
};

export default AboutUs;
