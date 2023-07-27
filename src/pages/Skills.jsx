import '../styles/skills.css'
import HTML from '../assets/Images/HTML.png'
import CSS from '../assets/Images/CSS.png'
import Javascript from '../assets/Images/Javascript.jpg'
import BOOTSTRAP from '../assets/Images/BOOTSTRAP.jpg'
import React from '../assets/Images/React.png'


const Skills = () => {
    return (
        <>
            <div>
                <div className="inner">
                    <div className="">
                        <h1 className="skills-title text-4xl text-center w-full">SKILLS</h1>
                    </div>
                    <div className="main">
                        <div className="container">
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <img src={HTML} className="skill-icon" />
                                    </div>
                                    <h3>HTML 5</h3>
                                </div>
                                <p>
                                Through clean and semantically structured HTML code, I craft websites that are both user-friendly and accessible across various devices. <br></br>
                                My expertise lies in building responsive layouts that adapt seamlessly to different screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones.<br></br>
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <img src={CSS} alt="" className="skill-icon" />
                                    </div>
                                    <h3>CSS 3</h3>
                                </div>
                                <p>
                                Accessibility is a priority in my CSS implementations, and I meticulously optimize web designs to be inclusive and user-friendly for all audiences. I also adhere to best practices, ensuring clean and organized CSS code that is easily maintainable and scalable.
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <img src={Javascript} alt="" className="skill-icon" />
                                    </div>
                                    <h3>JAVASCRIPT</h3>
                                </div>
                                <p>
                                I demonstrate expertise in leveraging JavaScript to build responsive user interfaces that provide seamless user experiences. From handling user interactions to manipulating the DOM, my code ensures smooth and intuitive interactions on various devices and browsers.
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <img src={BOOTSTRAP} alt="" className="skill-icon" />
                                    </div>
                                    <h3>BOOTSTRAP</h3>
                                </div>
                                <p>
                                From landing pages to complex web applications, my Bootstrap skills play a pivotal role in producing visually striking and feature-rich websites that meet the needs of clients and delight their audiences.
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <img src={React} alt="" className="skill-icon" />
                                    </div>
                                    <h3>REACT.JS</h3>
                                </div>
                                <p>
                                In my portfolio, I proudly showcase my expertise in React, demonstrating my ability to build robust and cutting-edge web applications. With a deep understanding of React's component-based architecture, I create interactive and responsive user interfaces that captivate users and deliver seamless experiences
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Skills;