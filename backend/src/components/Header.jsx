import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    
    <div className='bg-white border-b-[1px] flex items-center border-gray-200 h-16'>
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
  
  );
}

export default Header;
