import React from "react";
import ProgressCircle from "./ProgressCircle"; // Ensure this path is correct
import {
 
  FaCircle,
  FaCircleCheck,
} from "react-icons/fa6";
import { Dialog } from "@material-tailwind/react";

function CardForprogess() {
  let maleCount = 2110;
  let femaleCount = 1000;
  return (
    <div className="m-20">
      {" "}
      {/* Adjust margin as needed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex flex-col pr-4 items-center mb-4">
            <h4>Regestered student</h4>
           
          </div>
          {/* Add more content here if needed */}
          <div>
          <h3>Request</h3>
                <p>1000</p>

                {
                //   buttons for excepting and rejecting the request
                }
                <div className="mb-4"></div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded">Accept</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
                
               <br />
          </div>
          <div>
          <h3>Request</h3>
                <p>1000</p>

                {
                //   buttons for excepting and rejecting the request
                }
                <div className="mb-4"></div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded">Accept</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
                
               <br />
          </div>
          <div>
          <h3>Request</h3>
                <p>1000</p>

                {
                //   buttons for excepting and rejecting the request
                }
                <div className="mb-4"></div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded">Accept</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
                
               <br />
          </div>
          
        </div>
        {/* Add three small cards inlin that dept1 dep2 dept3*/}
        <div className="gap-3">
          {/* {in this dive 3 litel cardes} */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <h4>aplid secence </h4>
              <p>2500 student</p>
              </div>
              </div>
              <br />
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <h4>Enginering </h4>
              <p className="font-bold text-2xl text-start">2500</p>
              </div>
              </div>
              <br />
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <h4>aplid secence </h4>
              <p>2500 student</p>
              </div>
              </div>
        </div>
        
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            <h4>Regestered student</h4>
            <ProgressCircle
             
            />
          </div>
          {/* Add more content here if needed */}
          {/* <div className="flex gap-5">
            <FaCircle className="fill-green-900 mb-1" />

            <h3 className=" flex ">males</h3>
            <p>{maleCount}</p>
          </div>
          <div className="flex gap-4">
            <FaCircle className="fill-light-blue-900 mb-1" />

            <h3>females</h3>
            <p>{femaleCount}</p>
          </div> */}
        </div>
        {/* Add more cards here if needed */}
        
      </div>
    </div>
  );
}

export default CardForprogess;
