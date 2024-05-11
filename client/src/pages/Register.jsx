import { Checkbox } from 'flowbite-react'
import React from 'react'

const Register = () => {
  return (
    <div>
        
        <div class="container flex bg-white mt-20 py-6 ">

  {/* column 1 */}         
  <div className="w-2/3 mx-auto px-12">

    <div className="py-12">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 ">Register with Steel-Smith</h2>

      <div>
        <div className="mx-auto text-left  text-gray-500 md:text-lg py-2 p-2 bg-slate-100">Register and unlock features to download :</div>
        <div className='p-2 mt-1'>
        <div>
            <ul>
                <li>Download free CAD models</li>
                <li>Download PDF catalogues</li>
            </ul>
            </div>
        </div>
        </div>
    </div>

    <form class="mx-auto grid  gap-4 sm:grid-cols-2">
      <div>
        <label for="first-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name*</label>
        <input name="first-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="last-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name*</label>
        <input name="last-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
        <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="mobile" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Mobile*</label>
        <input name="mobile" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="username" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Username*</label>
        <input name="username" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password*</label>
        <input name="password" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>


      <div class="sm:col-span-2">
      <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options</button>
        <label for="city" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">City</label>
        <input name="city" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="username" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">State*</label>
        <input name="username" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Country*</label>
        <input name="password" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2 flex">
        <Checkbox className='mt-3 p-2'></Checkbox> <p className='p-2 mt-1 text-base'>I would like to subscribe to newsletter list</p>
      </div>

      

      <div class="flex items-center justify-between sm:col-span-2">
        <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
        <span class="text-sm text-gray-500">*Required</span>
      </div>
      <p class="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </form>
  </div>

  {/* column 2 */}
  <div className="w-1/3 bg-slate-400 bg-[url('../src/images/banner-register.jpg')] bg-left-top bg-cover fill-blue-500 opacity-50"></div>
</div>
</div>
  )
}

export default Register