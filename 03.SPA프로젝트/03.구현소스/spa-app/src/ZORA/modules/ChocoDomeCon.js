//  초콜릿 돔 컴포넌트 - ChocoDomeCon.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/chocodomecon.css";
import ChocoDomeCon_data from "../data/ChocoDomeCon_data";
import $ from "jquery";

function jqFn() {
  $(() => {
    console.log("chocodomecon로딩");

  }); //--- JQB ---//
} //_______________ jqFn _______________//

const setcss_wrap = [
  {
    position: "relative",
  },
  {
    top: "100vh",
    position: "absolute",
  },
  {
    top: "200vh",
    position: "absolute",
  },
  {
    top: "300vh",
    position: "absolute",
  },
  {
    top: "400vh",
    position: "absolute",
  },
];
const setcss_bg = [
  {
    height: "480vh",
    backgroundColor: "var(--org)",
  },
  {
    height: "200vh",
    backgroundColor: "var(--blue)",
  },
  {
    height: "200vh",
    backgroundColor: "var(--red)",
  },
  {
    height: "180vh",
    backgroundColor: "var(--yell)",
  },
  {
    height: "100vh",
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
      <section id="main">
        {ChocoDomeCon_data.main.map((v, i) => (
          <div className="ChocoDomeCon__warp" key={i} style={setcss_wrap[i]}>
            <div className="ChocoDomeCon__con">
              <div className="ChocoDomeCon__img">
                <img
                  className="ChocoDomeCon__img-1 chocolatepack"
                  src={v.img1}
                  alt="chocolatepack"
                />
                <img
                  className="ChocoDomeCon__img-2  chocolatebreak"
                  src={v.img2}
                  alt="chocolatebreak"
                />
              </div>
              <div className="ChocoDomeCon__text">
                <h2 className="ChocoDomeCon__text-tit">
                  {v.tit}
                  <br />
                  {v.tit2}
                </h2>
                <button className="ChocoDomeCon__text-btn btn-B">
                <Link to={v.link}>{v.btn}</Link>
                </button>
              </div>
            </div>
            {i !== 4 && (
              <div
                className="ChocoDomeCon__back"
                data-seq={i}
                style={setcss_bg[i]}
              ></div>
            )}
            {i === 4 && (
              <div className="chocolate-5__backwrap">
                <div
                  className="ChocoDomeCon__back"
                  data-seq={i}
                  style={setcss_bg[i]}
                ></div>
              </div>
            )}
          </div>
        ))}
      </section>
      {jqFn()}
    </>
  );
} //______________ domCon_______________//
export {ChocoDomeCon, chocobreak };