import Container from '../../../Shared/Container/header'
import bgshadow from '../../../assets/images/bgshadow.png'
import Rectangle57 from '../../../assets/images/Rectangle57.png';
import TheJob from '../../../assets/images/TheJob.png';
import computerImage from '../../../assets/images/computerImage.png';
import halfVector from '../../../assets/images/halfVector.png';
import peopleofwb2 from '../../../assets/images/peopleofwb2.png';
import Vector from '../../../assets/images/Vector.png'
import Ambassador from '../../../assets/images/Ambassador.png'
import Ellipsearrow from '../../../assets/images/Ellipsearrow.png'
import Wealthbuddy2 from '../../../assets/images/Wealthbuddy2.png'

const Homepage = () =>{
    return(
    <Container>
        <div className="flex flex-wrap p-[3rem]">
            <div><h1 className=" px-8" style={{fontFamily: "Montserrat", fontWeight:"900px", fontStyle:"normal", fontSize: "200px",lineHeight: "145px"}}>Be the<br/>next</h1>
            <div><h6 className="font-Montserrat font-bold ml-10">Naija's hottest<br/>job with N1m<br/>monthly salary.</h6></div><br/><br/><br/>
            </div><br/>
            <div><img src={Vector} className="w-[470px] h-[393.72px] pt-[5rem] pr-[9rem]" alt="Vector"/></div> 
        </div>
        <div><img src={bgshadow} className="w-[670px] -mt-[18rem]" alt="bgshadow"/></div>
        <div className=""><img src={peopleofwb2}className="-mt-[769px] ml-[180px] w-[990px] h-[848px] mx-auto" alt="peopleofwb2"/></div>
        <div className=""><img src={Wealthbuddy2} className="w-[650.09px] -mt-[22rem] h-[150.97px] mr-[250px] mx-auto p-10 bg-white"/></div>
        <img src={Ambassador} className="mx-auto w-[850.09px] -mt-[2rem]" alt="Ambassador"/>
        <img src={halfVector} className="w-[70px] -mt-[18rem]" alt="halfVector"/>
        
        <div>
        <button className="bg-[#99BF18] w-[140px] h-[56px] text-white font-bold py-2 mb-2 px-4 border-2 rounded-lg hover:border-blue-400 inline-flex items-center justify-end">
            <span className='mr-2'>APPLY NOW</span>
            <svg className=" bg-[#FCFCFC78] rounded-full w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
        </div>

        <div className="flex flex-wrap mb-[2rem] mt-[10rem] pt-[3rem]">
            <div className="container mx-auto px-[8rem]">
                <img src={TheJob} className="w-[47rem]" alt="TheJob"/>
            </div>
            <div className="w-1/2"><img src={Rectangle57} className="m-[7rem] w-[34rem] h-[40rem] drop-shadow-2xl  -mt-9  rounded-[3.3rem] bg-slate-200 hover:border-2 border-cyan-300" alt="Rectangle57"/></div>
            <div className="w-1/2 px-[4rem]  ">
              <p className="pt-5"style={{fontFamily: "Montserrat", fontWeight:"200px", fontStyle:"normal", fontSize: "40px",lineHeight:""}}>
                <b>About the job...</b></p><br/>
              <p style={{fontFamily: "Montserrat", fontWeight:"600px", fontStyle:"normal", fontSize: "22.97px",lineHeight: "41.2px"}}>As the Wealthbuddy lifestyle ambassador.<br/>
                  your main responsibility will be to use your<br/>
                  unique skills, abilities, or talents to help<br/>
                  people make better decisions with their<br/>money and switch up their lifestyles.</p><br/>
              <p style={{fontFamily: "Montserrat", fontWeight:"600px", fontStyle:"normal", fontSize: "22.97px",lineHeight: "41.2px"}}>
                  Salary: N1m monthly (3 months contract)<br/>
                  Experience: None required<br/>
                  Age: Just be above 18.</p><br/>
                    <button className="bg-[#99BF18] w-[224px]  h-[54px] text-white font-bold py-2 mb-2 px-6 border-2 rounded-lg hover:border-blue-400 inline-flex items-center">
                        <p className='mr-2 text-xl '>LEARN MORE</p>&nbsp;
                        <img src={Ellipsearrow} className="w-[30px]" alt="Ellipsearrow"/>
                    </button>
            </div>
            <img src={Vector} className="pl-[1.7rem] -mt-[15rem] mr-[4rem] pb-[2rem]" alt="Vector"/>
        </div>
         

        <div className="flex flex-wrap">
            <div className="container w-1/2 px-20 sm:mx-auto content-center w-full md:mx-auto content-center">
              <p style={{fontFamily: "Montserrat", fontWeight:"200px", fontStyle:"normal", fontSize: "40px",lineHeight:""}}>
                About Wealthbuddy</p><br/>
              <p style={{fontFamily: "Montserrat", fontWeight:"200px", fontStyle:"normal", fontSize: "20.97px",lineHeight:"32.75px"}}>Wealthbuddy by Meristem is a savings and investment<br/>app that helps conveniently save money, grow money,<br/>and pay bills.<br/><br/>
                  Everybody has a desired lifestyle they’d love to live. At<br/>Wealthbuddy, our goal is to help you grow your money so<br/>you can consistently live the life you’ve always dreamed<br/>of. Wealthbuddy is the app that helps you switch up<br/>your lifestyle.<br/><br/>
                  The Wealthbuddy app has many savings and investment<br/>
                  plans to choose from.</p><br/><br/>
                <button className="bg-[#99BF18] w-[224px]  h-[54px] text-white font-bold py-2 mb-2 px-6 border-2 rounded-lg hover:border-blue-400 inline-flex items-center">
                        <p className='mr-2 text-xl'>READ MORE</p>&nbsp;
                        <img src={Ellipsearrow} className="w-[30px]" alt="Ellipsearrow"/>
                </button>
            </div>
            <div className="w-1/2"><img src={computerImage} className="w-[55rem] h-[630px] border-solid borderRadius-10 " alt="computerImage"/></div>
        </div>
    </Container>   
    )
}
export default Homepage