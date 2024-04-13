import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const ViewProfile = () => {
    return(
        <div className='flex flex-col w-[100%] px-5 py-2 h-[450px] col-span-2 border-2 border-[#041643] shadow-blue-gray-200 rounded-lg   '>
            <div className="flex items-center py-1">
                <p className='text-md w-[50%] text-[#041643] font-bold'>User Name</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>Jhon Doe</div>
            </div>
            <div className="flex items-center border-t py-1">
            <p className='text-md w-[50%] text-[#041643] font-bold'>Email</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>jhondoe@aastu.edu.et</div>
            </div>
            <div className="flex items-center border-t py-1">
                <p className='text-md w-[50%] text-[#041643] font-bold'>Department</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>Software Engineering</div>
            </div>
           
            <div className="flex items-center border-t py-1">
                <p className='text-md w-[50%] text-[#041643] font-bold'>Year</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>3</div>
            </div>
            <div className="flex items-center border-t py-5">
                <p className='text-md w-[50%] text-[#041643] font-bold'>Section</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>B</div>
            </div>
            <div className="flex items-center border-t py-5">
                <p className='text-md w-[50%] text-[#041643] font-bold'>Bio</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>Vestibulum ante ipsum primis in faucibus orci luctus.</div>
            </div>
      
        </div>
    )
}

export default ViewProfile;