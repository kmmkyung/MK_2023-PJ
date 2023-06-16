import React from 'react';
// CSS
import "./css/emailform.css";
// 제이쿼리
import $ from "jquery"

const EmailForm = () => {
  return(
    <>
  <section id="Email">
    <div class="Email-wrap">
      <div class="Email-con">
        <h3 class="Email-con__tit">Big love for<br/>little rituals</h3>
        <p class="Email-con__text">We only send nice emails. Promise.</p>
      </div>
      <form class="Email-form">
        <div class="Email-form__push">
          <label for="email">EMAIL</label>
          <input type="email" id="email" placeholder="EMAIL" />
        </div>
        <input class="Email-form__btn" type="submit" value="→" /> 
      </form>
    </div>
  </section>
    </>
  )
}

export default EmailForm;