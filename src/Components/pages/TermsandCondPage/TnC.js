import Container from "../../../Shared/Container/header"
import bgshadow from '../../../assets/images/bgshadow.png'
import TnCimage from "../../../assets/images/TnC.png"

const TnC =() =>{
    return(
        <Container>
            <div className="container  ml-[8rem] mb-[7rem] ">
                <img src={bgshadow} className="w-[700px] ml-[33rem] pb-10 " alt="bgshadow"/>
                <img src={TnCimage} alt="TnCimage" className="w-[1040px] -mt-[40rem]  rounded-lg hover:border-2 border-blue-300 hover:rounded-[2.1rem]"/>
            </div>
            <div>
                <span className="bg-[#99BF18] w-[34px] border">33332332</span>
                <span>233332332</span>
            </div>
        </Container>
    )
}
export default TnC
