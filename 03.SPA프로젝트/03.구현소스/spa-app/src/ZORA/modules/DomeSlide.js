import React from 'react';
// CSS
import "../css/domeslide.css";
// Data
import DomeSlide_data from "../data/DomeSlide_data"
// 제이쿼리
import $ from "jquery"
import {draggable} from "jquery-ui"


function jqFn(){
  $(()=>{ 
    console.log('DomeSlide 로딩')      
  }); //--- JQB ---//
} //_______________ jqFn _______________//

const DomeSlide = () => {

  const slide = $(".domeslide-con");
  const slist = slide.find('li');

  // 1. 드래그 설정
  slide.draggable({
    axis: "x" 
});


  return(
    <>
      <section id="domeslide">
        <div className="domeslide-wrap">
            <ol className="domeslide-con" >
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
      {jqFn()}
    </>
  )
}

export default DomeSlide;