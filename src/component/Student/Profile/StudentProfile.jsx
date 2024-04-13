import React, { useState } from 'react';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import EditSocials from './EditSocials';
import EditBio from './EditBio';
const StudentProfile = () => {
    const [activeTab, setActiveTab] = useState('ViewProfile');

  const renderComponent = (tab) => {
    switch (tab) {
      case 'EditProfile':
        return <EditProfile />;
      case 'ViewProfile':
        return <ViewProfile />;
      case 'EditBio':
        return <EditBio />;
      case 'EditSocials':
        return <EditSocials/>;
      default:
        return <ViewProfile />;
    }}
    return (
        <div className='p-20 h-[100vh] bg-[#041643] flex items-center'>
            <div className="flex flex-col h-[550px] bg-white w-full justify-start p-10 rounded-[15px]">
            <p className="text-3xl text-[#041643] font-extrabold w-full">Profile</p>
            <div className='grid grid-cols-4 h-full w-full gap-5'>
                <div className='flex flex-col w-[70%] h-[470px] p-5 gap-2'>
                <div className='bg-red-100 rounded-full h-[300px] w-[150px] overflow-hidden border-gray-100 border-2'>
                    <img src="./images/profileimg.jpg" alt="" className='object-cover w-full h-full'/>
                </div>
                <div className='w-full text-[11px] font-bold'>
                    <p>Jhon Doe, 3rd year-Software</p>
                </div>
                    <div className='bg-[#041643] h-full w-full flex flex-col rounded-lg'>
                        <div className='flex gap-1 p-5 items-center'>
                            <FaTelegramPlane className='w-5 h-5 text-white'/>
                            <p className='text-white text-[12px] '>@jhonDoe</p>
                        </div>
                        <div className='flex gap-1 p-5 items-center'>
                            <FaInstagram className='w-5 h-5 text-white'/>
                            <p className='text-white text-[12px] '>@jhonDoe</p>
                        </div>
                        <div className='flex gap-1 p-5 items-center'>
                            <BsTwitterX className='w-5 h-5 text-white'/>
                            <p className='text-white text-[12px] '>@jhonDoe</p>
                        </div>
                    </div>
                </div>
                {renderComponent(activeTab)}
                <div className='flex flex-col gap-5 p-5 pt-10'>
                    <div
                    className='h-[30px] flex items-center bg-[#041643] rounded-md text-white p-5 cursor-pointer text-[14px]'
                    onClick={() => setActiveTab('ViewProfile')}
                    >
                    <p>View Profile Info</p>
                    </div>
                    <div
                    className='h-[30px] flex items-center bg-[#041643] rounded-md text-white p-5 cursor-pointer text-[14px]'
                    onClick={() => setActiveTab('EditSocials')}
                    >
                    <p>Edit Socials Info</p>
                    </div>
                    <div
                    className='h-[30px] flex items-center bg-[#041643] rounded-md text-white p-5 cursor-pointer text-[14px]'
                    onClick={() => setActiveTab('EditProfile')}
                    >
                    <p>Edit Profile Info</p>
                    </div>
                    <div
                    className='h-[30px] flex items-center bg-[#041643] rounded-md text-white p-5 cursor-pointer text-[14px]'
                    onClick={() => setActiveTab('EditBio')}
                    >
                    <p>Edit Bio</p>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
      
      );
}

export default StudentProfile;