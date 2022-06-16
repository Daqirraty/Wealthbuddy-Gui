import Container from '../../../Shared/Container/header'
import bgshadow from '../../../assets/images/bgshadow.png'
import Ellipsearrow from '../../../assets/images/Ellipsearrow.png'
import Maskgroup from '../../../assets/images/Maskgroup.png'
import Olamideokesh from '../../../assets/images/Olamideokesh.png'
import OluwasegunKajola from '../../../assets/images/OluwasegunKajola.png'
import StanleyDoe from '../../../assets/images/StanleyDoe.png'
import TosinGreen from '../../../assets/images/TosinGreen.png'
import NelsonAdewale from '../../../assets/images/NelsonAdewale.png'
import NnekaOjomo from '../../../assets/images/NnekaOjomo.png'
import SteveJohnson from '../../../assets/images/SteveJohnson.png'
import BimboYinus from '../../../assets/images/BimboYinus.png'
import SeunBabs from '../../../assets/images/SeunBabs.png'
import JohnsonNnaji from '../../../assets/images/JohnsonNnaji.png'


const ambassadors= () =>{
    const AmbassadorCards =[
        {
            id:1,
            name: "Olusegun Kajola",
            handle: "@se-Kajo",
            picture: OluwasegunKajola
        },

        {
            id:2,
            name: "Stanley Doe",
            handle: "@stanD",
            picture: StanleyDoe
        },

        {
            id:3,
            name: "Tosin Green",
            handle: "@tgreen",
            picture: TosinGreen
        },

        {
            id:4,
            name: "Nelson Adewale",
            handle: "@3el-wale",
            picture: NelsonAdewale
        },

        {
            id:5,
            name: "Olamide Okesh",
            handle: "@okesh",
            picture: Olamideokesh
        },
        {
            id:6,
            name: "Nneka Ojomo",
            handle: "@njomo",
            picture: NnekaOjomo
        },
        {
            id:7,
            name: "Steve Johnson",
            handle: "@steveJ",
            picture: SteveJohnson
        },
        {
            id:8,
            name: "Bimbo Yinus",
            handle: "@yinbim",
            picture: BimboYinus
        },
        {
            id:9,
            name: "Seun Babs",
            handle: "@sbee",
            picture: SeunBabs
        },
        {
            id:10,
            name: "Johnson Nnaji",
            handle: "@sonji",
            picture: JohnsonNnaji
        }
    ]
    return(
        <Container>
            <img src={bgshadow} className="w-[40%] pr-[10rem] " alt='bgshadow'/>
            <div className='mb-[5rem]'>
                <img src={Maskgroup} className="w-[1000px] -mt-[20rem] ml-[11rem] rounded-[1.5rem]" alt='Maskgroup'/>
            </div>

            <div className='container mx-auto w-[1000px] m-[2rem] m-[5rem]'>
                <h1 className='mb-5 border-indigo-500'>*Click <b>VIEW</b> to watch uploaded video by choice person</h1>
                <div className='border rounded-lg flex flex-rows w-[1000px] h-[58px] mb-5'>
                    <input type="text" className='w-[850px] h-[40px] p-2 mb-4 text-black m-2 rounded-lg bg-gray-200 hover:border-2 border-blue-300' placeholder="Enter Name or handle"></input>
                    <button className="bg-[#99BF18] w-[150px] h-[56px] text-white font-bold py-2 mb-2 px-4 border-2 rounded-lg hover:border-blue-400 inline-flex items-center justify-end">
                            <span className='mr-2'>SEARCH</span>
                            <img src={Ellipsearrow} className="w-[30px]" alt="Ellipsearrow"/>
                    </button>
                </div>
            </div>

            <img src={bgshadow} className="w-[600px] ml-[46rem] mb-[10rem]" alt="bgshadow"/>

            <div className='container grid grid-cols-2 mx-auto w-[1150px] mb-10 -mt-[46rem] Justify-center'>
                {
                    AmbassadorCards.map((AmbassadorCard) =>
                
                <div key={AmbassadorCard.id} className='flex flex w-[420.6px] h-[110.6px] m-5 ml-[5rem] border-2 rounded-[1.5rem] shadow-xl hover:border-blue-300'>
                    <img src={AmbassadorCard.picture} className="m-2 w-[80px] rounded-full" alt={AmbassadorCard.picture}/>
                    <div className='flex flex-col pt-5 '>
                        <h2 className='text-xl w-full font-medium'>{AmbassadorCard.name}</h2>
                        <span>{AmbassadorCard.handle}</span>
                    </div>
                    <div className=' flex ml-[3rem] Content-end justify-end'>
                        <button className="bg-[#99BF18] w-[90px] h-[46px] text-white font-bold py-2 m-[10px] px-6 mt-7 border-2 rounded-lg hover:border-blue-400 inline-flex items-center justify-end ">View</button>
                    </div>
                </div> 
                )}      
            </div>
        </Container>
    )
}
export default ambassadors