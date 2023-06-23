import React from 'react';
// CSS
import "../css/domeslide.css";
// Data
import DomeSlide_data from "../data/DomeSlide_data"
// 제이쿼리
import $ from "jquery"
$(()=>{
  // Slide();
  // function Slide(){
  //   // 슬라이드 대상
  // const slider = document.querySelector(".domeslide-con")
  // const slidelist = document.querySelector(".domeslide-con__list")

  // const chgSeq = () => {

  // }
  // }
})

const DomeSlide = () => {
  return(
    <>
      <section id="domeslide">
        <div className="domeslide-wrap">
          <ol className="domeslide-con">
            {
              DomeSlide_data.map((v,i)=>
                <li className="domeslide-con__list" data-seq={i} key={i}>
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
              DomeSlide_data.map((v,i)=>
              <li key={i}>
                <div className="btn"></div>
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