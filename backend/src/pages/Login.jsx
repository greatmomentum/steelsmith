
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='w-full fixed top-0 left-0 h-screen flex bg-slate-300'>
      {/* Left Column */}

      <div className={` bg-gray-800 text-white text-base font-semibold flex flex-col transition-all duration-300   ${isCollapsed ? 'w-0' : 'w-1/6'}`}>

        {/* Row 1 */}
        <div className={`flex justify-center items-center border-[#373b52] h-16 ${isCollapsed ? 'hidden' : 'block'} border-b-[1px] border-[#374252]`}>
          SteelSmith Dashboard
        </div>

        {/* Row 2 */}
        <div className={`flex-grow text-white ${isCollapsed ? 'hidden' : 'block'}`}>
          <div className='p-3'>
            {/* button 1 */}
            <NavLink to={'/'}>
            <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
              <div className='text-base font-normal '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
              <div className='text-sm tracking-wide font-normal p-2'>Dashboard</div>
            </div>
            </NavLink>

            {/* products Group Start */}
            <div className='my-1'>

              {/* small txt products */}
              <div className="flex items-center py-2 mx-4">
                <hr className="flex-grow border-[#607788]" />
                <span className="text-[11px] mx-2 text-[#607788] tracking-widest uppercase">Products</span>
                <hr className="flex-grow border-[#607788]" />
              </div>

              {/* button 2 */}
              <NavLink to={'/ProductCategories'}>
              <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
                <div className='text-base font-normal '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <div className='text-sm tracking-wide font-normal p-2'>Product Categories</div>
              </div>
              </NavLink>

              {/* button 3 */}
              <NavLink to={'/Products'}>
              <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
                <div className='text-base font-normal '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <div className='text-sm tracking-wide font-normal p-2'>Products</div>
              </div>
              </NavLink>

              {/* button 4 */}
              <NavLink to={'/Models'}>
              <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
                <div className='text-base font-normal '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                  </svg>
                </div>
                <div className='text-sm tracking-wide font-normal p-2'>Models</div>
              </div>
              </NavLink>

              {/* button 5 */}
              <NavLink to={'/Catalogues'}>
              <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
                <div className='text-base font-normal '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                  </svg>
                </div>
                <div className='text-sm tracking-wide font-normal p-2'>Catalogues</div>
              </div>
              </NavLink>

            </div>
            {/* products Group End */}

            {/* small txt products */}
            <div className="flex items-center py-2 mx-4">
              <hr className="flex-grow border-[#607788]" />
              <span className="text-[11px] mx-2 text-[#607788] tracking-widest uppercase">Media</span>
              <hr className="flex-grow border-[#607788]" />
            </div>

            {/* button 6 */}
            <NavLink to={'/DealerNetwork'}>
            <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
              <div className='text-base font-normal '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
              </div>
              <div className='text-sm tracking-wide font-normal p-2'>Dealer Network</div>
            </div>
            </NavLink>

            {/* button 7 */}
            <NavLink to={'/Markets'}>
            <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
              <div className='text-base font-normal '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
              </div>
              <div className='text-sm tracking-wide font-normal p-2'>Markets</div>
            </div>
            </NavLink>

            {/* button 8 */}
            <NavLink to={'/News'}>
            <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
              <div className='text-base font-normal '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </div>
              <div className='text-sm tracking-wide font-normal p-2'>News</div>
            </div>
            </NavLink>

            {/* button 9 */}
            <NavLink to={'/Events'}>
            <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
              <div className='text-base font-normal'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
              </div>
              <div className='text-sm tracking-wide font-normal p-2'>Events</div>
            </div>
            </NavLink>

            {/* Settings Group Start */}
            <div className='my-4 border-t [1px] border-[#3f4b5d] py-4'>

              {/* button 10 */}
              <NavLink to={'/RegisteredUsers'}>
              <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
                <div className='text-base font-normal '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <div className='text-sm tracking-wide font-normal p-2'>Registered Users</div>
              </div>
              </NavLink>

              {/* button 11 */}
              <NavLink to={'/Login'}>
              <div className='bg-[#374252] hover:bg-[#3f4b5d] active:bg-[#3f4b5d]  active:ring-1 active:ring-[#326fa8] hover:ring-blue-400 outline-offset-1 m-1 rounded px-4 flex items-center divide-x-[1px] divide-[#3c4c64]'>
                <div className='text-base font-normal '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                  </svg>
                </div>
                <div className='text-sm tracking-wide font-normal p-2'>Logout</div>
              </div>
              </NavLink>



            </div>

            {/* Settings Group End */}



          </div>
        </div>

        {/* row 3 */}
        <div className={`flex items-center justify-end font-light text-white border-t-[1px] border-[#373b52] h-16 ${isCollapsed ? 'hidden' : 'block'}`}>
          <div className='p-4 cursor-pointer hover:scale-105 hover:transition-transform ease-in-out' onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>


          </div>
        </div>
      </div>

      {/* Right Column */}


      <div className={`flex-grow ml-auto transition-all duration-300 ${isCollapsed ? 'ml-0' : 'ml-1/6'}`}>
        <div className="h-full overflow-auto">
          {/* Header starts */}
          <div className='bg-white border-b-[1px] flex items-center border-gray-200 h-16 '>
            <div className='p-4 cursor-pointer hover:scale-125 hover:transition-transform ease-in-out' onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            <div className='flex w-full justify-between items-center'>
              <div className='font-semibold tracking-normal'>Dashboard Panel</div>
              <div className='p-2 mr-4 flex text-sm tracking-wide font-medium text-gray-600'>Welcome Admin!
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Header ends */}


          {/* Main Content Starts */}

          <div className='flex-grow bg-[#f3f4f7] border-b-[1px] border-gray-200'>

            {/* Stats Start */}
            <div className='bg-slate-300 w-full p-6 grid grid-cols-4 gap-4'>
              <div className='bg-white flex h-[140px] rounded-xl justify-center items-center font-bold text-xl text-gray-600 border-[1px] border-gray-300'>
                <div className='mb-10'>
                  <p className='py-3 text-center text-lg font-normal'>Total Product Categories</p>
                  <p className='text-[60px] font-semibold text-center py-2 text-gray-800 tracking-tighter'>232</p>
                </div>
              </div>
              <div className='bg-white flex h-[140px] rounded-xl justify-center items-center font-bold text-xl text-gray-600 border-[1px] border-gray-300'>
                <div className='mb-10'>
                  <p className='py-3 text-center text-lg font-normal'>Total Products</p>
                  <p className='text-[60px] font-semibold text-center py-2 text-gray-800 tracking-tighter'>2502</p>
                </div>
              </div>
              <div className='bg-white flex h-[140px] rounded-xl justify-center items-center font-bold text-xl text-gray-600 border-[1px] border-gray-300'>
                <div className='mb-10'>
                  <p className='py-3 text-center text-lg font-normal'>Total Models</p>
                  <p className='text-[60px] font-semibold text-center py-2 text-gray-800 tracking-tighter'>4500</p>
                </div>
              </div>
              <div className='bg-white flex h-[140px] rounded-xl justify-center items-center font-bold text-xl text-gray-600 border-[1px] border-gray-300'>
                <div className='mb-10'>
                  <p className='py-3 text-center text-lg font-normal'>Registered Users</p>
                  <p className='text-[60px] font-semibold text-center py-2 text-gray-800 tracking-tighter'>232</p>
                </div>
              </div>
            </div>
            {/* Stats End */}
            {/* Stats Start */}
            <div className='bg-slate-300 w-full px-6 pb-6 grid grid-cols-4 gap-4'>
              <div className='bg-white rounded-xl justify-center items-center font-bold text-xl text-gray-600 border-[1px] border-gray-300'>
                <div className='flex justify-center items-center'>
                  <p className='py-4 text-center text-lg font-normal'>Total Dealers</p>
                  <p className='text-[25px] font-semibold text-center px-2 py-2 text-gray-800 tracking-tighter'>254</p>
                </div>
              </div>
              <div className='bg-white rounded-xl justify-center items-center font-bold text-xl text-gray-600 border-[1px] border-gray-300'>
                <div className='flex justify-center items-center'>
                  <p className='py-4 text-center text-lg font-normal'>Markets</p>
                  <p className='text-[25px] font-semibold text-center px-2 py-2 text-gray-800 tracking-tighter'>84</p>
                </div>
              </div>
              <div className='bg-white rounded-xl justify-center items-center font-bold text-xl text-gray-600 border-[1px] border-gray-300'>
                <div className='flex justify-center items-center'>
                  <p className='py-4 text-center text-lg font-normal'>News</p>
                  <p className='text-[25px] font-semibold text-center px-2 py-2 text-gray-800 tracking-tighter'>04</p>
                </div>
              </div>
              <div className='bg-white rounded-xl justify-center items-center font-bold text-xl text-gray-600 border-[1px] border-gray-300'>
                <div className='flex justify-center items-center'>
                  <p className='py-4 text-center text-lg font-normal'>Events</p>
                  <p className='text-[25px] font-semibold text-center px-2 py-2 text-gray-800 tracking-tighter'>54</p>
                </div>
              </div>
            </div>
            {/* Stats End */}

            <div className='p-8 bg-white m-4 rounded-xl border-[1px] border-slate-300'>
              <h1 className='text-base font-bold px-3 py-2 border-b text-slate-600 border-slate-300'>Welcome to the Admin Panel</h1>
              <div className='p-4'>
                <p className='text-base font-semibold py-2 text-[#cf2b2b]'>Manage your application with care and follow these guidelines to ensure a smooth and secure experience:</p>
                <ul className='text-base font-normal text-gray-600 '>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Do not share your passwords or login credentials with anyone.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Ensure that the data you copy and paste into forms is clean and free of any malicious code.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Avoid uploading corrupt or suspicious images and files.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Regularly update your password and use a strong, unique password for your account.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Always log out of the admin panel when you are finished using it.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Be cautious when granting permissions to other users.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Regularly backup important data to prevent data loss.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Report any unusual activity or security concerns to the IT team immediately.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Ensure that your system's antivirus software is up to date.</li>
                </ul>
              </div>
            </div>
            <div className='p-8 bg-white m-4 rounded-xl border-[1px] border-slate-300'>
              <h1 className='text-base font-bold px-3 py-2 border-b text-slate-600 border-slate-300'>Welcome to the Admin Panel</h1>
              <div className='p-4'>
                <p className='text-base font-semibold py-2 text-[#cf2b2b]'>Manage your application with care and follow these guidelines to ensure a smooth and secure experience:</p>
                <ul className='text-base font-normal text-gray-600 '>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Do not share your passwords or login credentials with anyone.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Ensure that the data you copy and paste into forms is clean and free of any malicious code.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Avoid uploading corrupt or suspicious images and files.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Regularly update your password and use a strong, unique password for your account.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Always log out of the admin panel when you are finished using it.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Be cautious when granting permissions to other users.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Regularly backup important data to prevent data loss.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Report any unusual activity or security concerns to the IT team immediately.</li>
                  <li className='flex items-center'><img className='w-3 h-3 m-2' src='../src/assets/checkmark.png'></img>Ensure that your system's antivirus software is up to date.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content Ends */}

          {/* footer start */}
          <div className='bg-white border-t-[1px] flex items-center justify-end text-[13px] pr-4 font-medium tracking-wide text-gray-500 border-gray-200 h-16'>
            © Copyright Reserved. SteelSmith.com
          </div>
          {/* footer ends */}
        </div>
      </div>
    </div>
  );
}

export default Login;