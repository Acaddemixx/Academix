import React from 'react';
import { FiCalendar, FiBookOpen, FiUsers } from 'react-icons/fi';
import 'tailwindcss/tailwind.css';
import { CiPen } from "react-icons/ci";

const ModeratorApplication = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-xl ">
      <div className='text-center mb-6'>
        <p className="text-4xl font-bold">Features <br/> </p>
        <p className="text-gray-600 mt-2">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum tempora illo laborum</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum tempora illo laborum</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum</p>  
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-20">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            <CiPen className="text-4xl mb-2" />
            <h3 className="font-semibold text-lg mb-2">Custom Dashboard</h3>
          </div>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum ex cupiditate...</p>
          <br />
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center">View More</a>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            <FiCalendar className="text-4xl mb-2" />
            <h3 className="font-semibold text-lg mb-2">Class Schedule</h3>
          </div>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum ex cupiditate...</p>
          <br />
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center">View More</a>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            <FiBookOpen className="text-4xl mb-2" />
            <h3 className="font-semibold text-lg mb-2">Academic Calendar</h3>
          </div>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum ex cupiditate...</p>
          <br />
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center">View More</a>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            <FiUsers className="text-4xl mb-2" />
            <h3 className="font-semibold text-lg mb-2">Extracurriculars</h3>
          </div>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum ex cupiditate...</p>
          <br />
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center">View More</a>
        </div>
      </div>
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/4">
        <div className="w-full lg:w-1/3">
          <img
            className="h-96 w-full object-cover lg:h-auto lg:w-96"
            src="https://source.unsplash.com/random/800x600?student,studying,sig=1"
            alt="Student studying"
          />
        </div>
        <div className="p-8 w-full lg:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800">
            Become A Moderator for our platform
          </h2>
          <p className="text-gray-600 mt-2">
            As a moderator, you will play a crucial role in maintaining a safe and engaging environment for our users. Your responsibilities will include monitoring and enforcing guidelines, fostering positive discussions, and ensuring a friendly community atmosphere. By becoming a moderator, you will have the opportunity to make a meaningful impact and contribute to the growth and success of our platform.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 focus:outline-none focus:bg-green-800">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/4 mt-8">
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800">
            Become A Member of senior student
          </h2>
          <p className="text-gray-600 mt-2">
            Becoming a member of Senior Student Note offers a valuable opportunity for senior students to join a community <br />or platform dedicated to their specific needs. By becoming a member, students gain access to a wealth of resources,<br />support, and connections that can enhance their academic journey.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 focus:outline-none focus:bg-green-800">
              Apply Now
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <img
            className="h-96 w-full object-cover lg:h-auto lg:w-96"
            src="https://source.unsplash.com/random/800x600?student,studying,sig=2"
            alt="Student studying"
          />
        </div>
      </div>
    </div></div>
  );
};

export default ModeratorApplication;
