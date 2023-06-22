import React from 'react';
// CSS
import "../css/domeslide.css";
// Data
import DomeSlide_data from "../data/DomeSlide_data"
// 제이쿼리
import $, { map } from "jquery"
$(()=>{
  
})

const DomeSlide = () => {
  return(
    <>
    <section id="domeslide">
        <div className="domeslide-wrap">
          <ol className="domeslide-con">
            {
              DomeSlide_data.map((v,i)=>
              <li className="domeslide-con__list">
              <img src={v.src} alt="coment" />
              <p>{v.con}</p>
              <h4>{v.name}</h4>
              <h5>{v.job}</h5>
            </li>
              )
            }
          </ol>
          <ol className="domeslide-btn">
            {
              DomeSlide_data.map((v)=>
              <li>
                <div className="btn" key={v}></div>
              </li>
              )
            }
          </ol>
          <div className="domeslide__backwrap">
            <div className="domeslide__back"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DomeSlide;