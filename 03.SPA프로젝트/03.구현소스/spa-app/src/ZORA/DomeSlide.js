import React from 'react';
// CSS
import "./css/domeslide.css";
// Data
import DomeSlide_data from "./data/DomeSlide_data"
// 제이쿼리
import $ from "jquery"
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
          <ul className="domeslide-btn">
            <li>
              <div className="btn-on"></div>
              <div className="btn-noon"></div>
            </li>
            <li>
              <div className="btn-on"></div>
              <div className="btn-noon"></div>
            </li>
            <li>
              <div className="btn-on"></div>
              <div className="btn-noon"></div>
            </li>
            <li>
              <div className="btn-on"></div>
              <div className="btn-noon"></div>
            </li>
            <li>
              <div className="btn-on"></div>
              <div className="btn-noon"></div>
            </li>
            <li>
              <div className="btn-on"></div>
              <div className="btn-noon"></div>
            </li>
          </ul>
          <div className="domeslide__backwrap">
            <div className="domeslide__back"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DomeSlide;