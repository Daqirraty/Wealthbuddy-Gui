import { Link } from 'react-router-dom';
import wealth2 from '../../assets/images/wealth2.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';
import Instagram from '../../assets/images/Instagram.png';



const Container = ({children}) => {
 
  return(
    <div >
      {/* Start of navbar */}
        <nav className="bg-white border-gray-200 mt-3 px-2  sm:px-4 py-2.5 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                <img src={wealth2} className="mr-3 h-6 sm:h-9" alt="wealthbuddy"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">wealthbuddy</span>
                </a>

                {/* START RESPONSIVENESS TOGGLE  */}
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                {/* END RESPONSIVENESS TOGGLE  */}

                <div className="hidden mr-[4rem] w-full md:block md:w-auto" id="mobile-menu">
                  <ul className="flex flex-col  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li className='pt-2'>
                      <Link to={`/`} className="block pr-4 pl-3 hover:border-b-2 border-[#99BF18] md:bg-transparent md:hover:text-[#99BF18] md:p-0 text-black" aria-current="page">HOME</Link>
                    </li>
                      <li className='pt-2'>
                      <Link to={`/Ambassadors`} className="block pr-4 pl-3 hover:border-b-2 border-[#99BF18] md:bg-transparent md:hover:text-[#99BF18] md:p-0 text-black" aria-current="page">VOTE</Link>
                    </li>
                    <li>
                      <Link to={`/`}>
                        <button type="button" className =" text-xs text-black-700 py-2 px-4 border border-[#99BF18] hover:border-blue-600 rounded">CONTACT US</button>
                      </Link>
                  </li>
                  
                  </ul>
                </div>
            </div>
          </nav>
          {/* Close of navbar */}

         
          {children} 


        {/* BEGIN FOOTER */}
        <footer className="flex bg-[#99BF18] md:flex md:items-center md:justify-between md:p-6 ">
            <span className="text-sm text-white sm:text-center">Copyright &copy; Wealthbuddy by Meristem | Privacy Policy</span>
            <ul className="flex items-center md:none mt-3 text-sm sm:mt-0">
                <li className='flex'><a href="#" className="mr-4 md:mr-6 "><img src={facebook}/></a></li>
                {/* <li className='flex'><Link to={``} className="mr-4 md:mr-6 "><img src={facebook}/></Link></li> */}
                <li className='flex'><a href="#" className="mr-4 md:mr-6"><img src={Instagram}/></a></li>
                {/* <li className='flex'><Link to={``} className="mr-4 md:mr-6 "><img src={Instagram}/></Link></li> */}
                <li className='flex'><a href="#" className="mr-4 md:mr-6"><img src={twitter}/></a></li>
                {/* <li className='flex'><Link to={``} className="mr-4 md:mr-6 "><img src={twitter}/></Link></li> */}
                <li className='flex'><a href="#" className="mr-4 md:mr-6"><img src={linkedin}/></a></li>
                {/* <li className='flex'><Link to={``} className="mr-4 md:mr-6 "><img src={linkedin}/></Link></li> */}
                <li className="flex text-white text-lg w-70px">Wealthbuddy</li>
            </ul>
        </footer>
        {/* END FOOTER */}

       
    </div> 
  )
};

export default Container;