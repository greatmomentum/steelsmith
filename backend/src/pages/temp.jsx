
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
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
        

        {/* row 3 */}
        
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
            
            {/* Stats End */}

            
            
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

export default Home;