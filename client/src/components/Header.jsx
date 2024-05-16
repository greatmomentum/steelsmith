import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, MegaMenu, Modal, TextInput, Label, Checkbox, Drawer } from 'flowbite-react';
import '../dropdown.css';
import EnquiryCart from '../pages/EnquiryCart';



const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const onCloseModal = () => {
    setOpenModal(false);
    setEmail('');
  };


  return (
    <div className="bg-white border-b-1 border-black shadow-md fixed z-50 w-full">
      <div className="flex flex-wrap w-[1300px] mx-auto">
        <div className="flex-none w-54 p-2 text-white mr-1 bg-white">
          <img className="lg:w-52" src="./src/images/SteelSmith.png" alt="Logo" />
        </div>


        <div className="flex-auto inline-flex">


          <div className="flex-auto inline-flex justify-start items-center mr-1 bg-white pl-4 px-1 ">
            <div><NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/" activeClassName="active">Home</NavLink></div>
            <div><NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/aboutus" activeClassName="active">About us</NavLink></div>

            <div className='p-2 mx-1 text-base no-underline  text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline  '> <MegaMenu.Dropdown toggle={<>Products</>}>
              <div className="hidden w-full overflow-hidden  -lg lg:block bg-gray-100 ">

                <div className="mx-auto flex items-center p-8">

                  {/*  */}
                  <div>
                    <div className="grid grid-cols-4 gap-2">

                      <a href="/products" className="group border p-4 bg-white ">
                        <div className="justify-center">
                          <img className="lg:w-152" src="./src/images/brand-1.jpg" alt="Logo" />
                        </div>

                        <div>
                          <div className="mb-1 font-semibold no-underline "> <a className='text-[#003d6a] no-underline' href="/products">Steelsmith</a></div>
                          <p className="text-sm text-gray-500">
                            <ul className='no-underline'>
                              <li><a href='/productcategories'>Toggle Clamps</a></li>
                              <li>Latches</li>
                              <li>Additional Locking Mechanism</li>
                              <li>Automotive Clamps</li>
                              <li>Roto-Moulding Clamps</li>
                              <li>Leveling Pads</li>
                            </ul>
                          </p>
                          <p className='text-sm'>View All</p>
                        </div>
                      </a>

                      <a href="#" className="group gap-4 border p-4 bg-white ">
                        <div className="">
                          <img className="lg:w-152" src="./src/images/brand-2.jpg" alt="Logo" />
                        </div>

                        <div>
                          <div className="mb-1 font-semibold text-[#003d6a]">Imao</div>
                          <p className="text-sm text-gray-500">
                            <ul>
                              <li>One Touch Fasteners</li>
                              <li>One Touch Clamps</li>
                              <li>One Touch Sliding Locks</li>
                              <li>OD & ID Holding Clamps</li>
                              <li>Flex Locators</li>
                              <li>Clamps & Stops</li>
                            </ul>
                          </p>
                          <p className='text-sm'>View All</p>
                        </div>
                      </a>

                      <a href="#" className="group gap-4 border p-4 bg-white ">
                        <div className="">
                          <img className="lg:w-152" src="./src/images/brand-3.jpg" alt="Logo" />
                        </div>

                        <div>
                          <div className="mb-1 font-semibold text-[#003d6a]">Kipp</div>
                          <p className="text-sm text-gray-500">
                            <ul>
                              <li>Buffer elements</li>
                              <li>Spring Plungers</li>
                              <li>Material Handling</li>
                              <li>Indexing Plungers</li>
                              <li>Grips and Knobs</li>
                              <li>Quater-Turn Locks</li>
                            </ul>
                          </p>
                          <p className='text-sm'>View All</p>
                        </div>
                      </a>

                      <a href="#" className="group gap-4 border p-4 bg-white ">
                        <div className="">
                          <img className="lg:w-152" src="./src/images/brand-4.jpg" alt="Logo" />
                        </div>

                        <div>
                          <div className="mb-1 font-semibold text-[#003d6a]">TurnLock</div>
                          <p className="text-sm text-gray-500">
                            <ul>
                              <li>Buffer elements</li>
                              <li>Spring Plungers</li>
                              <li>Material Handling</li>
                              <li>Indexing Plungers</li>
                              <li>Grips and Knobs</li>
                              <li>Quater-Turn Locks</li>
                            </ul>
                          </p>
                          <p className='text-sm'>View All</p>
                        </div>
                      </a>
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
            <div className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline '>
              <MegaMenu.Dropdown toggle={<>Media</>}>
                <ul className="space-y-4 p-4 text-base text-gray-800 no-underline"> {/* Apply your custom class */}
                  <li><a className='no-underline' href='/news'><span className='no-underline text-base font-medium text-[#003D6A]'>News</span></a></li>
                  <li><a className='no-underline' href='/events'><span className='no-underline text-base font-medium text-[#003D6A]'>Events</span></a></li>
                  <li><a className='no-underline' href='/downloads'><span className='no-underline text-base font-medium text-[#003D6A]'>Downloads</span></a></li>
                </ul>
              </MegaMenu.Dropdown>
            </div>
            <div><NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/contactus" activeClassName="active">Contact us</NavLink></div>
          </div>


        </div>
        <div className="flex-none inline-flex items-center mr-4">
          <span><NavLink className='p-2 mx-1 text-base no-underline text-[#003D6A] hover:bg-[#003D6A] hover:text-white hover:no-underline ' to="/register" activeClassName="active">Register</NavLink></span>
          {/* <span><a href="#" className="mr-1 no-underline -lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 "> Login </a></span> */}
          <span><NavLink className='p-2 mx-1 text-base no-underline bg-[#003D6A] text-white hover:bg-[#003D6A] hover:text-white hover:no-underline ' onClick={() => setOpenModal(true)}>Login</NavLink></span>
          <span><Modal show={openModal} size="md" onClose={onCloseModal} popup>
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
          </Modal></span>


        </div>
        <div className="flex-none inline-flex justify-end items-center text-white mr-1 bg-white ">
          <span className='p-1 text-gray-700'><img className="lg:w-7 transition ease-in-out delay-2 p-1 hover:-translate-1 hover:scale-110" src="./src/images/search.png" alt="Search" /></span>
          {/* <span className='p-1 text-gray-700'><img className="lg:w-8 transition ease-in-out delay-2 p-1 hover:-translate-1 hover:scale-110" src="./src/images/people.png" alt="User" /></span> */}
          <span className='p-1 text-gray-700'><button onClick={() => setIsOpen(true)}><img className="lg:w-8 transition ease-in-out delay-2 mt-1 p-1 hover:-translate-1 hover:scale-110" src="./src/images/shopping-cart.png" alt="Enquiry Cart" /></button></span>


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
                <div class="group block mt-2"><img
                  src="../src/images/product1-img.jpg"
                  loading="lazy"
                  alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                  className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                /></div>
                <div className='col-span-2 p-2'><a href="#" className="text-sm text-dark leading-snug"><p>Vertical Hold Down Action Heavy Duty Flanged Base </p></a>
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
                <div class="group block mt-2"><img
                  src="../src/images/product1-img.jpg"
                  loading="lazy"
                  alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                  className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                /></div>
                <div className='col-span-2 p-2'><a href="#" className="text-sm text-dark leading-snug"><p>Vertical Hold Down Action Heavy Duty Flanged Base </p></a>                  <p class="text-muted mb-0">
                  <div className='absolute top-0 right-0 p-2'><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#424242" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </a> </div>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star-half text-warning"></i>
                </p></div>
              </div>
            </div>
            <div className='p-1 border shadow-sm my-2 relative'>
              <div className='grid grid-cols-3 gap-1'>
                <div class="group block mt-2"><img
                  src="../src/images/product1-img.jpg"
                  loading="lazy"
                  alt="Vertical Hold Down Action Heavy Duty Flanged Base"
                  className="h-[80px] w-full object-cover object-center transition duration-200 group-hover:scale-110"
                /></div>
                <div className='col-span-2 p-2'><a href="#" className="text-sm text-dark leading-snug"><p>Vertical Hold Down Action Heavy Duty Flanged Base </p></a>                  <p class="text-muted mb-0">
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
              <span><NavLink className='px-8 py-2 mx-1 text-base no-underline bg-[#003D6A] text-white hover:bg-[#003D6A] hover:text-white hover:no-underline -sm' to="/enquirycart" activeClassName="active">Send Enquiry</NavLink></span>


            </div>
          </Drawer.Items>
        </Drawer>

        {/* Drawer Ends */}

      </div>
    </div>
  );
};

export default Header;
