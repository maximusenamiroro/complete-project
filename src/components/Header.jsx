import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Focus.css'

const Header = () => {
    const back = '<'
    const [menuShown, setMenu] = React.useState('false')

    const [curWidth, setWidth] = React.useState(0)
    const [curPageDom, setPageDom] = React.useState('home')
    setInterval(() => {
        setPageDom(document.URL)
        setWidth(document.body.clientWidth)

    }, 130)
    return (
        <>
            <div className="navBar sticky top-0 bg-[#0c000760] backdrop-blur-lg  w-[100vw] border-b border-b-[#ffffff40] h-[12vh] px-5 md:px-10 flex items-center justify-between cursor-pointer z-10">
                <a href="#"> <div className="logo duration-75 text-xl md:text-2xl">Perpetual </div></a>

                <div style={curWidth >= 768 ? {visibility: 'visible'}: menuShown === 'false' ? {visibility: "hidden"} : {visibility: "visible"} } className="Menu fixed top-0 left-0 backdrop-blur-lg z-50 cursor-default md:visible text-lg md:text-sm md:flex flex-col md:flex-row gap-5 md:gap-4 md:relative items-center flex bg-[#000000e7]  md:bg-none md:bg-transparent md:backdrop-blur-none justify-center md:w-max md:h-max w-[100vw] h-[100vh] ">
                    <div onClick={() => { setMenu('false') }} className="relative back md:hidden font-bold hover:text-[#fd0581] text-md w-[100vw] md:w-max text-right p-5 cursor-pointer"> {back} Go Back</div>
                    <Link id={curPageDom.endsWith('/')? 'FocusPage' : 'notFocus'} style={curPageDom.endsWith('/')? {color: '#fd0581'} : {color: 'white'}} onClick={() => {setMenu('false')}} to="" className="my-1 cursor-pointer md:my-0 hover:pl-4 md:hover:pl-0 duration-100 text-center link mt-[15vh] md:mt-0">Home</Link>
                    <Link id={curPageDom.includes('about')? 'FocusPage' : 'notFocus'} style={curPageDom.includes('about')? {color: '#fd0581'} : {color: 'white'}} onClick={() => {setMenu('false')}} to="about" className="my-1 cursor-pointer md:my-0 hover:ml-4 md:hover:ml-0 text-center duration-100 link">About</Link>
                    <Link id={curPageDom.includes('skill')? 'FocusPage' : 'notFocus'} style={curPageDom.includes('skill')? {color: '#fd0581'} : {color: 'white'}} onClick={() => {setMenu('false')}} to="skills" className="my-1 cursor-pointer md:my-0 hover:ml-4 md:hover:ml-0 text-center duration-100 link">Skills</Link>
                    <Link id={curPageDom.includes('portfolio')? 'FocusPage' : 'notFocus'} style={curPageDom.includes('portfolio')? {color: '#fd0581'} : {color: 'white'}} onClick={() => {setMenu('false')}} to="portfolio" className="my-1 cursor-pointer md:my-0 hover:ml-4 md:hover:ml-0  text-center duration-100 link">Portfolio</Link>
                    {/* <div className="socials items-center border-t border-t-[#ffffff40] md:w-max md:border-t-0 w-[90vw] pt-5 md:pt-0 mb-10 md:mb-0 mt-auto flex gap-4 md:ml-10 md:mt-0">
                        <div className="mr-5 md:hidden font-light text-sm">Socials</div>
                        <a href="#"><div className="w-[30px] h-[30px] rounded-full border-2 border-white duration-75 hover:border-[#fd0581]"></div></a>
                        <a href="#"><div className="w-[30px] h-[30px] rounded-full border-2 border-white duration-75 hover:border-[#fd0581]"></div></a>
                        <a href="#"><div className="w-[30px] h-[30px] rounded-full border-2 border-white duration-75 hover:border-[#fd0581]"></div></a>
                    </div> */}
                </div>


                <div onClick={() => {setMenu('true')}} className="hamb flex flex-col gap-1.5 md:hidden">
                    <div className="line rounded-md w-7 h-[2px] bg-white"></div>
                    <div className="line rounded-md w-7 h-[2px] bg-white"></div>
                    <div className="line rounded-md w-7 h-[2px] bg-white"></div>
                </div>
            </div>
        </>
    );
};


export default Header;