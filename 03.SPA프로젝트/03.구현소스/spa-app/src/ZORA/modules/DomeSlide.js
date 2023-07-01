import React, { useEffect } from "react";
// CSS
import "../css/domeslide.css";
// Data
import DomeSlide_data from "../data/DomeSlide_data";
// 제이쿼리
import $, { data } from "jquery";
import "jquery-ui-dist/jquery-ui";

function jqFn() {
  $(() => {
    console.log("DomeSlide 로딩");
    $(".domeslide-btn li").eq(0).addClass("on");
  }); //--- JQB ---//
} //_______________ jqFn _______________//

const DomeSlide = () => {
  //
  // 슬라이드 이동함수
  const slide = $(".domeslide-con");
  const setFn = () => {
    // 1. 드래그 설정
    slide.draggable({
      axis: "x",
    });

    // 윈도크기리턴함수
    const reWin = () => $(window).width();
    // 리사이즈 업데이트
    $(window).resize(() => {
      winW = $(window).width();
      // console.log("reWin:",winW);
    });
    let winW = reWin();


    // 드래그 이동 함수 : goSlide
    function goSlide(dir) {
      // dir - 전달변수
      // console.log("방향:", dir);
      // slide.on("dragstart touchstart", ()=>{ // <- slide.on("dragstart touchstart" 추가
        // 오른쪽이동
        if (dir) {
          slide.animate({ left: "0px" }, () => {
            slide.prepend(slide.find("li").last()).css({ left: "-100%" });
          });
          addOn(0);
        }
        // 왼쪽이동
        else {
          slide.animate({left: -winW * 2 + "px",},() => {
              slide.append(slide.find("li").first()).css({ left: "-100%" });
            });
          addOn(2);
        }
      // })
    } // goSlide함수

    // 드래그 끝난 후 이벤트함수
    slide.on("dragstop touchend", function () { // <- touchend 추가
      // 위치값
      let slideL = slide.offset().left;
      // console.log('왼',slideL);

      // 1. 이동제어(왼/오/제자리)
      if (slideL < -winW * 1.1) {
        goSlide(0);
      } else if (slideL > -winW * 0.9) {
        goSlide(1);
      } else {slide.animate({left: -winW + "px",},200);}
    });

    // 모바일 터치 시
    // touchstart, touchmove, touchend,

    // 버튼 구분 addOn 함수
    const btn = $(".domeslide-btn li");
    function addOn(seq) {
      let dseq = slide.find("li").eq(seq).attr("data-seq");
      // console.log('dseq',dseq);
      let btnone = $(".domeslide-btn li:first-child .btn");
      // console.log('dd',btnone);
      // console.log('btneq',btn.eq(0));
      // console.log('slideep',slide.eq(0));
      btn.eq(dseq).addClass("on").siblings().removeClass("on");
    } // addOn 함수
    
  }; //////// setFn //////////

  useEffect(setFn, []);

  return (
    <>
      <section id="domeslide">
        <div className="domeslide-wrap">
          <ol className="domeslide-con">
            {DomeSlide_data.map((v, i) => (
              <li className="domeslide-con__list" data-seq={i} key={i}>
                <img src={v.src} alt="coment" />
                <p>{v.con}</p>
                <h4>{v.name}</h4>
                <h5>{v.job}</h5>
              </li>
            ))}
          </ol>
          <ol className="domeslide-btn">
            {DomeSlide_data.map((v, i) => (
              <li key={i}>
                <div className="btn"></div>
              </li>
            ))}
          </ol>
          <div className="domeslide__backwrap">
            <div className="domeslide__back"></div>
          </div>
        </div>
      </section>
      {jqFn()}
    </>
  );
};

export default DomeSlide;
