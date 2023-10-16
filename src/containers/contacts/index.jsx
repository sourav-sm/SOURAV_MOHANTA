import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../compnents/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";



const Contacts=()=>{
    return(
        <section id="contact" className="contact">
           <PageHeaderContent
           headerText="contact Me"
           icon={<BsInfoCircleFill size={40}/>}/>
           <div className="contact_content">
            <Animate
              play
              duration={1}
              delay={0}
              start={{
                transform:"translateX(-200px)"
              }}
              end={{
                 transform:"translateX(0px)"
              }}
              >
                <h3 className="contact_content_header-text">Let's Connect</h3>
            </Animate>
            <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform:"translateX(200px)"
            }}
            end={{
               transform:"translateX(0px)"
            }}
            >
              <div className="contact_content_form">
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input name="name" className="inputName" type={'text'} />
                  <label htmlFor="name" className="nameLabel">Name</label>
                </div>
                <div>
                <input name="email" className="inputEmail" type={'text'} />
                  <label htmlFor="email" className="emailLabel">Name</label>
                </div>
                <div>
                <textarea 
                required
                name="description" 
                className="inputdescription" 
                type={'text'} 
                rows="5"
                />
                  <label htmlFor="description" className="descriptionLabel">Name</label>
                </div>
              </div>
              <button>Submit</button>
              </div>
            </Animate>
           </div>
        </section>
      )
}

export default Contacts;