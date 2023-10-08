import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";

const Portfolio=()=>{
    return(
        <section id="portfolio" className="portfolio">
           <PageHeaderContetent
           headerText="My Portfolio"
           icon={<BsInfoCircleFill size={40}/>}/>
        </section>
      )
}

export default Portfolio;