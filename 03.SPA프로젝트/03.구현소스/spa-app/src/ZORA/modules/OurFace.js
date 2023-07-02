import React from 'react';

// Data
import OurFace_data from '../data/OurFace_data';
// CSS
import "../css/ourface.css";
// 제이쿼리
import $ from "jquery"
function jqFn(){
  $(()=>{
  })
}

const OurFace = (props) => {
  return(
    <>
    <section id="ourface">
      <div className="ourface-wrap">
        {
          // window.width > 768 && //768보다 크면 코드 실행
        }
        <div className="ourface-L" style={{backgroundImage:`url(${OurFace_data[props.num].src})`}}>
          <div className="ourface-L__con">
            <h1>{OurFace_data[props.num].tit}</h1>
            <p>{OurFace_data[props.num].con}</p>
          </div>
        </div>
        <div className="ourface-R">
          {
            // window.width < 768 && //768보다 작으면 코드 실행
          }
          <div className="ourface-R__bg" style={{backgroundImage:`url(${OurFace_data[props.num].src})`}}></div>
        </div>
      </div>
    </section>
    {jqFn()}
    </>
  )
}

export default OurFace;
