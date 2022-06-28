import { Link } from 'react-router-dom'
import Container from '../../../Shared/Container/header'
import Vector from '../../../assets/images/Vector.png'
import Vector2 from '../../../assets/images/Vector2.png'
import Rectangle57 from '../../../assets/images/Rectangle57.png'
// import MainResponsy from '../../../assets/images/MainResponsy.png'
// import Howtoapply from '../../../assets/images/Howtoapply.png'
import Aboutthejob from '../../../assets/images/Aboutthejob.png'
import bgshadow from '../../../assets/images/bgshadow.png'
import Selection from '../../../assets/images/Selection.png'
// import Employer from '../../../assets/images/Employer.png'
import Ellipsearrow from  '../../../assets/images/Ellipsearrow.png' 




const AboutUs = () =>{
    return(
        <Container>
                <div className="flex my-[4rem]">
                    <div className="w-[615px] h-[683px] px-8 pb-10">
                        <img src={Rectangle57} className="w-[50rem] h-[33rem] drop-shadow-2xl ml-[8rem] rounded-[2.5rem] bg-slate-200 hover:border-2 border-cyan-300 hover:rounded-[2.9rem]" alt="Rectangle57"/>
                    </div>
                    <div className="w-[340px] px-10 ml-[11rem] ">
                        <img src={Aboutthejob} className="pt-[12rem]" alt="Aboutthejob" />
                    </div>
                    <div className="ml-[16.3rem]"><img src={Vector2} className="w-[170px]" alt="Vector2"/></div>                    
                </div>
                <img src={Vector} className="-mt-[23rem] ml-[5.4rem]" alt="Vector" />
                

                <div className="container w-[70rem] ml-[5rem] mt-[4rem] text-xl">
                    <div className="w-[20rem] h-[4rem] pt-3 text-white text-center border-4 font-bold bg-[#99BF18] rounded-[1.2rem]">MAIN RESPONSIBILITIES</div>
                    {/* <img src={MainResponsy} className="w-[230px]" alt="MainResponsy" /> */}
                <br/>
                    <p className="leading-loose tracking-widest text-xm">
                        Employment responsibilities will include the following:<br/>
                    </p>
                        <ol className="tracking-widest">
                            <li className="p-2">1. Providing weekly updates via social media/blog.<br/></li>
                            <li className="p-2">2. Represent Wealthbuddy by Meristem at various functions.<br/></li>
                            <li className="p-2">3. Be a true Wealthbuddy ‘Ambassador’ and participate in media interviews<br/>as required.<br/></li>
                            <li className="p-2">4. Act responsibly always and in accordance with the reasonable directions of<br/> Wealthbuddy Management.</li>
                        </ol>
                </div>

                <div className="container ml-[5rem] w-[70rem] my-[3rem]">
                <div className="w-[15rem] h-[3.8rem] pt-3 text-white text-center border-4 font-bold text-xl bg-[#99BF18] rounded-[1.2rem]">HOW TO APPLY</div>
                    {/* <img src={Howtoapply} className="w-[180px]" alt="Howtoapply" /><br/> */}
                    <div>
                        <h1 className="leading-normal font-bold text-3xl my-2">Want Naija’s hottest job? </h1>
                        <p className="leading-loose tracking-widest text-xl">
                            If you enjoy connecting and engaging with new people on digital platforms<br/>
                            and you can spare 3 months to help people grow their money, you already<br/>
                            stand a good chance. It’s easy to apply.
                        </p>
                    </div> 
                </div>
               
                <div className="ml-[25rem] w-[35rem]"><img src={bgshadow} className="w-[40rem]" alt="bgshadow"/></div>
                <div className="flex mx-auto w-[70rem] pb-8">
                    <div className="flex flex-col m-[5rem] -mt-[35rem] w-auto mr-9">
                        <h1 className="text-[#99BF18] font-bold text-3xl pb-1">Step1</h1>
                        <div className='bg-white p-5 border border-white-900 rounded-[1.5rem] w-[400.5px] h-[433.5px] tracking-widest drop-shadow-2xl hover:border-cyan-300'>
                            <p>Create a video application (in 60<br/> seconds or less) and post it to your social<br/> media page (Instagram, Facebook,<br/>LinkedIn, TikTok) using the<br/>hashtags #Switchupyourlifestyle and<br/>#NaijasHottestJob.<br/><br/>
                                In an entertaining and engaging way,<br/>tell us why you’re the best person for the<br/>job and demonstrate your knowledge of<br/>the Wealthbuddy app.<br/><br/>
                                Don’t forget to tag us in your video.<br/> Our social media handles are at the<br/>bottom of this page.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-auto ml-[4rem]">
                        <div className="flex flex-col">
                            <div className="-mt-[35rem]">
                                <div><h1 className="text-[#99BF18] font-bold text-3xl pb-1">Step2</h1></div>
                                <div className="bg-white p-3 w-[350px] border border-white-500 rounded-lg drop-shadow-2xl hover:border-cyan-300"><p>If you don’t already have one, open a<br/> Wealthbuddy account. You can do so<br/><a href='#' className='text-[#99BF18]'>here.</a></p></div><br/>
                            </div>
                            <div>
                                <div><h1 className="text-[#99BF18] font-bold text-3xl pb-1">Step3</h1></div>
                                <div className="bg-white p-3 mb-4 border w-[350px] tracking-widest rounded-lg drop-shadow-2xl hover:border-cyan-300">
                                    <p>Fill out a brief application form. That’s it!</p>
                                </div>
                            </div>
                            <div className="tracking-widest">
                                <p>Twenty candidates will be shortlisted.<br/>
                                    The top 5 will be selected via a voting process<br/>on our website – so make sure you encourage<br/>
                                    all your friends and family to vote if you get<br/>shortlisted.<br/>
                                    The top 5 will be interviewed and the<br/>successful candidate will be announced.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* slecton div */}
                <div className="container mx-auto w-[75rem] mb-5">
                    <div>
                    <div className="w-[18rem] h-[4rem] pt-3 mb-2 text-white text-center font-bold text-xl bg-[#99BF18] border-4 rounded-[1.2rem]">SELECTION CRITERIA</div>
                        {/* <img src={Selection} className="w-[200px] m-5 mb-3" alt="Selection" /> */}
                    </div>
                    <div className="text-xl leading-loose">
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
                <div className="container mx-auto w-[75rem] ml-[5rem] mb-5">
                <div className="w-[12rem] h-[4rem] pt-3 mb-2 text-white text-center font-bold text-xl bg-[#99BF18] border-4 rounded-[1.2rem]">EMPLOYER</div>
                    {/* <div className="px-5 py-2"><img src={Employer} className="w-[148px]" alt="Employer" /></div> */}
                    <div className="text-xl leading-loose">
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
                    <Link to={`/Applynow`}>
                        <button className="flex bg-[#99BF18] w-[224px]  h-[57px] text-white font-bold py-2 mb-2 px-6 border-2 rounded-lg hover:border-blue-400 inline-flex items-center">
                            <p className='mr-2 text-xl'>APPLY NOW</p>&nbsp;&nbsp;
                            <img src={Ellipsearrow} className="w-[30px] justify-end" alt="Ellipsearrow"/>
                        </button>
                    </Link>
                </div>
                {/* Close of Employer div */}
  
        </Container>
    )
}
export default AboutUs