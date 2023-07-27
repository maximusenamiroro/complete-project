import React from "react";
import Login from "../assets/Images/login.jpeg";
import Hotel from "../assets/Images/hotel.jpeg";
import Timer from "../assets/Images/timer.jpeg";
import Calculator from "../assets/Images/calculator.jpeg"

export default function Index() {
    return (
        <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <div className=" text-center">
                <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">Responsive websites</h2>
            </div>
            <div className=" grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
                <div className="relative group">
                    <img src={Login} alt="A picture of a sitting dog" className=" lg:block h-[24rem] hidden w-full " />
                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    
                    </div>
                </div>
                <div className="relative group">
                    <img src={Hotel} alt="Smiling Girl" className=" lg:block hidden h-[24rem] w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    </div>
                </div>
                <div className="relative group">
                    <img src={Timer} alt="Men Posing" className=" lg:block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    </div>
                </div>
                <div className="relative group">
                    <img src={Calculator} alt="2 puppies" className=" lg:block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    </div>
                </div>
            </div>
        </div>
    );
}
