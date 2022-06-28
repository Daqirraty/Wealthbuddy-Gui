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







      



        </Container>
    )
}
export default FAQspage