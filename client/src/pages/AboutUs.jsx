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


      {/* Numbers */}

      <div className="bg-white py-6 sm:py-8 lg:py-12 container">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our competitive advantage
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as placeholder
              text. It shares some characteristics of a real written text but is
              random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
            {/* feature - start */}
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                #1
              </h3>
              <p className="mb-2 text-center text-gray-500">
              India's # 1 Manufacturer of Toggle clamps
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              500+
              </h3>
              <p className="mb-2 text-center text-gray-500">
              More than 500 models offered off the shelf
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              750,000
              </h3>
              <p className="mb-2 text-center text-gray-500">
              Production capacity of 750,000 clamps per year
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              50+
              </h3>
              <p className="mb-2 text-center text-gray-500">
              Established in the year 1970
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              40,000
              </h3>
              <p className="mb-2 text-center text-gray-500">
              40,000 sq.ft. of manufacturing area
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              ISO
              </h3>
              <p className="mb-2 text-center text-gray-500">
                ISO 9001:2015
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            {/* feature - end */}
          </div>
        </div>
      </div>




    </div>
  );
};

export default AboutUs;
