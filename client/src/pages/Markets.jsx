import React from 'react'
import rotomoulding from '../images/roto-moulding.jpg';
import constructionequipment from '../images/Construction-Equipment.jpg';
import foodprocessing from '../images/Food-Processing-Packaging.jpg';
import aerospaceindustry from '../images/aerospace-industry.jpg';
import woodworkingclamps from '../images/Wood-Working-Clamps.jpg';
import automotive from '../images/automotive.jpg';
import pharma from '../images/pharma.jpg';
import medicalbox from '../images/Medical-Box.jpg';

const Markets = () => {
  return (
    <div>

      <section className="text-gray-600 py-28 body-font">
        <div className="container  mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={aerospaceindustry}
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2> */}
                  <h1 className="text-lg font-normal text-gray-700 mb-3">
                    <b>Aerospace</b>
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Steel-Smith Toggle Clamps, IMAO Machining Clamps are widely used in Aerospace fixtures which are essential work-holding devices, usually made from aluminium and used during the manufacture, assembly, and inspection of aircraft parts.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={automotive}
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2> */}
                  <h1 className="text-lg font-normal text-gray-700 mb-3">
                    <b>Automotive / Transportation</b>
                  </h1>
                  <p className="leading-relaxed mb-3">
                    With the rapid increase within the Automobile production sector, management says it must be faster & more flexible. As a Toggle clamps manufacturer, we make this happen with Pneumatic Toggle Clamps and provide manual clamping solutions across the whole process chain for vehicle manufacturing.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={constructionequipment}
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2> */}
                  <h1 className="text-lg font-normal text-gray-700 mb-3">
                    <b>Construction Equipment</b>
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Our Pull Action Clamps, Latches, and Leveling Pads are an integral part of Construction equipments like Soil Compactors, Shotcrete Pump, Stationary Pump, and Concrete Truck Mixer.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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

        {/* 2 */}

        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={foodprocessing}
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2> */}
                  <h1 className="text-lg font-normal text-gray-700 mb-3">
                    <b>Food Processing / Packaging</b>
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Leveling Pads, Latches, Stainless Steel Clamps are extensively used in the Food Processing/Packaging industry. The Hygienic/Novonox series of products are ultra-hygienic and comply with the stringent standards required in the food and beverage industries.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={pharma}
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2> */}
                  <h1 className="text-lg font-normal text-gray-700 mb-3">
                    <b>Pharmaceutical</b>
                  </h1>
                  <p className="leading-relaxed mb-3">
                    From Agitators, Blowers, and Boilers to Capsule equipment our Stainless Steel-304 & Stainless Steel-316 Clamps and Latches are used in all machines.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={rotomoulding}
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2> */}
                  <h1 className="text-lg font-normal text-gray-700 mb-3">
                    <b>Roto Moulding Industry</b>
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Steel Smith has a specific section dedicated to Roto Moulding Industry, our engineers have designed special clamps for quick opening and closing of the Moulds.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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

        {/* 3 */}

        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={medicalbox}
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2> */}
                  <h1 className="text-lg font-normal text-gray-700 mb-3">
                    <b>Vaccine Transport Boxes</b>
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Steel-Smith helps in creating innovative solutions to store and transport vaccines, blood components, laboratory specimens, etc. across the world safely.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={woodworkingclamps}
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2> */}
                  <h1 className="text-lg font-normal text-gray-700 mb-3">
                    <b>Wood Working Clamps</b>
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Toggle clamps provide strong gripping force, allowing woodworkers to hold materials securely in place during various woodworking operations, ensuring precise cuts, and enhancing overall safety and efficiency in the woodworking process.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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


    </div>
  )
}

export default Markets