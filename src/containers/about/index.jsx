import React, { useEffect, useState } from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import pic from "../../pic.png";
import { SiLeetcode } from "react-icons/si";



// const personalDetails = [
//   {
//     label: "Name",
//     value: "Sourav Mohanta",
//   },
//   {
//     label: "Age",
//     value: "21",
//   },
//   {
//     label: "Address",
//     value: "India",
//   },
//   {
//     label: "Email",
//     value: "souravmohanta4428@gmail.com",
//   },
//   {
//     label: "Contact",
//     value: "9832786676",
//   }
// ];

const jobsummary="I'm Sourav, a final-year undergraduate with a keen interest in programming and development. I'm highly passonate for open-source and previously worked as Frontend Developer Intern at Prodloop, also served as an summer-research  Intern at NIT Durgapur, where we developed and maintain a website for a NGO. Driven by a passion for continuous learning and exploring diverse computer science domains, I'm always eager to embrace new opportunities and stay abreast of evolving technologies."


const About=()=>{
  
  const cardStyle = {
    display: "flex",
    background: "#1e1935",
    color: "#fff",
    padding: "20px",
    borderRadius: "12px",
    fontFamily: "Arial, sans-serif",
  };

  const circleProgressStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
  };

  const progressCircleStyle = {
    position: "relative",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "conic-gradient(from 90deg, #2d2d2d 50%, #6c5ce7 50%)", // Adjust progress here
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const progressNumberStyle = {
    textAlign: "center",
  };

  const statsStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  const statStyle = {
    marginBottom: "10px",
  };

  const labelStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5px",
    fontSize: "20px",
  };

  const progressBarBaseStyle = {
    height: "5px",
    borderRadius: "2.5px",
    background: "#2d2d2d",
  };

  const statInfoStyle = {
    fontSize: "15px",
    color: "#b2bec3",
    display: "flex",
    justifyContent: "space-between",
  };

  //leetcode
  const [stats,SetStats]=useState(null);
  useEffect(()=>{
    fetch('https://leetcode-stats-api.herokuapp.com/souravmohanta4428')
    .then((res)=>res.json())
    .then((data)=>SetStats(data))
    .then((err)=>console.log(err));
  },[])

    return(
      stats && (
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
          <h3>Full Stack Developer</h3>
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
          {/* <h3 className="personalInformationHeaderText">Personal Information</h3> */}
          {/* <ul>
            {
              personalDetails.map((item,i)=>(
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))
            }
          </ul> */}
          </Animate>
          </div>
          <div style={{
            width:'40vw',
            marginLeft:'10px'
          }}>
            <div style={{
              display:'flex',
              fontSize:'3.5rem',
              color:'yellow'
            }}>
              <SiLeetcode style={{marginTop:'10px',marginRight:'10px'}}/>
              LeetCode
            </div>
           {/* <div className="about_content_serviceWrapper_innerContent">
            <img src={pic} alt="" />
           </div> */}
           <div style={cardStyle}>
              {/* Circular Progress */}
              <div style={circleProgressStyle}>
                <div style={progressCircleStyle}>
                  <div style={progressNumberStyle}>
                    <div style={{ fontSize: "2.5rem", fontWeight: "semibold" }}>{stats.totalSolved}</div>
                    <small style={{ fontSize: "2.5rem", color: "#ccc" }}>{stats.totalQuestions}</small>
                  </div>
                </div>
              </div>
        
             {/* Stats */}
             <div style={statsStyle}>
               {/* Easy */}
               <div style={statStyle}>
                 <div style={labelStyle}>
                   Easy
                   <span style={{ fontSize: "20px", color: "#74b9ff" }}>31.1%</span>
                 </div>
                 <div
                   style={{
                     ...progressBarBaseStyle,
                     backgroundColor: "#74b9ff",
                     width: "31.1%",
                   }}
                 ></div>
                 <div style={statInfoStyle}>
                   {stats.easySolved}/{stats.totalEasy} <span>Beats: 84%</span>
                 </div>
               </div>
       
               {/* Medium */}
               <div style={statStyle}>
                 <div style={labelStyle}>
                   Medium
                   <span style={{ fontSize: "20px", color: "#00cec9" }}>33.9%</span>
                 </div>
                 <div
                   style={{
                     ...progressBarBaseStyle,
                     backgroundColor: "#00cec9",
                     width: "33.9%",
                   }}
                 ></div>
                 <div style={statInfoStyle}>
                 {stats.mediumSolved}/{stats.totalMedium} <span>Beats: 92%</span>
                 </div>
               </div>
       
               {/* Hard */}
               <div style={statStyle}>
                 <div style={labelStyle}>
                   Hard
                   <span style={{ fontSize: "20px", color: "#d63031" }}>23.7%</span>
                 </div>
                 <div
                   style={{
                     ...progressBarBaseStyle,
                     backgroundColor: "#d63031",
                     width: "23.7%",
                   }}
                 ></div>
                 <div style={statInfoStyle}>
                 {stats.hardSolved}/{stats.totalHard} <span>Beats: 87%</span>
                 </div>
               </div>
             </div>
             </div>
             {/* <div style={{
                display:'flex',
                justifyItems:'center',
                color:'white',
                fontSize: "18px",
                background: "#1e1935",
             }}>
            <div style={{
             display:'flex',
             flexDirection:'column'
            }}>
              <h1>Rank</h1>
             <h3>{stats.ranking}</h3>
            </div>
            <div style={{
             display:'flex',
             flexDirection:'column'
            }}>
              <h1>Contribution Points</h1>
              <h3>{stats.contributionPoints}</h3>
            </div>
            <div>
               
            </div>
             </div> */}
             <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "50px", // Adds space between Rank and Contribution Points
    color: "white",
    fontSize: "20px", // Increased font size
    fontWeight: "bold", // Makes text bold
    background: "#1e1935",
    padding: "20px", // Adds some padding for better spacing
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Centers text inside the div
    }}
  >
    <h1 style={{ fontSize: "22px" }}>Rank</h1>
    <h3 style={{ fontSize: "20px" }}>{stats.ranking}</h3>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h1 style={{ fontSize: "22px" }}>Contribution Points</h1>
    <h3 style={{ fontSize: "20px" }}>{stats.contributionPoints}</h3>
  </div>
</div>

               </div>
               </div>
             </section>
            )       
      )       
    }       
       
export default About;
