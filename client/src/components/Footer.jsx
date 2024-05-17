import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="text-gray-600 body-font pt-10 bg-[#003D6A]">

      <div className="container flex mx-auto">
        <div className="w-[370px] ">

          <img className='w-[210px] pl-2 mb-3' src="../../src/images/steelsmith-logo-white.png" />

          {/* icon 1 */}
          <div className='flex py-2 '>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white  mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            </span>
            <span className='text-white text-sm font-thin'>Plot No. 12, Sector-2, Vasai Taluka Industrial Estate, Gauraipada, Vasai (E), Palghar – 401 208, India.</span></div>

          {/* icon 2 */}
          <div className='flex py-2'>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

            </span>
            <span className='text-white text-sm font-thin'>sales@steelsmith.com / clamps@steelsmith.com </span></div>

          {/* icon 3 */}
          <div className='flex py-2'>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white  mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            </span>
            <span className='text-white text-sm font-thin'>+91 9370443324 / +91 9325754484</span></div>


          {/* <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p> */}
        </div>
        <div className="flex-grow flex py-2 ">

          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-white tracking-widest text-base mb-4 text-left py-1 border-solid border-b border-white">
              OUR BRANDS
            </h2>
            <nav className="text-left text-sm">
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/" activeClassName="active">SteelSmith</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/about" activeClassName="active">Imao</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Kipp</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">TurnLock</NavLink></div>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-base mb-3 text-left py-1 border-solid border-b border-white">
              QUICK LINKS
            </h2>
            <nav className="text-left text-sm">
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/" activeClassName="active">Home</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/about" activeClassName="active">About us</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Products</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Dealer Network</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Downloads</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Markets</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">News</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Events</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Contact us</NavLink></div>
            </nav>
          </div>


          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white text-base mb-3 text-left py-1 border-solid border-b border-white">
              DOWNLOADS
            </h2>
            <nav className="text-left text-sm">
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/" activeClassName="active">Catalogues</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/about" activeClassName="active">CAD</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Technical Data</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Videos</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Certificates</NavLink></div>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-white text-base mb-3 text-left py-1 border-solid border-b border-white">
              MEDIA
            </h2>
            <nav className="text-left text-sm">
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/" activeClassName="active">Newsletter</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/about" activeClassName="active">Exhibitions</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">About Clamps</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Applications</NavLink></div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#003D6A] border border-[#004d80] border-t-1">
        <div className="container mx-auto py-3 px-5 flex flex-wrap flex-col sm:flex-row w-[1300px]">
          <p className="text-gray-100 text-sm text-center sm:text-left">© 2024 Steel-Smith. Copyrights Reserved</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-200">
              <svg
                fill="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-200">
              <svg
                fill="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-200">
              <svg
                fill="white"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-200">
              <svg
                fill="white"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer