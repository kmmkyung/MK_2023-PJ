//  초콜릿 돔 컴포넌트 - ChocoDomeCon.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/chocodomecon.css";
import ChocoDomeCon_data from "../data/ChocoDomeCon_data";
import $ from "jquery";
import Fade from "react-reveal/Fade"

function jqFn() {
  $(() => {
    console.log("chocodomecon로딩");

  }); //--- JQB ---//
} //_______________ jqFn _______________//

const setcss_bg = [
  {
    backgroundColor: "var(--org)",
  },
  {
    backgroundColor: "var(--blue)",
  },
  {
    backgroundColor: "var(--red)",
  },
  {
    backgroundColor: "var(--yell)",
  },
  {
    backgroundColor: "var(--pink)",
  },
];
// jqFn();


  const chocobreak = ()=>{
    // Chocolate 뽀각 _______________________________________________________
    const chocolateImg1 = document.querySelectorAll(".chocolatepack")
    const chocolateImg2 = document.querySelectorAll(".chocolatebreak")
    // console.log(chocolateImg1);
    
    chocolateImg2.forEach((ele,idx)=>{
      // console.log('ele',ele);
      // console.log('idx',idx);
      // 초콜릿에 마우스 오버시 뽀각
      ele.addEventListener("mouseenter",function(){
        this.style.opacity=1;
        chocolateImg1[idx].style.opacity=0;
        // console.log('chocolateImg1배열순번!',chocolateImg1[idx]);
      })
      ele.addEventListener("mouseout",function(){
        this.style.opacity=0;
        chocolateImg1[idx].style.opacity=1;
      })
    }) // forEach
  };


function ChocoDomeCon() {
    useEffect(()=> chocobreak(), [])

  return (
    <>
      <section id="ChocoDomeCon">
        <div className='ChocoDomeCon__warpAll'>
        {ChocoDomeCon_data.main.map((v, i) => (
          <div className="ChocoDomeCon__warp">
            <div className="ChocoDomeCon__con">
              <Fade bottom>
              <div className="ChocoDomeCon__img">
                <img
                  className="ChocoDomeCon__img-1 chocolatepack"
                  src={v.img1}
                  alt="chocolatepack"/>
                <img
                  className="ChocoDomeCon__img-2  chocolatebreak"
                  src={v.img2}
                  alt="chocolatebreak"/>
              </div>
              </Fade>
              <Fade bottom>
              <div className="ChocoDomeCon__text">
                <h2 className="ChocoDomeCon__text-tit">
                  {v.tit}
                  <br />
                  {v.tit2}
                </h2>
                <button className="ChocoDomeCon__text-btn btn-B">
                <Link to="/sub" state={{num:i}}>{v.btn}</Link>
                </button>
              </div>
            </Fade>
            </div>
            {i !== 4 && (
              <Fade bottom>
              <div
                className="ChocoDomeCon__back"
                data-seq={i}
                style={setcss_bg[i]}
              ></div>
              </Fade>
            )}
            {i === 4 && (
              <Fade bottom>
                <div className="chocolate-5__backwrap">
                <div
                  className="ChocoDomeCon__back"
                  data-seq={i}
                  style={setcss_bg[i]}
                ></div>
              </div>
              </Fade>
            )}
          </div>
        ))}
        </div>
      </section>
      {jqFn()}
    </>
  );
} //______________ domCon_______________//
export {ChocoDomeCon, chocobreak };