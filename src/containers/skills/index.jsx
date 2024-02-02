import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
// import {Line} from "rc-progress";
import './styles.scss';

const Skills=()=>{
    return(
        <section id="skills" className="skills">
         <PageHeaderContetent
         headerText="My Skills"
         icon={<BsInfoCircleFill size={40}/>}/>
   
        <div className="skills__content-wrapper">
          {
            skillsData.map((item,i)=>(
                <div key={i} className="skills__content-wrapper__inner-content">
                 <Animate
                 play
                 duration={1}
                 delay={0.3}
                 start={{
                  transform:'translateX(-200px)'
                 }}

                 end={{
                  transform:'translateX(0px)'
                 }}
                 >
                  <h3 className="skills__content-wrapper__inner-content__category-text">
                    {item.label}
                    </h3>
                 <div className="skills__content-wrapper__inner-content__progressbar-container">
                  {
                    item.data.map((skillItem,j)=>(
                      <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity:1","opacity:0"]}
                      iterationCount="1"
                      >
                        <div className="progressbar-wrapper" key={j}>
                        {/* <p>{skillItem.skillName}</p> */}
                        <img src={skillItem.skillName}  />
                        {/* <Line
                         percent={skillItem.percentage}
                         strokeWidth="2"
                         strokeColor="var(--yellow-theme-main-color)"
                         trailWidth="2"
                         strokeLinecap="square"
                         /> */}
                        </div>
                      </AnimateKeyframes>
                    ))
                  }
                 </div>
                 </Animate>
               </div>
            ))
          }
           </div>
      </section>
    );
};

export default Skills;