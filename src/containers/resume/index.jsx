import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";


const Resume=()=>{
    return(
        <section id="resume" className="resume">
           <PageHeaderContetent
           headerText="My Resume"
           icon={<BsInfoCircleFill size={40}/>}/>
        </section>
      )
}

export default Resume;