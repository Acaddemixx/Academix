

const EditProfile = () => {
    return(
        <div className='flex flex-col w-[100%] p-5 gap-5 col-span-2'>
            <div>
                <p className='text-sm text-[#041643] font-bold'>User Name</p>
                <input className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center '/>
            </div>
            <div>
                <p className='text-sm text-[#041643] font-bold'>Email</p>
                <input className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center '/>
            </div>
            <div>
                <p className='text-sm text-[#041643] font-bold'>Department</p>
                <input className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center '/>
            </div>
            <div className="flex gap-5">
                <div className="w-full">
                    <p className='text-sm text-[#041643] font-bold'>Year</p>
                    <input className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center '/>
                </div>
                <div className="w-full">
                    <p className='text-sm text-[#041643] font-bold'>Section</p>
                    <input className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center '/>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;