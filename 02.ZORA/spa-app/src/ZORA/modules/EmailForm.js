import React from 'react';
// CSS
import "../css/emailform.css";
// 제이쿼리
import $ from "jquery"
function jqFn(){
  $(()=>{
    labelclick((".push-em"))
  })
}

function labelclick(params){
  const input = $(params)
  const inputlabel = $(params).next()
  
  input.on('click',function(){
    inputlabel.css("top","-50%")
    inputlabel.css("color","#ccc")
    
  })
  
  input.on('blur',function(){
    if(input.val() !== ""){
      inputlabel.css("top","-50%")
      inputlabel.css("color","#ccc")
    }else{
      inputlabel.css("top","0%")
      inputlabel.css("color","#000")
    }
  })
}

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
            <input className="push-em" type="email" id="email" name='input'/>
            <label htmlFor="email" className='lable'>EMAIL</label>
            <input className="push-btn" type="submit" value="→" /> 
          </div>
        </form>
      </div>
    </section>
    {jqFn()}
    </>
  )
}
export {EmailForm, labelclick};