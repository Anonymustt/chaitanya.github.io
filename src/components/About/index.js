
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'



const About = () => {

    
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}/>
                </h1>
                <p>
                Welcome to my digital realm! I am Chaitanya Dhingra, a dedicated computer science student 
                currently pursuing my academic journey at the esteemed National Institute of Technology, Hamirpur.
                 My passion lies at the crossroads of development and cybersecurity, 
                 where I am constantly exploring the vast possibilities that technology offers.
                </p>
                <p>
                My academic pursuits have led me to delve into the fascinating realm of machine learning, 
                while also honing my expertise in Java and mastering the intricacies of data structures and algorithms. 
                This foundation serves as the backbone of my technical prowess, allowing me to tackle complex challenges 
                with confidence and creativity. 
                I am driven by the belief that technology, when wielded skillfully, 
                can transform ideas into reality and address the evolving needs of our digital landscape.
                </p>
                <p>
                One facet of my versatility unfolds in my proficiency in ReactJS,
                 where I have successfully completed projects showcasing a keen eye for frontend development. 
                 Creating seamless and user-friendly interfaces has become a personal mission, 
                 and my commitment to enhancing the user experience is evident in every line of code I write. 
                 Currently, I am channeling this passion into a significant project—a website designed to 
                 facilitate online study resources for the Pau CET entrance exam. 
                 This endeavor reflects not only my technical acumen but also my dedication to leveraging technology 
                 for educational empowerment and accessibility.

                Feel free to navigate through my portfolio to explore more about my projects, skills, and 
                the exciting journey I am on as a computer science enthusiast.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color='#f89820'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>
        </div>
     
        </>
    )
}

export default About