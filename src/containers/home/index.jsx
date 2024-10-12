import React from "react";
import { useNavigate } from "react-router-dom";
import {Animate} from 'react-simple-animate';
import './styles.scss';
import { HiTranslate } from "react-icons/hi";
// import { Typed } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// const pdf_file_url='http://localhost:3000/RESUME_SOURAV.pdf'//for local file
const pdf_file_url='https://drive.google.com/file/d/1goTODcmwKR_LncJwF-XRFY9fYfZ7n1pH/view?usp=sharing'//for hosted view 
const Home=()=>{
   const navigate = useNavigate();
   console.log(navigate);

  const handleNavigateToContactMePage=()=>{
    navigate('./contact');
  };

  const downloadresume=(url)=>{
    const fileName=url.split('/').pop();
    const aTag=document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

    return(
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1 style={{marginLeft:'10px'}}>
                  Hello, I'm Sourav
                </h1>
                  <br />
                <h1>
                   Full-Stack Developer
                </h1>
                {/* <Typed
                    string={[
                      'Full-stack Developer',
                      'Student',
                      'Tech Enthusiast',
                      'Coder'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /> */}
            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform:"translateY(550px)",
            }}
            end={{
              transform:"TranslateX(0px)",
            }}
            >
            <div className="home_contact-me">
                <button onClick={handleNavigateToContactMePage}>Hire Me</button>
             {/* </div>
            <div className="home_contact-me"> */}
                <button onClick={()=>{downloadresume(pdf_file_url)}}>Download Resume</button>
            </div>
      {/* adding social media icons */}
     
        <div className="home_social-media-icons">    
              <a href="https://www.linkedin.com/in/sourav-mohanta-756815223/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
               </a>
               <a href="https://github.com/sourav-sm" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faGithub} size="lg" />
               </a>
               <a href="https://twitter.com/Sourav44281219" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={ faXTwitter} size="lg" />
               </a>
          </div>
           </Animate>
        </section>

    )
}

export default Home;



