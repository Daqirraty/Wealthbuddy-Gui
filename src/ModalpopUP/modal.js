import { Link } from 'react-router-dom';
import correct from '../assets/images/correct.png'
import Backarrow from '../assets/images/Backarrow.png'

const modal =()=>{
    return(
        <div className="relative z-10 bg-opacity-0" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-white bg-opacity-0 transition-opacity"></div>
                <div className="fixed z-10 inset-0 overflow-y-auto border">
                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <div className="relative w-[] border-4 bg-white rounded-[2.5rem]  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div>
                                    <img src={correct} className="w-[5rem] mx-auto" alt="correct"/>
                                </div>
                                <div className="justify-center sm:flex sm:items-start">
                                    <div className="mt-3  w-[] justify-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-6xl m-5 text-center leading-6 font-medium text-gray-900" id="modal-title">Awesome !</h3>
                                        <div className="flex justify-center mt-2  w-[20rem]">
                                            <p className="flex justify-center m-5 text-sm text-center text-black-500">We will keep you posted via your email address so you can track the progress of your delivery.</p>
                                        </div>
                                        <div className="bg-white mx-auto justify-center px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <Link to={`/`}>
                                                <button type="button" className="bg-[#99BF18] w-[224px] h-[54px] mt-3 inline-flex justify-center sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm text-white font-medium py-2 mb-2 px-6 border rounded-lg hover:border-blue-400 items-center">
                                                    <p className='mr-2 text-xl'>BACK HOME</p>&nbsp;
                                                    <img src={Backarrow} className="w-[30px]" alt="Backarrow"/>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default modal
