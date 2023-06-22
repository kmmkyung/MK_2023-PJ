// 돔 컴포넌트 - domCon.js
// CSS
import "../css/domecon.css";
// Data
import DomeCon_data from '../data/DomeCon_data';
// 제이쿼리 
import $ from "jquery"
import { useState } from "react";

function jqFn(){
    $(()=>{ 
        console.log('DomeCon로딩')
  }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();


// 컴포넌트 출력용
function DomeCon(props){

  let test = DomeCon_data[props.cat][props.num]

  return(
    <>
    {console.log(test.caption1.split("^"))}
    
  <section id='domecon'>
    <div className="domecon-wrap">
      <div className="domecon-img">
        <img src={test.src} alt="img"/>
        <p className="domecon-img__cation">
              <strong>{test.caption1.split("^")[0]} </strong>
              <span>{test.caption1.split("^")[1]}</span><br/>
              <strong>{test.caption2.split("^")[0]} </strong>
              <span>{test.caption2.split("^")[1]}</span>
        </p>
      </div>
      <div className="domecon-con">
        <img className="svg_oneshool" src={test.svg}/>
        <h2 className="domecon-con__tit">
          {
          test.tit.split("^").map((v,i)=>{
            return <div key={i}>{v}</div>
          })
          }
        </h2>
        <p className="domecon-con__text">{test.con1}</p>
        <button className="domecon-con__btn btn-B">{test.btn}</button>
      </div>
    </div>
  </section>
    {/* {jqFn()} */}
    </>
  )
} //______________ domCon_______________//
export default DomeCon;