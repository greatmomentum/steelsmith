import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button, MegaMenu, Modal, TextInput, Label, Checkbox, Drawer } from 'flowbite-react';
import EnquiryCart from '../pages/EnquiryCart';
import logo from '../images/SteelSmith.png';
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
  const publicUrl = import.meta.env.VITE_PUBLIC_URL;
  const [openLoginModal, setOpenLoginModal] = useState(false); // State for login modal
  const [openSearchModal, setOpenSearchModal] = useState(false); // State for search modal
  const [email, setEmail] = useState('');
  const modalRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const onCloseModal = () => {
    setOpenLoginModal(false);
    setOpenSearchModal(false);
    setEmail('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCloseModal();
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
    setOpenSearchModal(true);
  };
  // const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownVisible((prev) => !prev);
  // };




  return (
    <div className="bg-white border-b-1 border-black shadow-md fixed z-50 w-full">
      <div className="flex flex-wrap w-[1300px] mx-auto">
        <div className="flex-none w-54 p-2 text-white mr-1 bg-white">
          <img className="lg:w-52" src={logo} alt="Logo" />
        </div>


        <div className="flex-auto inline-flex">


          <div className="flex-auto inline-flex justify-start items-center mr-1 bg-white pl-4 px-1 ">
            <div><NavLink className='p-2 mx-1 text-base font-normal no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/" activeClassName="active">Home</NavLink></div>
            <div><NavLink className='p-2 mx-1 text-base font-normal no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/aboutus" activeClassName="active">About us</NavLink></div>






            <div className='p-2 mx-1 text-base no-underline  text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline  '>  <MegaMenu.Dropdown toggle={<>Products</>}>
              {/* <div className={isDropdownVisible ? 'visible' : 'hidden'}> */}
              <div className="hidden w-full overflow-hidden  -lg lg:block  ">

                <div className="mx-auto flex items-center p-8">

                  {/*  */}
                  <div>
                    <div className="grid grid-cols-4 gap-2">

                      {/* Box 1 */}
                      <div className="group border-r-[1px] p-4 bg-white ">
                        <a href="/products" >
                          <div className="justify-center">
                            {/* <img className="lg:w-152" src="./src/images/brand-1.jpg" alt="Logo" /> */}
                            <img className="lg:w-52" src={steelsmithlogo} alt="Logo" />
                          </div>
                        </a>
                        <div>
                          <div className='py-2 flex justify-center'><Link className='no-underline font-semibold text-[#003D6A]' to={"./ProductCategories"}>Steel-Smith</Link></div>
                          <p className="text-sm text-gray-500">
                            <nav>
                              <ul>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Toggle Clamps</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Additional Locking Mechanism</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Automotive Clamps</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Roto-Moulding Clamps</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Leveling Pads</Link></li>
                              </ul>
                            </nav>
                          </p>
                          <p className='text-sm'>View All</p>
                        </div>

                      </div>

                      {/* Box 2 */}
                      <div className="group border-r-[1px] p-4 bg-white ">
                        <a href="/products" >
                          <div className="justify-center">
                            {/* <img className="lg:w-152" src="./src/images/brand-2.jpg" alt="Logo" /> */}
                            <img className="lg:w-52" src={imaologo} alt="Logo" />
                          </div>
                        </a>
                        <div>
                          <div className='py-2 flex justify-center'><Link className='no-underline font-semibold text-[#003D6A]' to={"./ProductCategories"}>IMAO</Link></div>
                          <p className="text-sm text-gray-500">
                            <nav>
                              <ul>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>One Touch Fasteners</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>One Touch Clamps</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>One Touch Sliding Locks</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>OD & ID Holding Clamps</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Flex Locators</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Clamps & Stops</Link></li>
                              </ul>
                            </nav>
                          </p>
                          <p className='text-sm'>View All</p>
                        </div>
                      </div>

                      {/* Box 3 */}
                      <div className="group border-r-[1px] p-4 bg-white ">
                        <a href="/products" >
                          <div className="justify-center">
                            {/* <img className="lg:w-152" src="./src/images/brand-3.jpg" alt="Logo" /> */}
                            <img className="lg:w-52" src={kipplogo} alt="Logo" />
                          </div>
                        </a>
                        <div>
                          <div className='py-2 flex justify-center'><Link className='no-underline font-semibold text-[#003D6A]' to={"./ProductCategories"}>KIPP</Link></div>
                          <p className="text-sm text-gray-500">
                            <nav>
                              <ul>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Buffer elements</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Spring Plungers</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Material Handling</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Indexing Plungers</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Grips and Knobs</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Quater-Turn Locks</Link></li>
                              </ul>
                            </nav>
                          </p>
                          <p className='text-sm'>View All</p>
                        </div>
                      </div>


                      {/* Box 4 */}
                      <div className="group p-4 bg-white ">
                        <a href="/products" >
                          <div className="justify-center">
                            {/* <img className="lg:w-152" src="./src/images/brand-4.jpg" alt="Logo" /> */}
                            <img className="lg:w-52" src={turnlocklogo} alt="Logo" />
                          </div>
                        </a>
                        <div>
                          <div className='py-2 flex justify-center'><Link className='no-underline font-semibold text-[#003D6A]' to={"./ProductCategories"}>TurnLock</Link></div>
                          <p className="text-sm text-gray-500">
                            <nav>
                              <ul>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Buffer elements</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Spring Plungers</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Material Handling</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Indexing Plungers</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Grips and Knobs</Link></li>
                                <li><Link className='no-underline text-[#003D6A]' to={"./Products"}>Quater-Turn Locks</Link></li>
                              </ul>
                            </nav>
                          </p>
                          <p className='text-sm'>View All</p>
                        </div>
                      </div>

                      {/* End of Boxes */}


                    </div>
                    <div className='flex justify-center'>
                      <a className=' text-white p-2 mt-4 no-underline' href='/allproducts'>
                        <div className='flex bg-[#003D6A]  hover:bg-gray-900 p-2'>
                          <span className='text-white px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                          </span>
                          <span className='pr-2'>View All Products</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/*  */}


                  {/* <div class="w-1/3 overflow-hidden -lg border">
                    <div class="h-48 bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
                    </div>

                    <div class="flex items-center justify-between gap-2 bg-white p-3">
                      <p class="text-sm text-gray-500">This is some simple filler text.</p>

                      <a href="#" class="inline-block shrink-0 -lg border bg-white px-3 py-1 text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-50 focus-visible:ring active:bg-gray-100">More</a>
                    </div>
                  </div> */}



                </div>

              </div>


            </MegaMenu.Dropdown>
            </div>
            <div><NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/dealernetwork" activeClassName="active">Dealer Network</NavLink></div>
            <div><NavLink className='p-2 mx-1 text-base font-medium no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/markets" activeClassName="active">Markets</NavLink></div>
            <div className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline '>
              <MegaMenu.Dropdown toggle={<>Media</>}>
                <ul className="w-[200px] text-base text-gray-800 no-underline "> {/* Apply your custom class */}
                  <li className='border-b-[1px] px-3 py-2 hover:bg-slate-200'>
                    <a className='no-underline' href='/news'>
                      <span className='no-underline text-base font-medium text-[#003D6A] flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                        News
                      </span>
                    </a>
                  </li>
                  <li className='border-b-[1px] px-3 py-2 hover:bg-slate-200'>
                    <a className='no-underline' href='/events'>
                      <span className='no-underline text-base font-medium text-[#003D6A] flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>

                        Events
                      </span>
                    </a>
                  </li>
                  <li className='border-b-[1px] px-3 py-2 hover:bg-slate-200'>
                    <a className='no-underline' href='/downloads'>
                      <span className='no-underline text-base font-medium text-[#003D6A] flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                        Downloads
                      </span>
                    </a>
                  </li>
                </ul>
              </MegaMenu.Dropdown>
            </div>
            <div><NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/contactus" activeClassName="active">Contact us</NavLink></div>
          </div>


        </div>
        <div className="flex-none inline-flex items-center mr-4">
          <span><NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/register" activeClassName="active">Register</NavLink></span>
          {/* <span><a href="#" className="mr-1 no-underline -lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 "> Login </a></span> */}
          <span>
            <NavLink
              className='p-2 mx-1 text-base no-underline bg-[#003D6A] text-white hover:bg-[#003D6A] hover:text-white hover:no-underline'
              onClick={handleLoginButtonClick} // Use handleLoginButtonClick
            >
              Login
            </NavLink>
          </span>
          <span>
            <Modal show={openLoginModal} size="md" onClose={onCloseModal} popup>
              <div ref={modalRef}>
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
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
          </span>


        </div>
        <div className="flex-none inline-flex justify-end items-center text-white mr-1 bg-white ">





          {/* Starts - Search Icon Modal Box */}

          <span className='p-1 text-gray-700'><button onClick={handleSearchIconClick}>
            
            <img className="lg:w-7 transition ease-in-out delay-2 p-1 hover:-translate-1 hover:scale-110" src={searchicon} alt="Search" />

            </button>
            </span>
          <span>
            <Modal show={openSearchModal} size="xl" id="searchmodal" onClose={onCloseModal} popup>
              <div aria-hidden="searchmodal" ref={modalRef}>
                <Modal.Header />
                <Modal.Body >


                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Search for Models VTC-6561</h3>
                    <div>
                      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:border-blue-500 focus-within:ring-blue-500">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0"
                          placeholder="Search products..."
                        />
                        <span className="text-gray-400 cursor-pointer ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="absolute z-10 mt-1 w-2/3  bg-white border border-gray-300 rounded-md shadow-lg">
                        {/* Suggestions */}
                        <ul className="py-1">
                          {/* Dummy entries */}
                          <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">VTC-6561</li>
                          <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">VTC-6561</li>
                          <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">VTC-6561</li>
                          <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">VTC-6561</li>
                          <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">VTC-6561</li>
                          <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">VTC-6561</li>
                          {/* Add more dummy entries as needed */}
                        </ul>
                      </div>
                    </div>
                  </div>


                </Modal.Body>
              </div>
            </Modal>
          </span>

          {/* Ends - Search Icon Modal Box */}



          {/* <span className='p-1 text-gray-700'><img className="lg:w-8 transition ease-in-out delay-2 p-1 hover:-translate-1 hover:scale-110" src="./src/images/people.png" alt="User" /></span> */}
          <span className='p-1 text-gray-700'><button onClick={() => setIsOpen(true)}>
            <img className="lg:w-8 transition ease-in-out delay-2 mt-1 p-1 hover:-translate-1 hover:scale-110" src={shoppingcart} alt="shopping cart" />
            </button>
            </span>


        </div>

        {/* Drawer Starts */}

        <Drawer open={isOpen} onClose={handleClose} position="right">
          <Drawer.Header title="Enquiry Cart" />
          <Drawer.Items>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Your Enquiry List:
            </p>
            <div className='p-1 border shadow-sm my-2 relative'>
              <div className='grid grid-cols-3 gap-1'>
                <div class="group block mt-2">
                  {/* <img
                  src="../src/images/product1-img.jpg"
                  loading="lazy"
                  alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                  className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                /> */}
                <img className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110" src={productthumbimage} alt="Vertical Hold Down Action Heavy Duty Flanged Base" />
                </div>
                <div className='col-span-2 p-2'><a href="#" className="text-sm leading-snug text-dark no-underline"><span>Vertical Hold Down Action Heavy Duty Flanged Base </span>
                </a>   
                  <p class="text-muted mb-0">
                    <div className='absolute top-0 right-0 p-2'><a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#424242" className="w-4 h-4">
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
              <div className='grid grid-cols-3 gap-1'>
                <div class="group block mt-2">
                <img className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110" src={productthumbimage} alt="Vertical Hold Down Action Heavy Duty Flanged Base" />
                </div>
                <div className='col-span-2 p-2'>
                  <a href="#" className="text-sm leading-snug text-dark no-underline"><span>Vertical Hold Down Action Heavy Duty Flanged Base </span>
                </a>                  
                <p class="text-muted mb-0">
                  <div className='absolute top-0 right-0 p-2'><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#424242" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </a> 
                  </div>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star-half text-warning"></i>
                </p></div>
              </div>
            </div>
            <div className='p-1 border shadow-sm my-2 relative'>
              <div className='grid grid-cols-3 gap-1'>
                <div class="group block mt-2">
                  
                <img className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110" src={productthumbimage} alt="Vertical Hold Down Action Heavy Duty Flanged Base" />
                
                </div>
                <div className='col-span-2 p-2'><a href="#" className="text-sm leading-snug text-dark no-underline"><span>Vertical Hold Down Action Heavy Duty Flanged Base </span>
                </a>                    <p class="text-muted mb-0">
                  <i class="bx bxs-star text-warning">

                    <div className='absolute top-0 right-0 p-2'><a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#424242" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg></a>
                    </div>

                  </i>
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

        {/* Drawer Ends */}

      </div>
    </div>
  );
};

export default Header;
