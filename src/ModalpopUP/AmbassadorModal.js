import { Link } from "react-router-dom"
import Olamideokesh from '../assets/images/Olamideokesh.png'
import OluwasegunKajola from '../assets/images/OluwasegunKajola.png'
import StanleyDoe from '../assets/images/StanleyDoe.png'
import TosinGreen from '../assets/images/TosinGreen.png'
import NelsonAdewale from '../assets/images/NelsonAdewale.png'
import NnekaOjomo from '../assets/images/NnekaOjomo.png'
import SteveJohnson from '../assets/images/SteveJohnson.png'
import BimboYinus from '../assets/images/BimboYinus.png'
import SeunBabs from '../assets/images/SeunBabs.png'
import JohnsonNnaji from '../assets/images/JohnsonNnaji.png'
import Playicon from '../assets/images/Playicon.png'
import Uparrow from '../assets/images/Uparrow.png'

const AmbassadorPops = () => {

    // const AmbassadorCards =[
    //     {
    //         id:1,
    //         name: "Olusegun Kajola",
    //         handle: "@se-Kajo",
    //         picture: OluwasegunKajola
    //     },

    //     {
    //         id:2,
    //         name: "Stanley Doe",
    //         handle: "@stanD",
    //         picture: StanleyDoe
    //     },

    //     {
    //         id:3,
    //         name: "Tosin Green",
    //         handle: "@tgreen",
    //         picture: TosinGreen
    //     },

    //     {
    //         id:4,
    //         name: "Nelson Adewale",
    //         handle: "@3el-wale",
    //         picture: NelsonAdewale
    //     },

    //     {
    //         id:5,
    //         name: "Olamide Okesh",
    //         handle: "@okesh",
    //         picture: Olamideokesh
    //     },
    //     {
    //         id:6,
    //         name: "Nneka Ojomo",
    //         handle: "@njomo",
    //         picture: NnekaOjomo
    //     },
    //     {
    //         id:7,
    //         name: "Steve Johnson",
    //         handle: "@steveJ",
    //         picture: SteveJohnson
    //     },
    //     {
    //         id:8,
    //         name: "Bimbo Yinus",
    //         handle: "@yinbim",
    //         picture: BimboYinus
    //     },
    //     {
    //         id:9,
    //         name: "Seun Babs",
    //         handle: "@sbee",
    //         picture: SeunBabs
    //     },
    //     {
    //         id:10,
    //         name: "Johnson Nnaji",
    //         handle: "@sonji",
    //         picture: JohnsonNnaji
    //     }
    // ]

    return (
        <div className="container mx-auto w-[50rem] my-[5rem] border">
            {/* start close icon */}
            <div className="container flex justify-end mx-auto w-[40rem]">
                <button className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            {/* end close icon */}

            <div className=" mx-auto w-[40rem] h-[20rem] mb-5 border-4 rounded-[1rem] bg-cover" style={{ backgroundImage: "url('/src/assets/images/computerimage.png')" }}>
                <div className='flex w-[420.6px] h-[110.6px] mb-5 p-5 hover:border-2 border-blue-300'>
                    <img src={Olamideokesh} alt="AmbassadorCardsPicture" />
                    <h2 className="text-xl font-medium pt-5 ml-3">Olamideokesh</h2>
                </div>


                <div className=" flex justify-between mx-auto ">
                    <button className="">
                        <img src={Playicon} className="w-[4rem] bg-white" alt="Playicon" />
                    </button>
                </div>
            </div>

            <div className="container mx-auto w-[40rem] h-[5rem] mb-5 border-4 rounded-lg">
                <p className="p-2">Lorem vjhklfcjvykuujbiuiuiiuhuijiogiuoydstr4sdcfyguihjmhjgfsdzx</p>
            </div>

            <div className="container mx-auto w-[40rem]">
                <button type="button" className="flex justify-center items-center w-[40rem] h-[3rem] border bg-[#99BF18] rounded-lg">
                    <p className='mr-2 text-xl text-white'>VOTE KAJOLA</p>&nbsp;&nbsp;
                    <img src={Uparrow} className="w-[30px]" alt="Uparrow" />
                </button>
            </div>
        </div>
    )
}
export default AmbassadorPops