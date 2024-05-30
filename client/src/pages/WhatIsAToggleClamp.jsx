import React from 'react';
import whatisatoggleclamp from '../images/what-is-toggle-clamp.jpg';
import whatisatoggleclampimg1 from '../images/what-is-toggle-clamp-img1.jpg';
import whatisatoggleclampimg2 from '../images/what-is-toggle-clamp-img2.jpg';
import whatisatoggleclampimg3 from '../images/what-is-toggle-clamp-img3.jpg';

const WhatIsAToggleClamp = () => {
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container flex mx-auto ">
                    <div className="w-3/4 md:items-start md:text-left py-36 mb-16 md:mb-0 items-center text-left px-10 ">
                        <h1 className="title-font text-xl mb-3 font-semibold text-gray-900 text-left">
                            What is a Toggle Clamp?
                        </h1>
                        <p className="mb-8 text-sm font-normal text-justify">
                            Toggle clamp is a simple Mechanism which holds instantly. The Toggle Clamps Consist of a handle to operate, a Clamping Arm to Reach the work piece, linkages for multiplying the applied force, and a base for mounting at the workplace on it’s base. The handle is operated which thereby moves the clamping arm to hold the work piece. A required clamping force is achieved and exerted on the work piece. Under this action the Toggle Clamp Holds the work piece firmly and positively.
                        </p>

                        <h2 className="text-lg mb-4 font-semibold text-gray-900 text-left">Toggle Action Force Factors</h2>
                        <h4 className="text-base mb-2 font-semibold text-gray-900 text-left">Holding Capacity</h4>
                        <p className="mb-8 text-sm font-normal text-justify text-gray-900">
                            The holding capacity mentioned for each clamp refers to the maximum force, which the clamp can withstand after being over-centered without damage to the clamp and without the toggle unlocking due to distortion of the clamp.
                            The over-center dimension is carefully chosen in relation to the elasticity of the clamp to maximize clamping force while ensuring that the clamp locks closed even under vibration or intermittent loading.
                            For Hold Down Clamps, holding capacity is measured with the spindle at the farthest end of the clamping arm and will increase as the spindle goes closer to the clamping arm.
                        </p>
                        <h4 className="title-font text-lg mb-2 font-medium text-gray-900 text-left">Clamping Force</h4>
                        <p className="mb-8 text-sm font-normal text-justify text-gray-900">
                        Clamping Force, the amount of force actually applied to the work piece by closing and locking the clamp, is generally less than the stated holding capacity. Actual clamping force depends on many factors including; spindle position, proper spindle height adjustment, spindle cushioning, work piece material and the clamps mechanical advantage. In most cases, roughly 1/3rd of the stated holding capacity can be applied by hand with medium effort.
                        </p>

                        <h4 className="title-font text-lg mb-2 font-medium text-gray-900 text-left">Toggle Principle</h4>
                        <p className="mb-8 text-sm font-normal text-justify text-gray-900">
                        Toggle action clamps operate through a linkage system of levers and pivots. The fixed length levers, connected by pivot pins supply the action and clamping force. Toggle action has an over centre lock point which is a fixed stop and linkage. Once in the over centre position, the clamp cannot move or unlock unless the linkage is moved. All types of toggle clamps have same action, just oriented differently.
                        </p>

                        <h4 className="title-font text-lg mb-2 font-medium text-gray-900 text-left">The Toggle Mechanism in a clamp has three functions</h4>
                        <p className="mb-8 ">
                            <ul className='list-disc pl-3 space-y-2 pt-2 '>
                                <li className='text-sm font-normal text-justify text-gray-900'>To multiply applied load at the handle into a high clamping force to hold the work piece.</li>
                                <li className='text-sm font-normal text-justify text-gray-900'>To create an over – centre lock to prevent the clamp from opening & releasing the work piece until opened by the operator.</li>
                                <li className='text-sm font-normal text-justify text-gray-900'>To rapidly open & close the clamp giving a maximum clearance in which to load & unload the work piece.</li>
                            </ul>
                            <div className='flex space-x-2 pt-10'>
                                <span>
                                    <img className="object-cover object-center rounded" alt="What is a Toggle Clamp" src={whatisatoggleclampimg1} />
                                </span>
                                <span>
                                    <img className="object-cover object-center rounded" alt="What is a Toggle Clamp" src={whatisatoggleclampimg2} />
                                </span>
                                <span>
                                    <img className="object-cover object-center rounded" alt="What is a Toggle Clamp" src={whatisatoggleclampimg3} />
                                </span>
                            </div>
                            
                        
                        </p>
                        
                    </div>
                    <div className=" align-top mt-20 w-1/4">
                        <img
                            className="object-cover object-center rounded"
                            alt="What is a Toggle Clamp"
                            src={whatisatoggleclamp}
                        />
                    </div>
                </div>
            </section>



        </div>
    )
}

export default WhatIsAToggleClamp