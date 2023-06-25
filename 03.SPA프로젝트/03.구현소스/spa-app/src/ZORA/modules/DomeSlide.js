import React from 'react';
// CSS
import "../css/domeslide.css";
// Data
import DomeSlide_data from "../data/DomeSlide_data"
// 제이쿼리
import $ from "jquery"


function jqFn(){
  $(()=>{ 
    console.log('DomeSlide 로딩')
    
    //대상 선정
    const slide = $(".domeslide-con")
    const winW = $(window).width();
    console.log('reWin',winW);
    // slide.draggable({axis='x'})
    // 드래그 끝난 후 위치
    slide.on('dragstop',function(){
      console.log('gg');
      
    });

    
    

      
  }); //--- JQB ---//
} //_______________ jqFn _______________//

const DomeSlide = () => {
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