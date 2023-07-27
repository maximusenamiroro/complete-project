import '../styles/home.css'
import { Link } from 'react-router-dom';
import github from '../assets/Images/github.png'
import twitter from '../assets/Images/twitter.png'
import linkedin from '../assets/Images/linkedin.png'
const Home = () => {
    return (
        <>
            <div>

                <div className="home">
                    <div className="home-content">
                        <h1 className='text-4xl'>
                            Hi I'm Perpetual
                            <span className="span"> Obu-Amu</span>
                        </h1>
                        <h3 className='text-md mt-5'>A frontend Developer</h3>
                        <p className="text-sm leading-snug">
                            My primary focus is on the client-side of web development.
                            I collaborate closely with designers and back-end developers to translate their vision and functionality into beautiful, intuitive user interfaces.
                            Leveraging my expertise in HTML, CSS, JavaScript and React.js, I craft responsive layouts, implement interactive features,and optimize performance for seamless user experiences across various devices and browsers.
                        </p>

                        <div className="btn-box">
                            <a href='mailto:perpetualobuamu@gmail.com'>Hire me</a>

                        <Link to="/contact">
                            <a href="#">Let's talk</a>
                            </Link>
                        </div>
                        <div className="home-sci  socials items-center border-t border-t-[#ffffff40] md:w-max md:border-t-0 w-[90vw] pt-5 md:pt-0 mb-10 md:mb-0 mt-auto flex gap-4 md:ml-10 md:mt-0">
                        {/* <div className="mr-5 md:hidden font-light text-sm">Socials</div> */}
                        <a href="https://github.com/Perpetual25"><div className="w-[30px] h-[30px] rounded-full border-2 border-white duration-75 hover:border-[#fd0581]">
                        <img src={github} alt="github" className="home-sci" />
                        </div></a>
                        <a href="https://twitter.com/Perpie__"><div className="w-[30px] h-[30px] rounded-full border-2 border-white duration-75 hover:border-[#fd0581]">
                        <img src={twitter} alt="" className="home-sci" />

                            </div></a>
                        <a href="linkedin.com/in/perpetual-obu-amu-815446156"><div className="w-[30px] h-[30px] rounded-full border-2 border-white duration-75 hover:border-[#fd0581]">
                        <img src={linkedin} alt="" className="home-sci" />

                            </div></a>
                    </div>

                    </div>

                </div>
            </div>
        </>
    );
};


export default Home;