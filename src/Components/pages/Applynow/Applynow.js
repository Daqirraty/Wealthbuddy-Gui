import { Link } from 'react-router-dom';
import Container from '../../../Shared/Container/header'
import Ellipsearrow from '../../../assets/images/Ellipsearrow.png'
import guyof from '../../../assets/images/guyof.png';
import Thankyou from '../../../assets/images/Thankyou.png';
import ladythumb from '../../../assets/images/ladythumb.png'
import halfVector from '../../../assets/images/halfVector.png'
import Guyof from '../../../assets/images/guyof.png'



const ApplyNow = () =>{
    return(
        <Container>
            <div className='container mx-auto Flex flex ml-[40px] mt-5 '>
                <div className='w-1/2 ml-[4rem]'>
                    <img src={Thankyou} alt="Thankyou" className=' w-[550px] mt-[7rem] ml-7'/>
                    <p className='text-2xl ml-9'>for your interest in becoming the<br/>Wealthbuddy Lifestyle Ambassador.<br/>
                        We can’t wait to receive your<br/>application and eventually have you<br/>on board!
                    </p>
                </div>
                
                <div className='ml-[4rem]'>
                    <img src={ladythumb} alt="ladythumb" className='bg-transparent bg-white w-[400px] hover:border-2 border-blue-400 '/>
                </div>
            </div>
            <img src={halfVector} alt="halfVector" className='w-[4rem] mr-[5rem] -mt-[14rem] mb-[180px]'/>


               


            <div className='container mx-auto  w-[1080px] h-[300px] mb-5 px-[5rem] text-2xl hover:border-2 border-blue-400  rounded-[1.5rem] shadow-2xl '>
                <h2 className='tracking-wider'>To complete this application form, you’ll require the following:<br/>
                    1. A link to your 60 seconds video application (posted to your social media<br/> page), telling us why you’re the best person for the job and demonstrating<br/>
                       your knowledge of the Wealthbuddy app.<br/>
                    2. You’ll need to open a Wealthbuddy account. If you haven’t signed up to<br/>
                       Wealthbuddy yet, click <a href='#' className='text-[#99BF18]'>here</a> to do so.
                </h2>
            </div>
            
            <div className='container flex flex mx-[5rem] mt-[3rem] border '>
                <div className='mt-[9rem]'>
                    <div className='container'>
                        <label>First Name</label><br/>
                        <input className="w-[500px] h-[42px] p-2 mb-2 text-black  rounded-lg bg-gray-200 hover:border-2 border-blue-400 " placholder="Enter here"></input>
                        <hr className='w-[500px]'/>
                    </div>
                    <div className='container mt-4'>
                        <label>Surname</label><br/>
                        <input className='w-[500px] h-[46px] p-2 mb-2 text-black  rounded-lg bg-gray-200 hover:border-2 border-blue-400' placholder="Enter here"></input>
                        <hr className='w-[500px]'/>
                    </div>
                    <div className='container mt-4'>
                        <label>City/Town Name</label><br/>
                        <input className='w-[500px] h-[46px] p-2 mb-2 text-black rounded-lg bg-gray-200 hover:border-2 border-blue-400' placholder= "Enter here"></input>
                        <hr className='w-[500px]'/>
                    </div>
                    <div className='container mt-4'>
                        <label>State/ Province</label><br/>
                        <input className='w-[500px] h-[46px] p-2 mb-2 text-black rounded-lg bg-gray-200 hover:border-2 border-blue-400' placholder="Enter here"></input>
                        <hr className='w-[500px]'/>
                    </div>
                    <div className='container mt-4'>
                        <label>Email address</label>
                        <p className='mb-1'>(Tooltip: Enter the email address you used to sign up for Wealthbuddy)</p>
                        <input className='w-[500px] h-[46px] p-2 mb-2 text-black rounded-lg bg-gray-200 hover:border-2 border-blue-400' placholder="Enter here"></input>
                        <hr className='w-[500px]'/>
                    </div>
                    <div className='container mt-4'>
                        <label>Link to your Video</label>
                        <p className='mb-1'>(Tooltip: Enter the link to your 60 seconds video application posted on your<br/>
                                            Instagram, Facebook, Twitter, LinkedIn or TikTok page. It is fine if you have posted on<br/>
                                             multiple platforms. Just enter the video link on your most active account here.)</p>
                        <input className='w-[500px] h-[46px] p-2 mb-2 text-black rounded-lg bg-gray-200 hover:border-2 border-blue-400' placholder="Enter here"></input>
                        <hr className='w-[500px]'/>
                    </div>
                    <div className=''  >
                        <p>Are you aware of any circumstances which might adversely<br/> 
                            affect your employment for the period of 3 months in the<br/>
                            position?
                        </p>
                        <div className="my-3">
                            <input type ="radio" id="radio" name="radio" className='w-[3rem] mb-2 border border-[#99BF18] '></input>
                            <label>No</label>
                            <input type ="radio" id="radio" name="radio" className='ml-5 mb-2 border border-[#99BF18]'></input>
                            <label>Yes</label>
                        </div>

                        <p>Do you have a criminal record?</p>
                        <div className="my-3">
                            <input type ="radio" id="radio" name="radio" className='mb-2 border border-[#99BF18] '></input>
                            <label>No</label>
                            <input type ="radio" id="radio" name="radio" className='ml-5 mb-2 border border-[#99BF18]'></input>
                            <label>Yes</label>
                        </div>
                        <div className='mb-[2rem] '>
                            <input type ="radio" id="radio" name="radio" className='bg-[#99BF18]'></input>&nbsp;&nbsp;
                            <label for="radio">I agree to the terms & conditions of this application</label>
                        </div>

                        <Link to={`/Modal`}>
                            <button className="flex flex bg-[#99BF18] w-[224px]  h-[54px] text-white font-bold py-2 mb-2 px-6 border-2 rounded-lg hover:border-blue-400 inline-flex items-center">
                                <p className='mr-2 text-xl'>SUBMIT</p>&nbsp;
                                <img src={Ellipsearrow} className="w-[30px] justify-self-end" alt="Ellipsearrow"/>
                            </button>
                        </Link>

                        
                    </div> 
                
                </div>
                <div className=''>
                    <div className=' m-5 w-[600px] h-[950px]' >
                        <img src={Guyof} alt="guyof" className='w-[450px]  mb-[7rem]'/>
                    </div>
                </div>
    
            </div> 
        </Container>
    )
}

export default ApplyNow;