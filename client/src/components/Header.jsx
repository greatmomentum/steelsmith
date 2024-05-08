import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

            <div className='inline-flex'>
            <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/" activeClassName="active">Home</NavLink>
            <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/aboutus" activeClassName="active">About</NavLink>
            
            {/* Products link with dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded">Products</button>
              {/* Dropdown content */}
              {isDropdownOpen && (
                <div className="absolute bg-white border border-gray-200 shadow-md" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="flex justify-start py-4">
                    {/* Three links in one line */}
                    <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/product1">SteelSmith</NavLink>
                    <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/product2">Imao</NavLink>
                    <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/product3">Kipp</NavLink>
                    <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/product3">TurnLock</NavLink>                  </div>
                </div>
              )}
            </div>
            </div>



            {/* End of Products link with dropdown */}

            <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/dealer" activeClassName="active">Dealer Network</NavLink>
            <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/downloads" activeClassName="active">Downloads</NavLink>
            <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/markets" activeClassName="active">Markets</NavLink>
            <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/news" activeClassName="active">News</NavLink>
            <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/events" activeClassName="active">Events</NavLink>
            <NavLink className='p-2 mx-1 no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white rounded' to="/contactus" activeClassName="active">Contact us</NavLink>
          </nav>
        </div>

        {/* Col-3 */}
        <div className="flex-none text-white mr-1 bg-orange-300">

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
