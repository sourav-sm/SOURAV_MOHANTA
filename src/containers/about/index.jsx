import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import {DiApple,DiAndroid} from "react-icons/di";
import {FaDev,FaDatabase} from "react-icons/fa";

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
    value: "developersourav135@gmail.com",
  },
  {
    label: "Contact",
    value: "9832786676",
  }
];

const jobsummary='Hey this is Sourav, pre final year student of NIT Durgapur, a Coder, Developer , Tech Guy, open source enthusiast . open for new opportunity.'


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
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform:"translateX(600px)",
            }}
            end={{
              transform:"TranslateX(0px)",
            }}
            >
           <div className="about_content_serviceWrapper_innerContent">
            <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)"/>
              </div>
           </div>
           </Animate>
          </div>
        </div>
      </section>
    )
}

export default About;