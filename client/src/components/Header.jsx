import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button, Modal, TextInput, Label, Checkbox, Drawer } from 'flowbite-react';
import logo from '../images/SteelSmith.png';
import EnquiryCart from '../pages/EnquiryCart';
import steelsmithlogo from '../images/brand-1.jpg';
import imaologo from '../images/brand-2.jpg';
import kipplogo from '../images/brand-3.jpg';
import turnlocklogo from '../images/brand-4.jpg';
import productthumbimage from '../images/product1-img.jpg';
import shoppingcart from '../images/shopping-cart.png';
import searchicon from '../images/search.png';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  // for Drawer Starts

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const onCloseModal = () => {
    setOpenLoginModal(false);
    setOpenSearchModal(false);
    setEmail('');
  };

  // for Drawer Ends

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLoginButtonClick = () => {
    setOpenLoginModal(true);
  };

  const handleSearchIconClick = () => {
    setShowInput(!showInput);
    if (!showInput) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    // Here you can implement your search logic to get suggestions
    // For now, I'm just setting some dummy suggestions
    setSuggestions([
      `${value} suggestion 1`,
      `${value} suggestion 2`,
      `${value} suggestion 3`
    ]);
  };

  return (

    // Main Level
    <div className="bg-white border-b-1 border-black shadow-md fixed z-50 w-full">

      {/* Main Sub Level */}
      <div className="flex flex-wrap w-[1300px] mx-auto">

        {/* Main Logo */}
        <div className="flex-none w-54 p-2 text-white mr-1 bg-white">
          <NavLink to="/" activeClassName="active"><img className="lg:w-52" src={logo} alt="Logo" /></NavLink>
        </div>

        {/* --------------------------- Navigation Menu ------------------------------------ */}

        {/* Navigation Menu */}

        <div className="flex-auto inline-flex items-center justify-between">
          <div>
            <nav className='flex justify-around z-10'>

              {/* Home */}
              <span><NavLink className='py-[12px] px-2 text-[15px] font-[500] tracking-wide no-underline text-gray-900  hover:text-[#003D6A] hover:no-underline' to="/" activeClassName="active"><b>Home</b></NavLink></span>

              {/* About us */}
              <span><NavLink className='py-[12px] px-2 text-[15px] font-[500] tracking-wide no-underline text-gray-900  hover:text-[#003D6A] hover:no-underline' to="/aboutus" activeClassName="active"><b>About us</b></NavLink></span>

              {/* Products ------ */}
              <span>
                <NavLink className='mega-menu-item py-[14px] pr-4 pl-2 items-center text-[15px] font-[500] tracking-wide no-underline text-gray-900  hover:text-[#003D6A] hover:no-underline' to="/allproducts" activeClassName="active">
                  <b>Products</b>
                  <span className='absolute'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-1 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg></span>
                  <div className="mega-menu bg-white border shadow">
                    <div className="flex w-[1300px] mx-auto divide-x-[1px] divide-solid my-1">
                      <div className="logo-box bg-white">
                        <NavLink to="/ProductCategories" activeClassName="active">
                          <div className="justify-center">
                            {/* <img className="lg:w-152" src="./src/images/brand-1.jpg" alt="Logo" /> */}
                            <img className="w-[200px]" src={steelsmithlogo} alt="Logo" />
                          </div>
                        </NavLink>
                      </div>
                      <div className="logo-box bg-white">
                        <NavLink to="/ProductCategories" activeClassName="active">
                          <div className="justify-center">
                            {/* <img className="lg:w-152" src="./src/images/brand-1.jpg" alt="Logo" /> */}
                            <img className="w-[200px]" src={imaologo} alt="Logo" />
                          </div>
                        </NavLink>
                      </div>
                      <div className="logo-box bg-white">
                        <NavLink to="/ProductCategories" activeClassName="active">
                          <div className="justify-center">
                            {/* <img className="lg:w-152" src="./src/images/brand-1.jpg" alt="Logo" /> */}
                            <img className="w-[230px]" src={kipplogo} alt="Logo" />
                          </div>
                        </NavLink>
                      </div>
                      <div className="logo-box bg-white">
                        <NavLink to="/ProductCategories" activeClassName="active">
                          <div className="justify-center">
                            {/* <img className="lg:w-152" src="./src/images/brand-1.jpg" alt="Logo" /> */}
                            <img className="w-[230px]" src={turnlocklogo} alt="Logo" />
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </span>

              {/* Dealer Network ------ */}
              <span><NavLink className='media-menu-item py-[12px] px-2 text-[15px] font-[500]  no-underline text-gray-900  hover:text-[#003D6A] hover:no-underline tracking-wide' to="/dealernetwork" activeClassName="active"><b>Dealer Network</b></NavLink></span>

              {/* Markets ------ */}
              <span><NavLink className='media-menu-item py-[12px] px-2 text-[15px] font-[500]  no-underline text-gray-900  hover:text-[#003D6A] hover:no-underline tracking-wide' to="/markets" activeClassName="active"><b>Markets</b></NavLink></span>

              {/* Downloads ------ */}
              <span><NavLink className='media-menu-item py-[12px] px-2 text-[15px] font-[500]  no-underline text-gray-900  hover:text-[#003D6A] hover:no-underline tracking-wide' to="/downloads" activeClassName="active"><b>Downloads</b></NavLink></span>

              {/* Media Button */}

              <span className="relative group">
                <NavLink className='media-menu-item py-[12px] pr-4 pl-2 text-[15px] font-[500]  no-underline text-gray-900 hover:text-[#003D6A] hover:no-underline tracking-wide' to="/" activeClassName="active">
                  <b>Media</b>
                  <span className='absolute'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 p-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg></span>
                  <div className="media-menu">
                    <div className='media-logo-box'>
                      <ul className='media-dropdown-menu divide-y-2 divide-solid shadow'>
                        <li className=' flex text-base font-normal  bg-white p-2 items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-2 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                          </svg>
                          <NavLink className='text-[#003D6A] text-sm no-underline' to="/news" activeClassName="active">News
                          </NavLink>
                        </li>

                        <li className=' flex text-base font-normal  bg-white p-2 items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-2 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                          </svg>
                          <NavLink className='text-[#003D6A] text-sm no-underline' to="/events" activeClassName="active">Events
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavLink>
              </span>


              {/* Contact us ------ */}
              <span><NavLink className='media-menu-item py-[12px] px-2 text-[15px] font-[500]  no-underline text-gray-900  hover:text-[#003D6A] hover:no-underline tracking-wide' to="/contactus" activeClassName="active"><b>Contact us</b></NavLink></span>
            </nav>
          </div>


          {/* register STARTS */}

          <div className="flex-none inline-flex items-center py-[16px] ">
            {/* <span>
            <NavLink className='media-menu-item py-[12px] px-2 text-[15px] font-[500]  no-underline text-gray-900  hover:text-[#003D6A] hover:no-underline tracking-wide' to="/register" activeClassName="active">
            
            Register
            </NavLink>
            </span> */}

            <NavLink className='flex hover:cursor-pointer text-[15px] font-[500] no-underline text-gray-900 border-r-[1px] pr-10 mr-[-2]  bg-white px-0 focus:outline-none focus:ring-0 enabled:hover:bg-cyan-800 hover:text-[#003D6A] hover:no-underline'  onClick={handleLoginButtonClick}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-7 mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </span>
              <span className='mt-1 pr-3'>Login</span>
            </NavLink>

            <Modal show={openLoginModal} size="md" onClose={onCloseModal} popup>
              <div>
                <Modal.Header />
                <Modal.Body>
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                      </div>
                      <TextInput
                        id="email"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                      </div>
                      <TextInput id="password" type="password" required />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                      </div>
                      <a href="#" className="text-sm text-[#003D6A] hover:underline dark:text-[#003D6A]">Lost Password?</a>
                    </div>
                    <div className="w-full">
                      <Button className='bg-[#003D6A] hover:bg-blue-800'>Log in to your account</Button>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?&nbsp;
                      <a href="#" className="text-[#003D6A] hover:underline dark:text-[#003D6A]">Create account</a>
                    </div>
                  </div>
                </Modal.Body>
              </div>
            </Modal>
          </div>

          {/* register ENDS */}


        </div>

        {/* --------------------------- Navigation Menu ------------------------------------ */}



        {/* ---------------------------Login Register------------------------------------ */}



        {/* ---------------------------Login Register------------------------------------ */}



        {/* -------------------------Icons Search, Shopping Cart-------------------------------------- */}

        {/* Icons Search Shopping Cart */}
        <div className="flex-none inline-flex justify-end items-center text-white mr-1 bg-white ">
          <div className="relative "> {/* Apply z-[1000] here */}
            {showInput && (
              <div className="absolute top-0 right-0 z-[100]">
                <div className="relative ">
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchText}
                    onChange={handleInputChange}
                    className="w-[1030px] border text-gray-900 bg-gray-100 font-normal border-gray-300 p-2 ml-[5px] shadow-sm "
                    placeholder="Search..."
                  />
                  {suggestions.length > 0 && (
                    <div className="absolute top-full left-0 bg-white border border-gray-300 w-[800px] shadow-md rounded-t-lg p-2">
                      {suggestions.map((suggestion, index) => (
                        <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer text-gray-900 text-base tracking-tight font-normal">
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            <button
              onClick={handleSearchIconClick} 
              className="ml-1 p-2  bg-white text-gray-800 rounded"
            >
              <img className="lg:w-7 transition ease-in-out delay-2 p-1 hover:-translate-1 hover:scale-110" src={searchicon} alt="Search" />
            </button>
          </div>
          <span className='p-1 text-gray-700'><button onClick={() => setIsOpen(true)}>
            <img className="lg:w-7 transition ease-in-out delay-2 mt-1 p-1 hover:-translate-1 hover:scale-110 " src={shoppingcart} alt="shopping cart" />
          </button>
          </span>

          {/* Drawer for Shopping Cart */}

          <Drawer open={isOpen} onClose={handleClose} position="right" >
            <Drawer.Header className='text-gray-900' title="Enquiry Cart" />
            <Drawer.Items>
              <p className="mb-6 text-sm text-gray-900 dark:text-gray-900">
                Your Enquiry List:
              </p>
              <div className='p-1 border shadow-sm my-2 relative'>
                <div className='grid grid-cols-3 gap-1 hover:bg-slate-100'>
                  <div class="group block mt-1 ml-1">
                    <img className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110" src={productthumbimage} alt="Vertical Hold Down Action Heavy Duty Flanged Base" />
                  </div>
                  <div className='col-span-2 p-2'><a href="#" className="text-sm tracking-tight text-dark text-dark no-underline"><span>Vertical Hold Down Action Heavy Duty Flanged Base </span>
                  </a>
                    <p class="text-muted mb-0">
                      <div className='absolute top-0 right-0 p-2'><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#424242" className="w-4 h-4 m-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </a></div>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star-half text-warning"></i>
                    </p></div>
                </div>
              </div>
              <div className='p-1 border shadow-sm my-2 relative'>
                <div className='grid grid-cols-3 gap-1 hover:bg-slate-100'>
                  <div class="group block mt-1 ml-1">
                    <img className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110" src={productthumbimage} alt="Vertical Hold Down Action Heavy Duty Flanged Base" />
                  </div>
                  <div className='col-span-2 p-2'><a href="#" className="text-sm tracking-tight text-dark text-dark no-underline"><span>Vertical Hold Down Action Heavy Duty Flanged Base </span>
                  </a>
                    <p class="text-muted mb-0">
                      <div className='absolute top-0 right-0 p-2'><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#424242" className="w-4 h-4 m-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </a></div>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star-half text-warning"></i>
                    </p></div>
                </div>
              </div>
              <div className='p-1 border shadow-sm my-2 relative'>
                <div className='grid grid-cols-3 gap-1 hover:bg-slate-100'>
                  <div class="group block mt-1 ml-1">
                    <img className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110" src={productthumbimage} alt="Vertical Hold Down Action Heavy Duty Flanged Base" />
                  </div>
                  <div className='col-span-2 p-2'><a href="#" className="text-sm tracking-tight text-dark text-dark no-underline"><span>Vertical Hold Down Action Heavy Duty Flanged Base </span>
                  </a>
                    <p class="text-muted mb-0">
                      <div className='absolute top-0 right-0 p-2'><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#424242" className="w-4 h-4 m-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </a></div>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star-half text-warning"></i>
                    </p></div>
                </div>
              </div>
              <div className='pt-6'>
                <span>
                  <NavLink className='flex justify-center py-2 mx-1 text-base no-underline bg-[#003D6A] text-white hover:bg-[#003D6A] hover:text-white hover:no-underline -sm' to="/enquirycart" activeClassName="active">
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-2 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg></span>
                    <span>Send Enquiry</span>
                  </NavLink></span>
              </div>
            </Drawer.Items>
          </Drawer>

          {/* Drawer for Shopping Cart ENDS */}


        </div>

        {/* --------------------------Icons Search, Shopping Cart ENDS HERE ------------------------------------- */}

      </div>
    </div>
  );
};

export default Header;
