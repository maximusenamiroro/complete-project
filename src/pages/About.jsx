import '../styles/about.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="px-10">

                <div className="title text-4xl py-5 text-[#fd0581] ">About Me</div>


                <div className="about my-5 ">
                    Hello,
                    I'm Perpetual, a passionate front-end developer dedicated to creating engaging and user-friendly web experiences .
                    With a strong foundation in web development technologies and a keen eye for design,
                    I specialize in bringing dynamic and interactive interfaces to life.
                    In my portfolio, you'll find a showcase of projects that highlight my skills in front-end development.
                    Each project demonstrates my ability to combine functionality, aesthetics, and user-centric design principles.
                    I strive to create websites that not only look visually appealing but also prioritize usability and accessibility to enhance the overall user journey.
                </div>

           <Link to="/contact">
                <a href="">
                    <button className="l p-3 my-5 rounded-lg bg-[#fd0581]">
                        Let's Talk
                    </button>
                </a>
                </Link>
            </div>
            
        </>
    )
}

export default About;