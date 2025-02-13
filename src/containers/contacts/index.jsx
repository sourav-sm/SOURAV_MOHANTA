// import React from "react";
// import PageHeaderContetent from "../../compnents/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate } from "react-simple-animate";
// import "./styles.scss";

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <PageHeaderContetent
//         headerText="My Contact"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="contact__content">
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(-200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <h3 className="contact__content__header-text">Let's Connect</h3>
//         </Animate>
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <div className="contact__content__form">
//             <div className="contact__content__form__controlswrapper">
//               <div>
//                 <input
//                   required
//                   name="name"
//                   className="inputName"
//                   type={"text"}
//                 />
//                 <label htmlFor="name" className="nameLabel">
//                   Name
//                 </label>
//               </div>
//               <div>
//                 <input
//                   required
//                   name="email"
//                   className="inputEmail"
//                   type={"text"}
//                 />
//                 <label htmlFor="email" className="emailLabel">
//                   Email
//                 </label>
//               </div>
//               <div>
//                 <textarea
//                   required
//                   name="description"
//                   className="inputDescription"
//                   type={"text"}
//                   rows="5"
//                 />
//                 <label htmlFor="description" className="descriptionLabel">
//                   Description
//                 </label>
//               </div>
//             </div>
//             <button>Submit</button>
//           </div>
//         </Animate>
//       </div>
//     </section>
//   );
// };
// export default Contact;

/*************** */
// import React, { useRef } from 'react';
// import emailjs from "@emailjs/browser";
// import PageHeaderContetent from "../../compnents/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate } from "react-simple-animate";
// import "./styles.scss";

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_zp40cj8', 'template_pwz6rn2', form.current, 'mnkfS_dPjkUeXtXLX')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} className="contact__content__form">
//       <div className="contact__content__form__controlswrapper">
//         <div>
//           <input
//             required
//             name="name"
//             className="inputName"
//             type={"text"}
//           />
//           <label htmlFor="name" className="nameLabel">
//             Name
//           </label>
//         </div>
//         <div>
//           <input
//             required
//             name="email"
//             className="inputEmail"
//             type={"text"}
//           />
//           <label htmlFor="email" className="emailLabel">
//             Email
//           </label>
//         </div>
//         <div>
//           <textarea
//             required
//             name="description"
//             className="inputDescription"
//             type={"text"}
//             rows="5"
//           />
//           <label htmlFor="description" className="descriptionLabel">
//             Description
//           </label>
//         </div>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <PageHeaderContetent
//         headerText="My Contact"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="contact__content">
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(-200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <h3 className="contact__content__header-text">Let's Connect</h3>
//         </Animate>
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <ContactUs />
//         </Animate>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import styled from "styled-components";
// import PageHeaderContetent from "../../compnents/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate } from "react-simple-animate";
// import "./styles.scss";

// // npm i @emailjs/browser

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_zp40cj8",
//         "template_120fukb",
//         form.current,
//         "mnkfS_dPjkUeXtXLX"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//           e.target.reset();
//           // console.popup
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="contact">
//       <PageHeaderContetent
//         headerText="My Contact"
//         icon={<BsInfoCircleFill size={40} />}
//       />

//     <div className="contact__content">
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(-200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//            <h3 className="contact__content__header-text">Let's Connect</h3>
//         </Animate>
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//            <div className="contact__content__form">
//              <div className="contact__content__form__controlswrapper">
//       <form ref={form} onSubmit={sendEmail}>
//        <div>
//           <label className="nameLabel">Name</label>
//           <input required type="text" name="user_name"  className="inputName"/>
//         </div>
//         <div>
//           <label className="emailLabel">Email</label>
//           <input required type="email" name="user_email"  className="inputEmail"/>
//         </div>
//         <div>
//           <label  className="descriptionLabel">Message</label>
//           <textarea required name="description" rows="5" className="inputDescription"/>
//         </div>
//       </div>
//         <input type="submit" value="Send" />
//       </form>
//       </Animate>    
//     </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsAlignBottom, BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContetent from "../../compnents/pageHeaderContent";
import styled from "styled-components";
import "./styles.scss";

const StyledContactForm = styled.form`
  /* Add your styling here */
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zp40cj8',
        'template_120fukb',
        form.current,
        // 'mnkfS_dPjkUeXtXLX'
        'r865tUufINr4ZqbtP'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");//update
          e.target.reset();
          // You can add a toast or alert here to notify the user
        },
        (error) => {
          alert(error.text);//update
        }
      );
  };


  return (
    <section id="contact" className="contact">
      <div className="contact-header">
         <PageHeaderContetent
           id="header-text"
           headerText="Have a Project on Your Mind 🤔"
           icon={<BsInfoCircleFill size={30} />}
         />
      </div>
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text" style={{ marginBottom: "25px" }}>
            Let's Connect
          </h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <StyledContactForm ref={form} onSubmit={sendEmail}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <label className="nameLabel">Name</label>
                <input required type="text" name="user_name" className="inputName" />
              </div>
              <div>
                <label className="emailLabel">Email</label>
                <input required type="email" name="user_email" className="inputEmail" />
              </div>
              <div>
                <label className="descriptionLabel">Message</label>
                <textarea required type="text" name="message" rows="5" className="inputDescription" />
              </div>
              <div>
              <input type="submit" className="button" value="Send" />
              </div>
            </div>
            {/* <input type="submit" className="button" value="Send" /> */}
          </StyledContactForm>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;


{/* 
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

 */}
