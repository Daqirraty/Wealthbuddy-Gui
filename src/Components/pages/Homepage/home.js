import { Link } from 'react-router-dom';
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
import SeunBabs from '../../../assets/images/SeunBabs.png'
import TosinGreen from '../../../assets/images/TosinGreen.png'
import BimboYinus from '../../../assets/images/BimboYinus.png'
import JohnsonNnaji from '../../../assets/images/JohnsonNnaji.png'
import NnekaOjomo from '../../../assets/images/NnekaOjomo.png'
import NelsonAdewale from '../../../assets/images/NelsonAdewale.png'
import OluwasegunKajola from '../../../assets/images/OluwasegunKajola.png'
import Olamideokesh from '../../../assets/images/Olamideokesh.png'
import SteveJohnson from '../../../assets/images/SteveJohnson.png'
import StanleyDoe from '../../../assets/images/StanleyDoe.png'



const Homepage = () => {

    const AmbassadorCards = [
        {
            id: 1,
            name: "Olusegun Kajola",
            handle: "@se-Kajo",
            picture: OluwasegunKajola
        },

        {
            id: 2,
            name: "Stanley Doe",
            handle: "@stanD",
            picture: StanleyDoe
        },

        {
            id: 3,
            name: "Tosin Green",
            handle: "@tgreen",
            picture: TosinGreen
        },

        {
            id: 4,
            name: "Nelson Adewale",
            handle: "@3el-wale",
            picture: NelsonAdewale
        },

        {
            id: 5,
            name: "Olamide Okesh",
            handle: "@okesh",
            picture: Olamideokesh
        },
        {
            id: 6,
            name: "Nneka Ojomo",
            handle: "@njomo",
            picture: NnekaOjomo
        },
        {
            id: 7,
            name: "Steve Johnson",
            handle: "@steveJ",
            picture: SteveJohnson
        },
        {
            id: 8,
            name: "Bimbo Yinus",
            handle: "@yinbim",
            picture: BimboYinus
        },
        {
            id: 9,
            name: "Seun Babs",
            handle: "@sbee",
            picture: SeunBabs
        },
        {
            id: 10,
            name: "Johnson Nnaji",
            handle: "@sonji",
            picture: JohnsonNnaji
        }
    ]

    return (
        <Container>
            <div className="flex p-[3rem]">
                <div className="w-[38rem]" >
                    <h1 className="px-8"style={{ fontFamily: "Montserrat", fontWeight: "900px", fontStyle: "normal", fontSize:"200px", lineHeight:"145px"}} >Be the next</h1>
                    <div><h6 className="font-bold ml-10">Naija's hottest<br />job with N1m<br />monthly salary.</h6></div><br /><br /><br />
                </div><br />
                <div><img src={Vector} className="w-[470px] h-[393.72px] pt-[5rem] pr-[9rem]" alt="Vector" /></div>
            </div>
            <div><img src={bgshadow} className="w-[670px] -mt-[18rem]" alt="bgshadow" /></div>
            <div className=""><img src={peopleofwb2} className="-mt-[769px] ml-[180px] w-[1050px] h-[848px] mx-auto" alt="peopleofwb2" /></div>
            <div className="bg-white ml-[13rem] rounded-full"><img src={Wealthbuddy2} className="w-[675.09px] h-[180px] -mt-[22rem] mx-auto p-10 rounded-[3.5rem]" alt='Wealthbuddy2' /></div>
            <img src={Ambassador} className="mx-auto w-[900.09px] -mt-[3rem]" alt="Ambassador" />
            <div className="flex mt-[5rem] justify-center">
                <Link to={`/Applynow`}>
                    <button className="flex justify-between bg-[#99BF18] w-[240px] h-[57px] text-white font-bold py-2 mb-2 px-9 border-2 rounded-lg hover:border-blue-400 items-center">
                        <p className='mr-2 text-xl'>APPLY NOW</p>
                        <img src={Ellipsearrow} className="flex w-[30px]" alt="Ellipsearrow" />
                    </button>
                </Link>
            </div>
            <img src={halfVector} className="w-[70px] -mt-[18rem]" alt="halfVector" />


            <div className="flex flex-wrap mb-[2rem] mt-[7rem] pt-[3rem] ">
                <div className="container mx-auto px-[8rem]">
                    <img src={TheJob} className="w-[47rem]" alt="TheJob" />
                </div>
                <div className="flex">
                    <div className="w-1/2"><img src={Rectangle57} className="m-[7rem] w-[34rem] h-[40rem] drop-shadow-2xl  -mt-9  rounded-[3.3rem] bg-slate-200 hover:border-2 border-cyan-300" alt="Rectangle57" /></div>
                    <div className="container w-1/2 px-[4rem] ">
                        <p className="pt-5" style={{ fontFamily: "Montserrat", fontWeight: "200px", fontStyle: "normal", fontSize: "40px", lineHeight: "" }}>
                            <b>About the job...</b></p><br />
                        <p style={{ fontFamily: "Montserrat", fontWeight: "600px", fontStyle: "normal", fontSize: "22.97px", lineHeight: "41.2px" }}>As the Wealthbuddy lifestyle ambassador.<br />
                            your main responsibility will be to use your<br />
                            unique skills, abilities, or talents to help<br />
                            people make better decisions with their<br />money and switch up their lifestyles.</p><br />
                        <p style={{ fontFamily: "Montserrat", fontWeight: "600px", fontStyle: "normal", fontSize: "22.97px", lineHeight: "41.2px" }}>
                            Salary: N1m monthly (3 months contract)<br />
                            Experience: None required<br />
                            Age: Just be above 18.</p><br />
                        <Link to={`/Applynow`}>
                            <button className="inline-flex justify-between items-center bg-[#99BF18] w-[240px] h-[57px] text-white font-bold py-2 mb-2 px-6 border-2 rounded-lg hover:border-blue-400 ">
                                <p className='mr-2 text-xl'>LEARN MORE</p>
                                <img src={Ellipsearrow} className="w-[30px]" alt="Ellipsearrow" />
                            </button>
                        </Link>
                    </div>
                </div>
                <img src={Vector} className="pl-[1.7rem] -mt-[15rem] mr-[4rem] pb-[2rem]" alt="Vector" />
            </div>


            <div className="flex flex-wrap mb-[5rem]">
                <div className="container w-1/2 px-20 content-center">
                    <p style={{ fontFamily: "Montserrat", fontWeight: "200px", fontStyle: "normal", fontSize: "40px", lineHeight: "" }}>
                        About Wealthbuddy
                    </p>
                    <br />
                    <p style={{ fontFamily: "Montserrat", fontWeight: "200px", fontStyle: "normal", fontSize: "20.97px", lineHeight: "32.75px" }}>Wealthbuddy by Meristem is a savings and investment<br />app that helps conveniently save money, grow money,<br />and pay bills.<br /><br />
                        Everybody has a desired lifestyle they’d love to live. At<br />Wealthbuddy, our goal is to help you grow your money so<br />you can consistently live the life you’ve always dreamed<br />of. Wealthbuddy is the app that helps you switch up<br />your lifestyle.<br /><br />
                        The Wealthbuddy app has many savings and investment<br />
                        plans to choose from.</p>
                    <br /><br />
                    <div className="flex justify-between">
                        <Link to={`/AboutUs`}>
                            <button className="flex justify-between items-center sm:mx-auto bg-[#99BF18] w-[224px] h-[54px] text-white font-bold py-2 mb-2 px-6 border-2 rounded-lg hover:border-blue-400">
                                <p className='mr-2 text-xl'>READ MORE</p>
                                <img src={Ellipsearrow} className="w-[30px]" alt="Ellipsearrow" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2"><img src={computerImage} className="w-[55rem] h-[630px] border-solid borderRadius-10" alt="computerImage" /></div>
            </div>

            {/* BEGIN feature div after the sliding cards */}
            <div className="flex mb-4">
                <div className='flex justify-between w-[75rem] mx-auto'>
                    <div className="flex items-center mx-5 ">
                        <p className="text-2xl font-bold">Featured Applicants</p>
                    </div>
                    <div className="flex ">
                        <Link to={`/Ambassadors`} >
                            <button className="flex justify-between items-center bg-[#99BF18] w-[224px] h-[54px] text-white font-bold py-2 mb-2 px-6 border-2 rounded-lg hover:border-blue-400">
                                <div className=""><p className='mr-2 text-xl'>VIEW ALL</p></div>
                                <div className=""><img src={Ellipsearrow} className=" w-[30px]" alt="Ellipsearrow" /></div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* End feature div after the sliding cards */}


            <div className="relative overflow-x-hidden grid w-full mb-[5rem]">
                <div className="">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {
                            AmbassadorCards.map((AmbassadorCard) =>

                                <div key={AmbassadorCard.id} className='flex justify-between w-[420.06px] h-[110.6px] m-5 ml-[5rem] border-2 rounded-[1.5rem] shadow-xl hover:border-blue-300' >
                                    <img src={AmbassadorCard.picture} className="m-2 w-[80px] rounded-full" alt={AmbassadorCard.picture} />
                                    <div className='flex flex-col w-[10rem] pt-5 '>
                                        <h2 className='text-xl font-medium'>{AmbassadorCard.name}</h2>
                                        <span>{AmbassadorCard.handle}</span>
                                    </div>
                                    <div className='flex ml-[3rem]'>
                                        <Link to={`/Ambassadors`}>
                                            <button className="bg-[#99BF18] w-[90px] h-[46px] text-white font-bold py-2 m-[10px] px-6 mt-7 border-2 rounded-lg hover:border-blue-400 inline-flex items-center justify-end ">View</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                    </div>

                    <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                        {
                            AmbassadorCards.map((AmbassadorCard) =>

                                <div key={AmbassadorCard.id} className='flex justify-between w-[420.06px] h-[110.6px] m-5 ml-[5rem] border-2 rounded-[1.5rem] shadow-xl hover:border-blue-300' >
                                    <img src={AmbassadorCard.picture} className="m-2 w-[80px] rounded-full" alt={AmbassadorCard.picture} />
                                    <div className='flex flex-col w-[10rem] pt-5 '>
                                        <h2 className='text-xl font-medium'>{AmbassadorCard.name}</h2>
                                        <span>{AmbassadorCard.handle}</span>
                                    </div>
                                    <div className='flex ml-[3rem]'>
                                        <Link to={`/Ambassadors`}>
                                            <button className="bg-[#99BF18] w-[90px] h-[46px] text-white font-bold py-2 m-[10px] px-6 mt-7 border-2 rounded-lg hover:border-blue-400 inline-flex items-center justify-end ">View</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>

                <div className="relative overflow-x-hidden grid w-full">
                    <div className="flex animate-marquee3 whitespace-nowrap">
                        {
                            AmbassadorCards.map((AmbassadorCard) =>

                                <div key={AmbassadorCard.id} className='flex justify-between w-[420.06px] h-[110.6px] m-5 ml-[5rem] border-2 rounded-[1.5rem] shadow-xl hover:border-blue-300' >
                                    <img src={AmbassadorCard.picture} className="m-2 w-[80px] rounded-full" alt={AmbassadorCard.picture} />
                                    <div className='flex flex-col w-[10rem] pt-5 '>
                                        <h2 className='text-xl font-medium'>{AmbassadorCard.name}</h2>
                                        <span>{AmbassadorCard.handle}</span>
                                    </div>
                                    <div className='flex ml-[3rem]'>
                                        <Link to={`/Ambassadors`}>
                                            <button className="bg-[#99BF18] w-[90px] h-[46px] text-white font-bold py-2 m-[10px] px-6 mt-7 border-2 rounded-lg hover:border-blue-400 inline-flex items-center justify-end ">View</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                    </div>

                    <div className="absolute top-0 flex animate-marquee4 whitespace-nowrap">
                        {
                            AmbassadorCards.map((AmbassadorCard) =>

                                <div key={AmbassadorCard.id} className='flex justify-between w-[420.06px] h-[110.6px] m-5 ml-[5rem] border-2 rounded-[1.5rem] shadow-xl hover:border-blue-300' >
                                    <img src={AmbassadorCard.picture} className="m-2 w-[80px] rounded-full" alt={AmbassadorCard.picture} />
                                    <div className='flex flex-col w-[10rem] pt-5 '>
                                        <h2 className='text-xl font-medium'>{AmbassadorCard.name}</h2>
                                        <span>{AmbassadorCard.handle}</span>
                                    </div>
                                    <div className='flex ml-[3rem]'>
                                        <Link to={`/Ambassadors`}>
                                            <button className="bg-[#99BF18] w-[90px] h-[46px] text-white font-bold py-2 m-[10px] px-6 mt-7 border-2 rounded-lg hover:border-blue-400 inline-flex items-center justify-end ">View</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Homepage