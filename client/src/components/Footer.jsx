import React from 'react'
import { NavLink } from 'react-router-dom';
import steelsmithlogowhite from '../images/steelsmith-logo-white.png';


const Footer = () => {
  return (
    <div className="text-gray-600 body-font pt-10 bg-[#003D6A]">

      <div className="container flex mx-auto">
        <div className="w-[370px] ">

          <img className='w-[210px] pl-2 mb-3' src={steelsmithlogowhite} />

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
            <h2 className="title-font font-medium text-white tracking-widest text-base pt-1 mb-4 text-left py-1 border-solid ">
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
            <h2 className="title-font font-medium text-white tracking-widest text-base mb-4 text-left py-1 border-solid ">
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
            <h2 className="title-font font-medium text-white text-base mb-4 text-left py-1 border-solid ">
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
            <h2 className="title-font font-medium text-white text-base mb-4 text-left py-1 border-solid ">
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
        <div className="container mx-auto px-5 flex items-center sm:flex-row h-12">
          <span className="text-gray-100 text-sm sm:text-left">Copyright © 2024 Steel-Smith. All Rights Reserved.</span>
          <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
          <a className="ml-3 text-gray-200">
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 7.89418C22.2642 8.21575 21.4733 8.43232 20.6433 8.52994C21.4908 8.03035 22.1417 7.23872 22.4475 6.29532C21.655 6.758 20.7767 7.09434 19.8417 7.27564C19.0942 6.49057 18.0267 6 16.8467 6C14.1975 6 12.2508 8.43314 12.8492 10.959C9.44 10.7908 6.41667 9.18294 4.3925 6.73913C3.3175 8.55455 3.835 10.9295 5.66167 12.1321C4.99 12.1107 4.35667 11.9295 3.80417 11.6267C3.75917 13.4979 5.12167 15.2486 7.095 15.6382C6.5175 15.7925 5.885 15.8285 5.24167 15.7071C5.76333 17.3117 7.27833 18.4791 9.075 18.5119C7.35 19.8433 5.17667 20.4381 3 20.1854C4.81583 21.3314 6.97333 22 9.29 22C16.9083 22 21.2125 15.6661 20.9525 9.98523C21.7542 9.41509 22.45 8.70386 23 7.89418Z" fill="white"/>
</svg>
            </a>

            <a className="text-gray-200 pl-3">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8962 23.9604C18.9992 23.5072 23 19.2208 23 14C23 8.47715 18.5228 4 13 4C7.47715 4 3 8.47715 3 14C3 18.8479 6.44966 22.89 11.0282 23.8057V16.588H8.625V13.6989H11.0282V11.5674C11.0282 9.09427 12.4801 7.75 14.6043 7.75C15.6199 7.75 16.4925 7.82427 16.75 7.86141V10.4534H15.2766C14.118 10.4534 13.8962 11.0178 13.8962 11.8571V13.6989H16.6499L16.2923 16.588H13.8962V23.9604Z" fill="white"/>
</svg>
            </a>

            <a className="ml-3 text-gray-200">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0002 4H6C4 4 3 5 3 7L3.00059 21C3.00059 23 4.00021 24 6.00021 24H20.0002C22.0002 24 23.0002 23 23.0002 21V7C23.0002 5 22.0002 4 20.0002 4ZM9.66687 19.8334H7.16687V10.6667H9.66687V19.8334ZM8.41687 9.61C7.61187 9.61 6.95854 8.95167 6.95854 8.14C6.95854 7.32833 7.61187 6.67 8.41687 6.67C9.22187 6.67 9.87521 7.32833 9.87521 8.14C9.87521 8.95167 9.22271 9.61 8.41687 9.61ZM19.6669 19.8334H17.1669V15.1634C17.1669 12.3567 13.8335 12.5692 13.8335 15.1634V19.8334H11.3335V10.6667H13.8335V12.1375C14.9969 9.9825 19.6669 9.82334 19.6669 14.2009V19.8334Z" fill="white"/>
</svg>

            </a>

            <a className="ml-3 text-gray-200">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6672 14C10.6672 12.1591 12.1591 10.6664 14 10.6664C15.8409 10.6664 17.3336 12.1591 17.3336 14C17.3336 15.8409 15.8409 17.3336 14 17.3336C12.1591 17.3336 10.6672 15.8409 10.6672 14ZM8.86511 14C8.86511 16.836 11.164 19.1349 14 19.1349C16.836 19.1349 19.1349 16.836 19.1349 14C19.1349 11.164 16.836 8.8651 14 8.8651C11.164 8.8651 8.86511 11.164 8.86511 14ZM18.1381 8.66155C18.1381 9.32391 18.6753 9.86187 19.3385 9.86187C20.0008 9.86187 20.5388 9.32391 20.5388 8.66155C20.5388 7.99919 20.0016 7.46204 19.3385 7.46204C18.6753 7.46204 18.1381 7.99919 18.1381 8.66155ZM9.95961 22.1397C8.98465 22.0953 8.45477 21.933 8.10259 21.7956C7.6357 21.6139 7.30291 21.3974 6.95234 21.0477C6.60259 20.6979 6.3853 20.3651 6.20436 19.8982C6.06704 19.546 5.90469 19.0162 5.86026 18.0412C5.81179 16.9871 5.8021 16.6704 5.8021 14C5.8021 11.3296 5.8126 11.0137 5.86026 9.9588C5.90469 8.98384 6.06785 8.45477 6.20436 8.10178C6.38611 7.63489 6.60259 7.3021 6.95234 6.95153C7.3021 6.60178 7.6349 6.38449 8.10259 6.20355C8.45477 6.06624 8.98465 5.90388 9.95961 5.85945C11.0137 5.81099 11.3304 5.80129 14 5.80129C16.6704 5.80129 16.9863 5.81179 18.0412 5.85945C19.0162 5.90388 19.5452 6.06704 19.8982 6.20355C20.3651 6.38449 20.6979 6.60178 21.0485 6.95153C21.3982 7.30129 21.6147 7.63489 21.7964 8.10178C21.9338 8.45396 22.0961 8.98384 22.1406 9.9588C22.189 11.0137 22.1987 11.3296 22.1987 14C22.1987 16.6696 22.189 16.9863 22.1406 18.0412C22.0961 19.0162 21.933 19.546 21.7964 19.8982C21.6147 20.3651 21.3982 20.6979 21.0485 21.0477C20.6987 21.3974 20.3651 21.6139 19.8982 21.7956C19.546 21.933 19.0162 22.0953 18.0412 22.1397C16.9871 22.1882 16.6704 22.1979 14 22.1979C11.3304 22.1979 11.0137 22.1882 9.95961 22.1397ZM9.87722 4.06058C8.8126 4.10905 8.08562 4.27787 7.44992 4.52504C6.79241 4.78029 6.23506 5.12278 5.67851 5.67851C5.12278 6.23425 4.78029 6.7916 4.52504 7.44992C4.27787 8.08562 4.10905 8.8126 4.06058 9.87722C4.01131 10.9435 4 11.2843 4 14C4 16.7157 4.01131 17.0565 4.06058 18.1228C4.10905 19.1874 4.27787 19.9144 4.52504 20.5501C4.78029 21.2076 5.12197 21.7658 5.67851 22.3215C6.23425 22.8772 6.7916 23.2189 7.44992 23.475C8.08643 23.7221 8.8126 23.891 9.87722 23.9394C10.9443 23.9879 11.2843 24 14 24C16.7165 24 17.0565 23.9887 18.1228 23.9394C19.1874 23.891 19.9144 23.7221 20.5501 23.475C21.2076 23.2189 21.7649 22.8772 22.3215 22.3215C22.8772 21.7658 23.2189 21.2076 23.475 20.5501C23.7221 19.9144 23.8918 19.1874 23.9394 18.1228C23.9879 17.0557 23.9992 16.7157 23.9992 14C23.9992 11.2843 23.9879 10.9435 23.9394 9.87722C23.891 8.8126 23.7221 8.08562 23.475 7.44992C23.2189 6.79241 22.8772 6.23506 22.3215 5.67851C21.7658 5.12278 21.2076 4.78029 20.5509 4.52504C19.9144 4.27787 19.1874 4.10824 18.1236 4.06058C17.0574 4.01212 16.7165 4 14.0008 4C11.2843 4 10.9443 4.01131 9.87722 4.06058Z" fill="white"/>
</svg>
            </a>
            
            <a className="ml-3 text-gray-200">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0089 11.4517C24.0583 10.0203 23.7453 8.5997 23.0989 7.32168C22.6603 6.79728 22.0516 6.44339 21.3789 6.32168C18.5964 6.06921 15.8024 5.96573 13.0089 6.01168C10.2255 5.96364 7.44153 6.06378 4.66882 6.31168C4.12064 6.4114 3.61334 6.66853 3.20882 7.05168C2.30882 7.88168 2.20882 9.30168 2.10882 10.5017C1.96373 12.6592 1.96373 14.8241 2.10882 16.9817C2.13775 17.6571 2.23831 18.3275 2.40882 18.9817C2.5294 19.4867 2.77334 19.954 3.11882 20.3417C3.52609 20.7451 4.0452 21.0169 4.60882 21.1217C6.76474 21.3878 8.93704 21.4981 11.1089 21.4517C14.6089 21.5017 17.6788 21.4517 21.3088 21.1717C21.8863 21.0733 22.42 20.8012 22.8389 20.3917C23.1188 20.1116 23.3279 19.7688 23.4489 19.3917C23.8065 18.2943 23.9821 17.1458 23.9688 15.9917C24.0089 15.4317 24.0089 12.0517 24.0089 11.4517ZM10.7488 16.5917V10.4017L16.6688 13.5117C15.0089 14.4317 12.8188 15.4717 10.7488 16.5917Z" fill="white"/>
</svg>

            </a>
            
            
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer