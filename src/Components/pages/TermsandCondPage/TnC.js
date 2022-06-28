import Container from "../../../Shared/Container/header"
import bgshadow from '../../../assets/images/bgshadow.png'
import TnCimage from "../../../assets/images/TnC.png"
import Smallcircle from "../../../assets/images/Smallcircle.png"

const TnC =() =>{
    return(
        <Container>
            <div className="container mx-auto mb-[7rem] ">
                <img src={bgshadow} className="w-[700px] ml-[37rem] pb-10 " alt="bgshadow"/>
                <img src={TnCimage} alt="TnCimage" className="w-[1046px] mx-auto -mt-[40rem] rounded-lg hover:border-2 border-blue-300 hover:rounded-[2.1rem]"/>
            </div>
            <div className="flex flex-row-2 container mx-auto">
                <div className="mx-5">
                    <img src={Smallcircle} className="" alt="Smallcircle"/>
                </div>
                <div className="text-xl ml-[1.5rem]">
                    <p>Eligibility Requirements</p>
                </div>
            </div>
            <div className="inline-flex container mx-auto leading-loose">
                <div className="ml-[4.4rem]  ">
                    <div className='' style={{borderRight:'1px solid #99BF18', height: '1000px' }}></div>
                </div>
                <div className=" w-[66rem] ml-[4.5rem] ">
                    <p className="mb-4">The following conditions must be satisfied and agreed to for your application to be accepted.</p>
                    <ul className="list-disc ml-[3rem]">
                        <li><p>You must be 18 years of age or over as of 1st of May 2022</p></li>
                        <li><p>You must be of good moral character and not be under the influence of any medication, drugs, or other substance which may impair your ability to undertake your employment responsibilities. By applying for this position, you authorize Meristem Securities Limited to conduct civil, criminal, financial, driver history, and other background checks deemed necessary by Meristem Securities Limited.</p></li>
                        <li><p>You must be willing to be employed by Meristem Securities Limited or its nominee, for a period of six months pursuant to an employment agreement and otherwise act in accordance with the reasonable directions of Meristem Securities Limited during the employment period.</p></li>
                        <li><p>If you are shortlisted by Meristem Securities Limited for an interview, you must be willing and able to make yourself available for the interview. Interviews are expected to occur in June 2022.</p></li>
                        <li><p>You must be willing to participate in a formal interview and various activities during the interview process. Activities may include team challenges, physical, skill-based, and aptitude tests.</p></li>
                        <li><p>Meristem Securities Limited shall be entitled to use your application, name, likeness, appearance, voice, and biographical information for its promotional and publicity purposes.</p></li>
                        <li><p>Your involvement in the selection process and your employment is entirely at your own risk. 
                            You agree to release Meristem Securities Limited and its nominees, and each of their respective officers, 
                            directors, agents, representatives, and employees, and all others connected with the selection process and your employment, 
                            from any and all claims, actions, damages, liabilities, losses, costs and expenses, in any way arising out of or 
                            resulting from your involvement in the selection process and your employment, including, without limitation, 
                            any and all claims, actions, and liabilities for injury, loss or damage to you, to anyone else or to any property, 
                            regardless of whether or not such injury, loss or damage was caused by the negligence or misconduct of Meristem Securities Limited, 
                            its nominees or any of their respective officers, directors, agents, representatives or employees, or anyone else connected with the selection process 
                            and your employment. You agree to indemnify Meristem Securities Limited and its nominees and each of their respective officers, 
                            directors, agents, representatives, employees, and all others connected with the project
                            and hold them harmless from all liabilities, claims, actions, damages, expenses, and losses 
                            (including, without limitation, legal fees) of any kind or nature whatsoever in any way caused by or arising out of your involvement in the selection process
                            and your employment. 
                            </p>
                        </li>
                        <li><p>Shortlisted candidates will behave in an appropriate and professional manner as befitting their potential representation of Meristem Securities Limited.</p></li>
                        <li><p>Any inappropriate, illegal, or immoral behaviour on the part of the shortlisted candidates will result in immediate exclusion from the selection process.</p></li>
                        <li><p>All applicants will be subscribed to receive email communications from Wealthbuddy by Meristem.</p></li>
                        <li><p>The closing date for applications is ______, however, this date may be brought forward at Meristem Securities Limited’s discretion.</p></li>
                    </ul>
                </div>
            </div>


            <div className="flex flex-row-2 container -mt-2 mx-auto">
                <div className="mx-5">
                    <img src={Smallcircle} className="" alt="Smallcircle"/>
                </div>
                <div className="text-xl ml-[1.6rem]">
                    <p>Employment Conditions</p>
                </div>
            </div>
            <div className="flex container mb-[5rem] mx-auto leading-loose">
                <div className="ml-[2.3rem]  ">
                    <div className='' style={{borderRight:'1px solid #99BF18', height: '720px' }}></div>
                </div>
                <div className="w-[66rem] ml-[4.5rem]">
                    <p className="mb-4">The successful applicant will be required to enter into an employment agreement incorporating the following conditions. All applicants must confirm their acceptance of these conditions.</p>
                    <ul className="list-disc ml-[3rem]">
                        <li><p>You must be available for a three-month employment period.</p></li>
                        <li><p>Employment responsibilities will include the following:</p></li>
                        <p>a. Providing weekly updates via social media/blog.</p>
                        <p>b. Represent Wealthbuddy by Meristem at various functions.</p>  
                        <p>c. Be a true Wealthbuddy ‘Ambassador’ and participate in media interviews as required.</p>
                        <p>d. Act responsibly always and in accordance with the reasonable directions of Wealthbuddy by Meristem team.</p>

                        <li><p>During the employment period, you must:</p></li>
                        <p>a. Act responsibly and demonstrate good moral character.</p>
                        <p>b. Should these requirements not be met, Meristem Securities Limited shall be entitled to terminate the employment agreement at its absolute discretion.</p>
                        <li><p>The gross wage of N1,000,000 is inclusive of allowances, benefits and an amount of applicable income tax will be withheld. The wage will be paid monthly during the period of employment.</p></li>
                        <li><p>The employee, as a representative of Wealthbuddy by Meristem, will act in an appropriate and professional manner and not engage in any activity or undertaking which brings disrepute or cause damage to the reputation of Wealthbuddy by Meristem.</p></li>
                        <li><p>The employee will exercise reasonable skill, care, and diligence in the performance of the services in accordance with the standards of Meristem Securities Limited.</p></li>
                        <li><p>Meristem Securities Limited will own all intellectual property in digital contents, reports, diaries, blogs, photos, and other material created by the employee in the course of their employment.</p></li>
                        <li><p>Meristem Securities Limited reserves the right to monitor and edit material produced by the employee in line with its corporate communication and marketing guidelines.</p></li>
                    </ul>
                </div>
            </div>

        </Container>
    )
}
export default TnC
