import React from 'react';
import Fade from 'react-reveal/Fade'

const Section = ({title, desc, btn1_text, btn2_text, bgImg}) => {
  return (
    <>
        <section>
          <div className="container">
            <div className="wrapper" style={{backgroundImage:`url(${bgImg})`}}>
              <Fade bottom>
                <div className="heading">
                  <h2 className="title">{title}</h2>
                  <p className="desc">{desc}</p> 
                </div>
              </Fade>                
              <div className="button-group">
                  <Fade bottom>
                    <div className="btn">
                      <button className="btn1">{btn1_text}</button>
                      {btn2_text && <button className="btn2">{btn2_text}</button>}
                    </div>
                  </Fade>
                <div className="down-arrow">
                  <i className="fa-solid fa-angle-down"></i>
                </div>
              </div>
                
            </div>
          </div>
        </section>
    </>
  )
}

export default Section