import React from 'react';
// CSS
import "../css/emailform.css";
// 제이쿼리
import $ from "jquery"
$(()=>{
  
})

const EmailForm = () => {
  return(
    <>
  <section id="Email">
    <div className="Email-wrap">
      <div className="Email-con">
        <h3 className="Email-con__tit">Big love for<br/>little rituals</h3>
        <p className="Email-con__text">We only send nice emails. Promise.</p>
      </div>
      <form className="Email-form">
        <div className="Email-form__push">
          <input className="push-em" type="email" id="email"/>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input className="push-btn" type="submit" value="→" /> 
          </div>
        </div>
      </form>
    </div>
  </section>
    </>
  )
}

export default EmailForm;