import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";
// import ImageOne from '../images/image1.png'
// import ImageTwo from '../images/image2.png'
// import ImageThree from '../images/image3.png'
// import ImageFour from '../images/image4.png'
// import ImageFive from '../images/image5.png'

// const portfolioData=[
//   {
//     id:2,
//     name:"Ecommerce",
//     image:ImageOne
//   },
//   {
//     id:3,
//     name:"Notes App",
//     image:ImageTwo
//   },
//   {
//     id:2,
//     name:"Supplier Design",
//     image:ImageThree
//   },
//   {
//     id:2,
//     name:"Todo App",
//     image:ImageFour
//   },
//   {
//     id:2,
//     name:"Shopping cart design",
//     image:ImageFive
//   },
// ]

const filterData = [
  {
    filterData:1,
    label:'All'
  },
  {
    filterData:2,
    label:'Development'
  },
  {
    filterData:3,
    label:'Design'
  }
]
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