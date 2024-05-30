import React from 'react'
import VerticalHoldDownAction from '../images/Toggle-action-Vertical-Hold-Down-Action.jpg';
import HorizontalHoldDownAction from '../images/Toggle-action-Horizontal-Hold-Down-Action.jpg';
import StraightLineAction from '../images/Toggle-action-Straight-Line-Action.jpg';
import PullActionClamps from '../images/Toggle-action-Pull-Action-Clamps.jpg';
import PullBackClamps from '../images/Toggle-action-Pull-Back-Clamps.jpg';

const TypesOfToggleAction = () => {
  return (
    <div>
      <section className="text-gray-600 py-28 body-font ">

        {/* Row 1 */}
        <div className="container flex mx-auto items-center bg-white">
          <div className="w-1/2 text-left px-10">
            <h1 className="title-font text-xl mb-3 font-semibold text-gray-900 text-left">
              Vertical Hold Down Action : (VTC- Series)
            </h1>
            <p className="text-sm font-normal text-justify">
              As the name implies clamps of this type hold the work piece with a downward clamping action. These clamps are manufactured with a holding capacity up to 3000 kgs. The clamping exhibits a minimum of 90o opening angle giving full clearance for loading & unloading of workpiece. Clamping arm can be solid bar, U shaped or fixed hole to suit individual requirements.
            </p>
          </div>
          <div className=" bg-slate-100 w-1/2">
            <div className='flex justify-center '>
              <img
                className="object-cover object-center rounded w-[250px] "
                alt="hero"
                src={HorizontalHoldDownAction}
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="container flex mx-auto items-center bg-white">
          <div className=" bg-slate-100 w-1/2">
            <div className='flex justify-center '>
              <img
                className="object-cover object-center rounded w-[250px]"
                alt="hero"
                src={VerticalHoldDownAction}
              />
            </div>
          </div>
          <div className="w-1/2 md:items-start md:text-left mb-16 md:mb-0 text-left px-10 py-24 ">
            <h1 className="title-font text-xl mb-3 font-semibold text-gray-900 text-left ">
              Horizontal Hold Down Action : (H- Series)
            </h1>
            <p className="mb-8 text-sm font-normal text-justify">
              The holding action in these types of Toggle Clamps is same as VTC-Series clamp.
              The outstanding characteristic is the low height design. Unlike the handle & the
              clamping bar of the VTC-Series, these of the H-Series clamps move in opposite
              direction. The holding capacities range upto 1,000 kgs. The clamping arm can be solid bar, U shaped or fixed hole type.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="container flex mx-auto items-center bg-white">
          <div className="w-1/2 md:items-start md:text-left mb-16 md:mb-0 py-24 text-left px-10 ">
            <h1 className="title-font text-xl mb-3 font-semibold text-gray-900 text-left">
              Straight Line Action : (HTC- Series)
            </h1>
            <p className="mb-8 text-sm font-normal text-justify">
              The straight line action toggle clamps design uses a straight-line or push/pull, Toggle clamping action. The push/pull handle is easy to operate & moves the plungers of the clamp in and out along its axis. Most of these clamps can be locked in two positions, allowing you to use them as either push or pull clamps. These clamps are manufactured in a variety of models to accommodate a wide range of load ratings.(45 kgs – 4,500 kgs)
            </p>
          </div>
          <div className="bg-slate-100 w-1/2">
            <div className='flex justify-center '>
              <img
                className="object-cover object-center rounded w-[350px]"
                alt="hero"
                src={StraightLineAction}
              />
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="container flex mx-auto items-center bg-white">
          <div className=" bg-slate-100 w-1/2">
            <div className='flex justify-center '>
              <img
                className="object-cover object-center rounded w-[250px]"
                alt="hero"
                src={PullActionClamps}
              />
            </div>
          </div>
          <div className="w-1/2 md:items-start md:text-left mb-16 md:mb-0 text-left px-10 ">
            <h1 className="title-font text-xl mb-3 font-semibold text-gray-900 text-left">
              Pull Action Clamps : (PAH-Series)
            </h1>
            <p className="mb-8 text-sm font-normal text-justify">
              Steel-Smith’s Pull Action Clamps are designed for sealing chambers, doors, mould closures or other such applications requiring closure mechanisms. The handle can be moved to place the clamping U – Bolt Bar hook around the opposing latch & pull down to reach the lock position. The threaded “hook” or “U-bolt” type bar offer an adjustment feature. The clamps can withstand pressures from 150 kgs. to 3000 kgs.
            </p>
          </div>
        </div>

        {/* Row 5 */}
        <div className="container flex mx-auto items-center bg-white">
          <div className="w-1/2 md:items-start md:text-left mb-16 md:mb-0 py-24 text-left px-10 ">
            <h1 className="title-font text-xl mb-3 font-semibold text-gray-900 text-left">
              Pull Back Clamps
            </h1>
            <p className="mb-8 text-sm font-normal text-justify">
              These Clamps have a similar action as the Hold Down Action Clamps. In this series the user to Pull Back the handle to open the Clamp. This series is most suitable for mounting the clamp on the front face of the equipment.
            </p>
          </div>
          <div className=" bg-slate-100 w-1/2">
            <div className='flex justify-center '>
              <img
                className="object-cover object-center rounded w-[350px]"
                alt="hero"
                src={PullBackClamps}
              />
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default TypesOfToggleAction