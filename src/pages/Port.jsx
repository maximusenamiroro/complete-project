import Sidepic from "../assets/Images/sidepic.jpg";
import HTML from '../assets/Images/HTML.png'
import CSS from '../assets/Images/CSS.png'
import Javascript from '../assets/Images/Javascript.jpg'
import React from '../assets/Images/React.png'
import Works from "../components/works"


const Port = () => {
  return (
    <>
      <div className="flex item-center mt-6 ">
        <div className="ml-16">
          <img className="h-[28em] rounded-[4em]" src={Sidepic} alt="" />
        </div>
        <div className="ml-12 ">
          <div className="flex ">
            <p className="font-medium text-[3em] ">
              Hi, I'm <span className="text-[#fd0581]">Perpetual</span> <br/>
              <span className="text-white">a Frontend Developer</span>
            </p>
          </div>
          <div className="bg-white rounded-lg mt-4">
            <div className="flex">
                <img className="w-24 ml-24 mt-10 " src={HTML} alt=""/>
                <img className="w-20 ml-24 mt-10" src={CSS} alt=""/>
                </div>
                <div className="flex ">
                <img className="w-24 ml-24 mt-6" src={Javascript} alt=""/>
                <img className="w-24 ml-24 mt-6" src={React} alt=""/>
                </div>
            </div>
        </div>  
      </div>

                    {/* SECTION2 */}
        
    <div className="mt-16">
        <p className="font-semibold text-3xl underline text-center">My Works</p>
        <div>
            <Works/>
        </div>
    </div>
    </>
  );
};

export default Port;
