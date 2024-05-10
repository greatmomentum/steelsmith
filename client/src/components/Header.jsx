import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, MegaMenu, Navbar } from 'flowbite-react';


const Header = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white border-b-1 border-black shadow-md fixed z-50 w-full">
      <div className="flex flex-wrap w-[1300px] mx-auto">
        {/* Col-1 */}
        <div className="flex-none w-54 p-2 text-white mr-1 bg-white">
          <img className="lg:w-52" src="./src/images/SteelSmith.png" alt="Logo" />
        </div>
        {/* Col-2 */}
        <div className="flex-auto inline-flex justify-start items-center text-white mr-1 bg-white pl-4">
          <nav className='text-lg font-semibold text-[#003D6A] no-underline tracking-normal'>
            <div >
              <MegaMenu>
              <NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/" activeClassName="active">Home</NavLink>
              <NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/aboutus" activeClassName="active">About us</NavLink>
                <div className="flex flex-wrap justify-left p-1 text-base ">

                  <MegaMenu.Dropdown toggle={<>Products</>}>
                    <ul className="grid grid-cols-3">
                      <div className="space-y-4 p-4">
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Library
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Resources
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Pro Version
                          </a>
                        </li>
                      </div>
                      <div className="space-y-4 p-4">
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Support Center
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Terms
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Blog
                          </a>
                        </li>
                      </div>
                      <div className="space-y-4 p-4">
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Newsletter
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Playground
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            License
                          </a>
                        </li>
                      </div>
                    </ul>
                  </MegaMenu.Dropdown>
                </div>
                   <NavLink className='p-2 mx-1 text-base  no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/dealernetwork" activeClassName="active">Dealer Network</NavLink>
                  {/* <NavLink className='p-2 mx-1 text-base  no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/downloads" activeClassName="active">Downloads</NavLink> */}
                  <NavLink className='p-2 mx-1 text-base  no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/markets" activeClassName="active">Markets</NavLink>
                  <div className="flex flex-wrap justify-left p-1 text-base ">

                  <MegaMenu.Dropdown toggle={<>Media</>}>
                    <ul className="grid grid-cols-1">
                      <div className="space-y-4 p-4">
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Library
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Resources
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Pro Version
                          </a>
                        </li>
                      </div>

                    </ul>
                  </MegaMenu.Dropdown>
                </div>


                  {/* <NavLink className='p-2 mx-1 text-base  no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/news" activeClassName="active">News</NavLink>
                  <NavLink className='p-2 mx-1 text-base  no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/events" activeClassName="active">Events</NavLink> */}
                  <NavLink className='p-2 mx-1 text-base  no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/contactus" activeClassName="active">Contact us</NavLink>
              </MegaMenu>
              {/* end link */}
            </div>



            {/* End of Products link with dropdown */}

            {/* <NavLink className='p-2 mx-1 font-medium no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/dealernetwork" activeClassName="active">Dealer Network</NavLink>
            <NavLink className='p-2 mx-1 font-medium no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/downloads" activeClassName="active">Downloads</NavLink>
            <NavLink className='p-2 mx-1 font-medium no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/markets" activeClassName="active">Markets</NavLink>
            <NavLink className='p-2 mx-1 font-medium no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/news" activeClassName="active">News</NavLink>
            <NavLink className='p-2 mx-1 font-medium no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/events" activeClassName="active">Events</NavLink>
            <NavLink className='p-2 mx-1 font-medium no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline rounded' to="/contactus" activeClassName="active">Contact us</NavLink> */}
          </nav>
        </div>

        {/* Col-3 */}


        <div className="flex-none inline-flex items-center mr-4">
          <span><a href="#" className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 "> Login </a></span>
          <span><Button href="#">Sign up</Button></span>
        </div>


        {/* Col-4 */}
        <div className="flex-none inline-flex justify-end items-center text-white mr-1 bg-white ">
          <span className='p-1 text-gray-700'><img className="lg:w-7 transition ease-in-out delay-2 p-1 hover:-translate-1 hover:scale-110" src="./src/images/search.png" alt="Search" /></span>
          <span className='p-1 text-gray-700'><img className="lg:w-8 transition ease-in-out delay-2 p-1 hover:-translate-1 hover:scale-110" src="./src/images/people.png" alt="User" /></span>
          <span className='p-1 text-gray-700'><img className="lg:w-8 transition ease-in-out delay-2 p-1 hover:-translate-1 hover:scale-110" src="./src/images/shopping-cart.png" alt="Shopping Cart" /></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
