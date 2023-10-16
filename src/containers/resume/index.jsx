import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {data} from "./utils";

const Resume=()=>{
    return(
        <section id="resume" className="resume">
           <PageHeaderContetent
           headerText="My Resume"
           icon={<BsInfoCircleFill size={40}/>}
           />

           <div className="timeline">
              <div className="timeline_experience">
                <h3 className="timeline_experience_header-text">
                  Experience
                </h3>
                <VerticalTimeline
                layout={'1-column'}
                lineColor="var(--yellow-theme-main-color)">
                  {
                    data.experience.map((item,i)=>{
                      <VerticalTimelineElement
                      key={i}
                      className="timeline_experience_vertical-timeline-element">
                        <div className="vertical-timeline-element-title-wrapper">
                          <h3 className="vertical-timeline-element-title">
                            {item.title}
                          </h3>

                          <h4 className="vertical-timeline-element-subtitle">
                            {item.subTitle}
                          </h4>
                          <p>{item.description}</p>
                        </div>
                      </VerticalTimelineElement>
                    })
                  }
                </VerticalTimeline>
              </div>
              <div className="timeline_education">
              <div className="timeline_experience">
                <h3 className="timeline_experience_header-text">
                  Experience
                </h3>
                <VerticalTimeline
                layout={'1-column'}
                lineColor="var(--yellow-theme-main-color)">
                  {
                    data.education.map((item,i)=>{
                      <VerticalTimelineElement
                      key={i}
                      className="timeline_education_vertical-timeline-element">
                        <div className="vertical-timeline-element-title-wrapper">
                          <h3 className="vertical-timeline-element-title">
                            {item.title}
                          </h3>

                          <h4 className="vertical-timeline-element-subtitle">
                            {item.subTitle}
                          </h4>
                          <p>{item.description}</p>
                        </div>
                      </VerticalTimelineElement>
                    })
                  }
                </VerticalTimeline>
              </div>
              </div>
           </div>
        </section>
      )
}

export default Resume;