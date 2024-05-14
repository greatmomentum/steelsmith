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

                  <ul class="space-y-3">
                    <li class="text-body-color dark:text-dark-6 flex text-base">
                      <span class="text-primary mr-2.5 mt-0.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_980_24852)">
                            <path
                              d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                              fill="currentColor"
                            />
                            <path
                              d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_980_24852">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      Download free CAD models
                    </li>

                    <li class="text-body-color dark:text-dark-6 flex text-base">
                      <span class="text-primary mr-2.5 mt-0.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_980_24852)">
                            <path
                              d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                              fill="currentColor"
                            />
                            <path
                              d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_980_24852">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      Download PDF catalogues
                    </li>


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


              <label for="city" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">City</label>


              <input name="city" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div>

              <label for="username" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">State*</label>
              <select className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
                <option value="fruit">Maharashtra</option>
                <option value="vegetable">Punjab</option>
                <option value="meat">Haryana</option>
                <option value="meat">Tamilnadu</option>
                <option value="meat">Kerala</option>
                <option value="meat">Telangana</option>
                <option value="meat">Andhra Pradesh</option>
                <option value="meat">Assam</option>
                <option value="meat">Meghalaya</option>
                <option value="meat">Arunachal Pradesh</option>
                <option value="meat">New Delhi</option>
                <option value="meat">Uttar Pradesh</option>
                <option value="meat">Bihar</option>
                <option value="meat">Kolkatta</option>
                <option value="meat">Banglore</option>
              </select>
            </div>

            <div>
              <label for="username" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Country*</label>
              <select className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
                <option value="fruit">India</option>
                <option value="vegetable">Australia</option>
                <option value="meat">Austria</option>
                <option value="meat">UK</option>
                <option value="meat">USA</option>
                <option value="meat">Russia</option>
                <option value="meat">New Zealand</option>
                <option value="meat">SriLanka</option>
                <option value="meat">Nepal</option>
                <option value="meat">Dubai</option>
                <option value="meat">UAE</option>
              </select>
            </div>




            <div class="sm:col-span-2 flex">
              <Checkbox className='mt-3 p-2'></Checkbox> <p className='p-2 mt-1 text-base'>I would like to subscribe to newsletter list</p>

            </div>
            <div className="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.
            </div>



            <div class="flex items-center justify-between sm:col-span-2 pb-20">
              <button class="inline-block rounded-lg bg-[#003D6A] px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Register</button>

            </div>
          </form>
        </div>

        {/* column 2 */}
        <div className="w-1/3 bg-slate-400 bg-[url('../src/images/banner-register.jpg')] bg-left-top bg-cover fill-blue-500 opacity-50"></div>
      </div>
    </div>
  )
}

export default Register