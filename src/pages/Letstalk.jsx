import React from "react";
import '../styles/Letstalk.css'
import Handshake from '../assets/images/shaking.jpg';

        const Contact = () => {
            return (
                <>
                <div className="py-4 lg:py-8  relative">
                    <div className="backgrou h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" ></div>
                    <div className="xl:mx-auto xl:container  relative ">
                        <div className="flex flex-wrap xl:mx-auto xl:container">
                            <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                                <div className="backgrou h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"></div>
                                <div className="w-full flex flex-col items-start  xl:justify-start z-20 xl:px-0 px-4 xl:py-0 py-4">
                                    <div className="w-full 2xl:pl-48 xl:pt-1">
                                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">My Contact Details</h1>
                                        <div className="w-full md:w-10/12 mt-3">
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                                            <div className="mt-4 md:mt-8">
                                                <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Address</h2>
                                                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, NUST University H-12 Sector, Islamabad</h2>
                                            </div>
                                            <div className="mt-4 md:mt-8">
                                                <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Contact</h2>
                                                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 051 4567890 (Phone)</h2>

                                            </div>
                                            <div className="mt-4 md:mt-8">
                                                <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Email</h2>
                                                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">alphasquad@example.com</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                                <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700">Let’s Talk</h1>
                                    <div className="w-full 2xl:w-8/12 mt-3">
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                                        <div className="mt-4 md:mt-8">
                                            <p className="text-gray-800 text-base font-medium">Name</p>
                                            <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" required placeholder="Justin Timberlake" />
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <p className="text-gray-800 text-base font-medium">Email Address</p>
                                            <input className="mt-3 text-base required border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" required type="email" placeholder="example@mail.com" />
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <p className="text-gray-800 text-base font-medium">Message</p>
                                            <textarea className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" required type="text" placeholder="Write us something..." defaultValue={""} />
                                        </div>
                                        <div className="py-5">
                                            <button className="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    
            )
        }
        
        
        export default Contact;

