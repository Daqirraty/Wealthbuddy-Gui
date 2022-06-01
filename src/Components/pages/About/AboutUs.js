
import Container from '../../../Shared/Container/header'
import Vector from '../../../assets/images/Vector.png'
import Vector2 from '../../../assets/images/Vector2.png'
import Rectangle57 from '../../../assets/images/Rectangle57.png'
import MainResponsy from '../../../assets/images/MainResponsy.png'
import Howtoapply from '../../../assets/images/Howtoapply.png'
import Aboutthejob from '../../../assets/images/Aboutthejob.png'
import bgshadow from '../../../assets/images/bgshadow.png'
import Selection from '../../../assets/images/Selection.png'
import Employer from '../../../assets/images/Employer.png'
import Ellipsearrow from  '../../../assets/images/Ellipsearrow.png' 




const AboutUs = () =>{
    return(
        <Container>
            
                <div className=" flex flex-wrap p-[5rem] ">
                    <div className=" w-1/2 px-8 pb-10 "><img src={Rectangle57} alt="Rectangle57"className="w-[615px] drop-shadow-2xl  -mt-10 ml-10  rounded-lg bg-slate-200 hover:border-2 border-cyan-300 hover:rounded-lg"/></div>
                    <div className="w-1/4 px-10 ">
                        <img src={Aboutthejob} className="pt-[12rem]" alt="Aboutthejob" />
                    </div>
                    <div className="ml-[7.88rem]"><img src={Vector2} className="" alt="Vector2"/></div>
                    
                    <img src={Vector} className="-mt-[10rem] mr-[5rem]"  alt="Vector" />
                </div>

                

                <div className=" container mx-auto p-[5rem] w-[1120px]">
                    <img src={MainResponsy} className="w-[223px]" alt="MainResponsy" /><br/>
                    <p className="fontSize-[30rem] fontFamily-Montserrat leading-normal text-xm">
                        Employment responsibilities will include the following:<br/>
                        1. Providing weekly updates via social media/blog.<br/>
                        2. Represent Wealthbuddy by Meristem at various functions.<br/>
                        3. Be a true Wealthbuddy ‘Ambassador’ and participate in media interviews<br/>as required.
                        4. Act responsibly always and in accordance with the reasonable directions of<br/> Wealthbuddy Management.
                    </p>
                </div>

                <div className="container mx-auto w-[70rem] p-[5rem]">
                    <img src={Howtoapply} className="w-[180px]" alt="Howtoapply" /><br/>
                    <div>
                        <h1 className="font-size-[1rem] fontFamily-Montserrat leading-normal font-bold text-3xl">Want Naija’s hottest job? </h1>
                        <p className="font-size-[10rem] fontFamily-Montserrat leading-normal text-xm">
                            If you enjoy connecting and engaging with new people on digital platforms<br/>
                            and you can spare 3 months to help people grow their money, you already<br/>
                            stand a good chance. It’s easy to apply.
                        </p>
                    </div> 
                </div>
               
                <div class=" container mx-auto w-[70rem] pb-8 flex px-[5rem]">
                    {/* <div className='container mx-auto'><img src={bgshadow}/></div> */}
                    <div class="flex-1 w-auto mr-9">
                        <h1 className='text-[#99BF18] font-bold text-3xl pb-1'>Step1</h1>
                        <div className='bg-white p-5 border border-white-900 rounded-md w-[500.5px]  drop-shadow-2xl hover:border-cyan-300'>
                            <p>Create a video application (in 60<br/> seconds or less) and post it to your social<br/> media page (Instagram, Facebook,<br/>LinkedIn, TikTok) using the<br/>hashtags #Switchupyourlifestyle and<br/>#NaijasHottestJob.<br/><br/>
                                In an entertaining and engaging way,<br/>tell us why you’re the best person for the<br/>job and demonstrate your knowledge of<br/>the Wealthbuddy app.<br/><br/>
                                Don’t forget to tag us in your video.<br/> Our social media handles are at the<br/>bottom of this page.
                            </p>
                        </div>

                    </div>
                    <div class="flex-1 w-auto">
                        <div class="flex flex-col">
                            <div>
                                <div><h1 className='text-[#99BF18] font-bold text-3xl pb-1 '>Step2</h1></div>
                                <div className='bg-white p-3 w-[350px] border border-white-500 rounded-lg drop-shadow-2xl hover:border-cyan-300'><p>If you don’t already have one, open a<br/> Wealthbuddy account. You can do so<br/><a href='#' className='text-[#99BF18]'>here.</a></p></div><br/>
                            </div>
                            <div>
                                <div><h1 className='text-[#99BF18] font-bold text-3xl pb-1'>Step3</h1></div>
                                <div className='bg-white p-3 mb-4 border w-[350px] rounded-lg drop-shadow-2xl hover:border-cyan-300'><p>Fill out a brief application form. That’s it!</p></div>
                            </div>
                            <div><p className=''>Twenty candidates will be shortlisted.<br/>
                                    The top 5 will be selected via a voting process<br/>on our website – so make sure you encourage<br/>
                                    all your friends and family to vote if you get<br/>shortlisted.<br/>
                                    The top 5 will be interviewed and the<br/>successful candidate will be announced.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* slecton div */}
                <div className=" container mx-auto w-[80rem] px-[5rem] m-5 mb-5">
                    <div><img src={Selection} className="w-[200px] m-5 mb-3" alt="Selection" /></div>
                    <div className="px-6">
                        <p>We’re looking for someone with an adventurous attitude,
                        an interesting<br/>personality and good communication skills. Wealthbuddy by Meristem will be<br/>selecting applicants based on:<br/><br/>
                        - Enthusiasm for the role<br/>
                        - Entertainment value (personality and creativity)<br/>
                        - Presentation skills (being media-friendly)
                        </p>
                    </div>
                </div>
                {/* Close of selection div */}

                {/* Employer div */}
                <div className=" container mx-auto w-[80rem] px-[5rem] mb-5">
                    <div className="px-5 py-2"><img src={Employer} className="w-[148px]" alt="Employer" /></div>
                    <div className="px-6">
                        <p> Meristem is a capital market conglomerate, that provides a plethora of distinct<br/> financial services
                        through a range of products in wealth management, <br/> stockbroking, 
                        financial advisory, trusteeship, registrars and probate management <br/> services, 
                        investment banking, lease, and loans. With these offerings
                        we have <br/> continued to fulfil our promise of wealth creation, preservation and transfer for all<br/> clients.<br/><br/>
                        For over 19 years, we have innovated, grown and attained the status of the <br/> preferred financial
                        services provider for individuals, and corporations in Nigeria <br/> and across the world, 
                        through a rich history of excellent customer service, <br/> demonstrated financial 
                        services expertise, combined with an enviable workplace <br/> culture of thoroughbred professionals. 
                        This has kept us true to our founding <br/> promise “Let’s grow wealth for you”.<br/>
                        </p>
                    </div>
                </div>
                <div className="container w-[160px] mb-3 mx-auto flex flex-row md:flex-col rounded-lg justify-end">
                <button class="bg-[#99BF18] text-white font-bold py-2 px-4 border rounded hover:border-blue-400 inline-flex items-center justify-end">
                    <span className='mr-2'>APPLY NOW</span>
                    <svg class=" bg-[#FCFCFC78] rounded-full w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                    {/* <img src={Ellipsearrow} className="border border-green-400"/> */}
                    {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
                </button>
                </div>
                {/* Close of Employer div */}


            
        </Container>
    )
}
export default AboutUs