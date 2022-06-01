import Container from "../../../Shared/Container/header"
import bgshadow from '../../../assets/images/bgshadow.png'
import halfVector from '../../../assets/images/halfVector.png'
import FAQsimage from "../../../assets/images/FAQsimage.png"

const FAQspage = () => {
    return(
        <Container>
            <div className="container mx-auto ml-[9rem] mb-[7rem]">
                <img src={bgshadow} className="w-[700px] ml-[33rem] pb-10" alt="bgshadow"/>
                <img src={FAQsimage} alt="FAQsimage" className="w-[1040px] -mt-[40rem]  rounded-lg"/>
            </div>

            <div className="flex flex-cols-3 ">
                <div className="w-[5rem]"><img src={halfVector} className="" alt="Vector" /></div>
                <div id="accordion-collapse" data-accordion="collapse"  className="w-[75rem]  mx-3">
                    <div id="accordion-collapse-heading-1" className="bg-white my-2 hover:border-aqua-700">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">Is this a real job? 1</span>
                            <svg data-accordion-icon className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    <div/>   
                    
                        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="https://flowbite.com/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">It sounds too good to be true. What’s the catch?</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">What are the start and finish dates for the job? 3</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">How often will the successful employee be paid? 4</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">Who will be my employer and who will I report to? 5</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">Do I need a Wealthbuddy account to apply? 6</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">How do you apply? 7</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">How old do you have to be to apply? 8</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">Do I need a Wealthbuddy account to apply? 9</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">How much is the salary for the role? 10</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">Do I need to be a social media influencer to apply? 11</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">Is there a minimum number of followers I must<br/>have on social media to apply? 12</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">Which social media platform should I post my 60s video? 13</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">What should my application/video include? 14</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">How will I know if my application has been accepted? 15</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">What are the selection criteria? </span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">How will I know if I’m selected for an interview? </span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span className="">Do I have to pay for this application?</span>
                            <svg className="pr-2" width="35" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#E5E5E5"/>
                            <g clip-path="url(#clip0_0_1)">
                            <rect width="1512" height="3584" transform="translate(-1293 -1216)" fill="white"/>
                            <rect x="-1182" y="-29" width="1282" height="105" rx="14.62" fill="#FCFCFC"/>
                            <rect x="-1181.75" y="-28.75" width="1281.5" height="104.5" rx="14.37" stroke="black" stroke-opacity="0.38" stroke-width="0.5"/>
                            <path d="M23.999 3.75C35.1365 3.75 44.249 12.8625 44.249 24C44.249 35.1375 35.1365 44.25 23.999 44.25C12.8615 44.25 3.74902 35.1375 3.74902 24C3.74902 12.8625 12.8615 3.75 23.999 3.75ZM23.999 0.375C11.0053 0.375 0.374023 11.0063 0.374023 24C0.374023 36.9938 11.0053 47.625 23.999 47.625C36.9928 47.625 47.624 36.9938 47.624 24C47.624 11.0063 36.9928 0.375 23.999 0.375Z" fill="#99BF18"/>
                            <path d="M37.499 22.3125H25.6865V10.5H22.3115V22.3125H10.499V25.6875H22.3115V37.5H25.6865V25.6875H37.499V22.3125Z" fill="#99BF18"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="1512" height="3584" fill="white" transform="translate(-1293 -1216)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>

                </div>
                <div className="w-[5rem] border">3</div>
            </div>

            
               



            


 {/* ACCORDION BEGINS HERE */}
 {/* <div className="w-[70rem] border">
                    <div id="accordion-collapse" data-accordion="collapse">
                        
                            <button id="accordion-collapse-heading-1" type="button" class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>What is Flowbite?</span>
                            <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                       
                        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="https://flowbite.com/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                        <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                        <span>Is there a Figma file available?</span>
                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        </h2>
                        <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-3">
                        <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                        <span>What are the differences between Flowbite and Tailwind UI?</span>
                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        </h2>
                        <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul class="pl-5 list-disc text-gray-500 dark:text-gray-400">
                                    <li><a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                    <li><a href="#" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div> */}
                {/* ACCORDION ENDS HERE */}




{/*  accordion */}
<div className="accordion container" id="accordionExample">
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingOne">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingTwo">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>












        </Container>
    )
}
export default FAQspage