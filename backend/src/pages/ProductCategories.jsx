
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




// import 'primereact/resources/themes/saga-blue/theme.css';
import defaultImage from '../assets/no-image.jpg'; // Import default image

const ProductCategories = () => {

    const [modalShow, setModalShow] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const data = [
        { id: 1, name: 'John Doe', age: 30, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 2, name: 'Parminder Singh Chopra', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 3, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 4, name: 'John Doe', age: 30, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 5, name: 'Ashwinijha Mujumdar Karelia', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 6, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 7, name: 'John Doe', age: 30, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 8, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 9, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 10, name: 'John Doe', age: 30, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 11, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 12, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 13, name: 'John Doe', age: 30, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 14, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 15, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 16, name: 'John Doe', age: 30, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 17, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 18, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 19, name: 'John Doe', age: 30, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 20, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 21, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 22, name: 'John Doe', age: 30, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 23, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        { id: 24, name: 'Jane Smith', age: 25, view: 'View', edit: 'Edit', delete: 'Delete' },
        // Add more data as needed
    ];

    const columns = [

        { field: 'name', header: 'Name' },
        { field: 'age', header: 'Age' },
        { field: 'view', header: 'View' },
        { field: 'edit', header: 'Edit' },
        { field: 'delete', header: 'Delete' },

        // Add more columns as needed
    ];





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
                    <div className='flex-grow bg-[#f7f3f3] border-b-[1px] border-gray-200 pt-2'>
                        <div className='p-8 bg-white m-4 rounded-xl border-[1px] border-slate-300'>
                            <h1 className='text-lg flex font-bold px-3 py-2 border-b text-gray-800 border-slate-300 '>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>
                                </span>
                                <span className='px-2'>Product Categories</span>
                            </h1>
                            {/* Form */}
                            <div className='p-4'>

                                {/* Tabs */}

                                <div>
                                    <div className="flex space-x-2 justify-end">
                                        <div
                                            className={`cursor-pointer flex items-center px-4 ${activeTab === 1 ? 'text-white bg-slate-800' : 'text-slate-800 bg-slate-300'
                                                }`}
                                            onClick={() => handleTabClick(1)}>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mx-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>

                                            </span>

                                            <span className='pr-2'>
                                                View Categories
                                            </span>
                                        </div>
                                        <div
                                            className={`cursor-pointer flex items-center px-4 ${activeTab === 2 ? 'text-white bg-slate-800' : 'text-slate-800 bg-slate-300'
                                                }`}
                                            onClick={() => handleTabClick(2)}
                                        >
                                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mx-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                            </span>
                                            <span>Edit Categories</span>
                                        </div>
                                        <div
                                            className={`cursor-pointer flex items-center px-4 py-2 ${activeTab === 3 ? 'text-white bg-slate-800' : 'text-slate-800 bg-slate-300'
                                                }`}
                                            onClick={() => handleTabClick(3)}
                                        >
                                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            </span>
                                            <span>Add Categories</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">

                                        {/* Content for Tab 1 */}
                                        {activeTab === 1 &&
                                            <div className="p-4 border-[1px] bg-white border-slate-300">

                                                <h1 className='text-xl font-semibold'>Product Categories</h1>
                                                <DataTable data={data} columns={columns} rowsPerPageOptions={[5, 10, 20]} />

                                            </div>
                                        }

                                        {/* Content for Tab 2 */}
                                        {activeTab === 2 &&

                                            <div className="p-4 border-[1px] bg-gray-100 border-slate-300">

                                                <div className=" bg-white flex flex-col md:ml-auto w-full p-8">
                                                    <div className="relative mb-4">
                                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        />
                                                    </div>
                                                    <div className="relative mb-4">
                                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        />
                                                    </div>
                                                    <div className="relative mb-4">
                                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                                            Message
                                                        </label>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <button className="text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
                                                        Publish
                                                    </button>
                                                </div>

                                            </div>

                                        }

                                        {/* Content for Tab 3 */}
                                        {activeTab === 3 &&

                                            <div className="p-4 border-[1px] bg-gray-100 border-slate-300">

                                                <div className=" bg-white flex flex-col md:ml-auto w-full p-8">
                                                    <div className="relative mb-4">
                                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        />
                                                    </div>
                                                    <div className="relative mb-4">
                                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        />
                                                    </div>
                                                    <div className="relative mb-4">
                                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                                            Message
                                                        </label>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <button className="text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
                                                        Publish
                                                    </button>
                                                </div>

                                            </div>


                                        }

                                    </div>
                                </div>

                                {/* Tabs */}

                            </div>
                            {/* Form */}
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

export default ProductCategories;