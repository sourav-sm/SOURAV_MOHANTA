import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";

const Contacts=()=>{
    return(
        <section id="about" className="about">
           <PageHeaderContetent
           headerText="About Me"
           icon={<BsInfoCircleFill size={40}/>}/>
        </section>
      )
}

export default Contacts;