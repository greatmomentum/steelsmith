import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="text-gray-600 body-font bg-[#003D6A]">
     
      <div className="container px-5 py-24 flex items-center md:flex-row md:flex-nowrap flex-wrap flex-col w-[1300px] mx-auto">
        <div className="w-[210px] items-center">
          
            <img src="../../src/images/steelsmith-logo-white.png" />
          
         <p className='text-white text-sm p-1 mt-4'> </p>
          {/* <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p> */}
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          
          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-base mb-3 text-left  border-solid border-b border-white">
              OUR BRANDS
            </h2>
            <nav className="text-left text-sm">
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/"  activeClassName="active">SteelSmith</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/about" activeClassName="active">Imao</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Kipp</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">TurnLock</NavLink></div>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-base mb-3 text-left  border-solid border-b border-white">
              QUICK LINKS
            </h2>
            <nav className="text-left text-sm">
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/"  activeClassName="active">Home</NavLink></div>
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
            <h2 className="title-font font-medium text-white text-base mb-3 text-left  border-solid border-b border-white">
              DOWNLOADS
            </h2>
            <nav className="text-left text-sm">
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/"  activeClassName="active">Catalogues</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/about" activeClassName="active">CAD</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Technical Data</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Videos</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Certificates</NavLink></div>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-white text-base mb-3 text-left border-solid border-b border-white">
              MEDIA
            </h2>
            <nav className="text-left text-sm">
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/"  activeClassName="active">Newsletter</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/about" activeClassName="active">Exhibitions</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">About Clamps</NavLink></div>
              <div className='p-1'><NavLink className='no-underline text-white hover:bg-[#003D6A] hover:text-white rounded' to="/products" activeClassName="active">Applications</NavLink></div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#003D6A] border border-[#004d80] border-t-1">
        <div className="container mx-auto py-3 px-5 flex flex-wrap flex-col sm:flex-row w-[1300px]">
          <p className="text-gray-100 text-sm text-center sm:text-left">
            © 2024 Steel-Smith. Copyrights Reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-200">
              <svg
                fill="currentColor"
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
                fill="currentColor"
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
                fill="none"
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
                fill="currentColor"
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