
const bigButton =(props)=>{
    return(
        <button className="bg-[#99BF18] w-[224px]  h-[54px] text-white font-bold py-2 mb-2 px-6 border-2 rounded-lg hover:border-blue-400 inline-flex items-center">
            <p className='mr-2 text-xl'>{props.text}</p>&nbsp;
            <img src={props.image} className="w-[30px]" alt="Ellipsearrow"/>
        </button>
       
    )
}
export default bigButton