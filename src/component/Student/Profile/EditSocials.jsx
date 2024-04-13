import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const EditSocials = () => {
    return(
        <div className='flex flex-col w-[100%] p-5 gap-5 col-span-2'>
            <div>
                <p className='text-sm text-[#041643] font-bold'>Telegram</p>
                <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
                    <FaTelegramPlane className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
                    <input className='w-full flex-grow h-full px-2' />
                </div>
            </div>

            <div>
                <p className='text-sm text-[#041643] font-bold'>Instagram</p>
                <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
                    <FaInstagram className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
                    <input className='w-full flex-grow h-full px-2' />
                </div>
            </div>
            <div>
                <p className='text-sm text-[#041643] font-bold'>Twitter</p>
                <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
                    <BsTwitterX className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
                    <input className='w-full flex-grow h-full px-2' />
                </div>
            </div>
            
        </div>
    )
}

export default EditSocials;