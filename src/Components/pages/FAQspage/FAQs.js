import Container from "../../../Shared/Container/header"
import bgshadow from '../../../assets/images/bgshadow.png'
import halfVector from '../../../assets/images/halfVector.png'
import FAQsimage from "../../../assets/images/FAQsimage.png"

const FAQspage = () => {
    return(
        <Container>
            <div className="container mx-auto ml-[9rem] mb-[7rem]">
                <img src={bgshadow} className="w-[700px] ml-[30rem] pb-10" alt="bgshadow"/>
                <img src={FAQsimage} alt="FAQsimage" className="w-[1040px] -mt-[40rem]  rounded-lg"/>
            </div>

            <div className="flex flex-cols-2 mb-[7rem]">
                <div className="w-[5rem]"><img src={halfVector} className="" alt="Vector" /></div>
                <div class="accordion ml-4" id="accordionExample">
                    <div className="container mx-auto w-[75rem] mb-3">
                    <div class="accordion-item bg-white rounded-lg border hover:border-blue-300">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button relative flex items-center w-full py-2 px-5 text-black bg-white transition focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Is this a real job? 
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body py-4 px-5">
                                <strong>This is the first item's accordion body.</strong> It is shown by default
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                It sounds too good to be true. What’s the catch? 
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body py-4 px-5">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                What are the start and finish dates for the job?  
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body py-4 px-5">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-gray-800 text-left bg-white rounded-lg transition focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"
                                    aria-controls="collapseFour">
                                    How often will the successful employee be paid?  
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5 text-base text-gray-800 text-left bg-white rounded-lg transition focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                    aria-controls="collapseFive">
                                    Who will be my employer and who will I report to? 
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header mb-0" id="headingSix">
                                <button className="accordion-button collapsed relative flex
                                    items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white rounded-lg transition focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                    aria-controls="collapseSix">
                                    Do I need a Wealthbuddy account to apply?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingSeven">
                                <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true"
                                    aria-controls="collapseSeven">
                                    How do you apply? 
                                </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingEight">
                                <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true"
                                    aria-controls="collapseEight">
                                    How old do you have to be to apply?   
                                </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingNine">
                                <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true"
                                    aria-controls="collapseNine">
                                    Do I need a Wealthbuddy account to apply?   
                                </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingEleven">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true"
                                    aria-controls="collapseEleven">
                                    How much is the salary for the role?    
                                </button>
                            </h2>
                            <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingTen"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingTwelve">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="true"
                                    aria-controls="collapseTwelve">
                                    Do I need to be a social media influencer to apply?    
                                </button>
                            </h2>
                            <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingThirteen">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="true"
                                    aria-controls="collapseThirteen">
                                    Is there a minimum number of followers I must<br/>have on social media to apply?    
                                </button>
                            </h2>
                            <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-3 px-3">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingFiftteen">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiftteen" aria-expanded="true"
                                    aria-controls="collapseFiftteen">
                                    Which social media platform should I post my 60s video?    
                                </button>
                            </h2>
                            <div id="collapseFiftteen" className="accordion-collapse collapse" aria-labelledby="headingFiftteen"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingSixteen">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="true"
                                    aria-controls="collapseSixteen">
                                    What should my application/video include?    
                                </button>
                            </h2>
                            <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingSeventeen">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="true"
                                    aria-controls="collapseSeventeen">
                                    How will I know if my application has been accepted?    
                                </button>
                            </h2>
                            <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingEighteen">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="true"
                                    aria-controls="collapseEighteen">
                                    What are the selection criteria?    
                                </button>
                            </h2>
                            <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingNineteen">
                            <button className="accordion-button collapsed relative flex items-center w-full py-2 px-5
                                    text-base text-black text-left bg-white rounded-lg transition focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="true"
                                    aria-controls="collapseNineteen">
                                    How will I know if I’m selected for an interview?    
                                </button>
                            </h2>
                            <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto w-[75rem] mb-3">
                        <div className="accordion-item bg-white border hover:border-blue-300">
                            <h2 className="accordion-header" id="headingTwenty">
                            <button className=" accordion-button collapsed relative flex items-center w-full py-2
                                px-5 text-base text-gray-800 text-left bg-white rounded-lg transition focus:outline-none
                            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="true"
                                aria-controls="collapseTwenty">
                                Do I have to pay for this application?
                            </button>
                            </h2>
                            <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body py-4 px-5">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default,                    </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>







        {/* <div className="accordion w-[75rem] mx-6 " id="accordionExample">
                    <div className="accordion-item bg-white my-2">
                        <h2 class="accordion-header" id="headingOne">
                            <button type="button" class="accordion-button flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                        </h2>
                    <div/>   
                    
                        <div id="headingOne" class="hidden" aria-labelledby="collapseOne">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-white my-2 rounded-md hover:border-aqua-300">
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                        <button type="button" class="flex justify-between pl-4 items-center  w-full text-left rounded-lg border  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-blue-300 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
                <div className="w-100px border "></div> */}



        </Container>
    )
}
export default FAQspage