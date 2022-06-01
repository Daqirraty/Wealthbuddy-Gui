import { Link } from 'react-router-dom';
import Ambassadors from '../../Components/pages/Ambassadorpage/Ambassadors';
import wealthbuddylogo from '../../assets/images/wealthbuddylogo.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';
import Instagram from '../../assets/images/Instagram.png';



const Container = ({children}) => {
 
  return(
    <div >
      {/* Start of navbar */}
        <nav className="bg-white border-gray-200 mt-3 px-2 py-10 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                <img src={wealthbuddylogo} className="mr-3 h-6 sm:h-9" alt="wealthbuddy"/>
                {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">wealthbuddy</span> */}
                </a>

                {/* START RESPONSIVENESS TOGGLE  */}
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden mr-[4rem] w-full md:block md:w-auto" id="mobile-menu">
                  <ul className="flex flex-col  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li className='pt-2'>
                      <a href="/" className="block pr-4 pl-3 text-black hover:border-b-2 border-[#99BF18] md:bg-transparent md:hover:text-[#99BF18] md:p-0 dark:text-white" aria-current="page">HOME</a>
                    </li>
                      <li className='pt-2'>
                      <a href="Ambassadors" className="block py-2 pr-4 pl-3  hover:border-b-2 border-[#99BF18]  md:hover:bg-transparent md:border-0 md:hover:text-[#99BF18] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">VOTE</a>
                    </li>
                    <li>
                  <button type="button" className =" text-xs text-black-700 py-2 px-4 border border-[#99BF18] hover:border-blue-600 rounded">CONTACT US</button></li>
                  </ul>
                </div>
            </div>
          </nav>
          {/* Close of navbar */}

         
          {children} 



        <footer class="p-4 bg-[#99BF18] px-20 py-10 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">Copyright &copy; Wealthbuddy by Meristem | Privacy Policy</span>
            <ul class="flex flex items-center justify-between md:none mt-3 text-sm text-slate-500 dark:text-gray-400 sm:mt-0">
                <li><a href="#" class="mr-4 hover:underline md:mr-6 "><img src={facebook}/></a></li>
                <li><a href="#" class="mr-4 hover:underline md:mr-6"><img src={Instagram}/></a></li>
                <li><a href="#" class="mr-4 hover:underline md:mr-6"><img src={twitter}/></a></li>
                <li><a href="#" class="mr-4 hover:underline md:mr-6"><img src={linkedin}/></a></li>
                <li class="text-white hover:underline">Wealthbuddy</li>
            </ul>
        </footer>
        {/* /* <div className="grid grid-cols-2 px-20 py-10 bg-[#99BF18] ">
            <div className="text-center text-slate-300">Copyright &copy; wealthbuddy by Meristem | Privacy Policy</div>
            <div className="text-center text-slate-300">2</div>
        </div> */}
    </div> 
  )
};

export default Container;