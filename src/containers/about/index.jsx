import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import pic from "../../pic.png";

const personalDetails = [
  {
    label: "Name",
    value: "Sourav Mohanta",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "souravmohanta4428@gmail.com",
  },
  {
    label: "Contact",
    value: "9832786676",
  }
];

const jobsummary="I'm Sourav, a final-year undergraduate with a keen interest in programming and development. I'm highly passonate for open-source and previously served as an summer-research  Intern at NIT Durgapur, where we developed and maintain a website for a NGO. Driven by a passion for continuous learning and exploring diverse computer science domains, I'm always eager to embrace new opportunities and stay abreast of evolving technologies."


const About=()=>{
    return(
      <section id="about" className="about">
         <PageHeaderContetent
         headerText="About Me"
         icon={<BsInfoCircleFill size={40}/>}/>
        <div className="about_content">
          <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform:"translateX(-900px)",
            }}
            end={{
              transform:"TranslateX(0px)",
            }}
            >
          <h3>Front End Developer</h3>
          <p>{jobsummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform:"translateX(500px)",
            }}
            end={{
              transform:"TranslateX(0px)",
            }}
            >
          <h3 className="personalInformationHeaderText">Personal Information</h3>
          <ul>
            {
              personalDetails.map((item,i)=>(
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))
            }
          </ul>
          </Animate>
          </div>
          <div className="about_content_serviceWrapper">
           <div className="about_content_serviceWrapper_innerContent">
            {/* profile pic */}
            <img src={pic} alt="" />
           </div>
          </div>
        </div>
      </section>
    )
}

export default About;