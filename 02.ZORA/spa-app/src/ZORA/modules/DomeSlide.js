import React, { useEffect } from "react";
// CSS
import "../css/domeslide.css";
// Data
import DomeSlide_data from "../data/DomeSlide_data";
// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


function jqFn() {
  $(() => {
  }); //--- JQB ---//
} //_______________ jqFn _______________//

const DomeSlide = () => {
  const setFn = () => {
    const slide = $(".domeslide-con");
    // 1. 드래그 설정
    slide.draggable({
      axis: "x",
    });

    // 윈도크기리턴함수
    const reWin = () => $(window).width();
    // 리사이즈 업데이트
    $(window).resize(() => {
      winW = $(window).width();
      // console.log("reWin:", winW);
    });
    let winW = reWin();

    // 드래그 끝난 후 이벤트함수(데스크탑)
    slide.on("dragstop", function () {
      // 위치값
      let slideL = slide.offset().left;

      // 1. 이동제어(왼/오/제자리)
      if (slideL < -winW * 1.1) {
        goSlide(0);
      } else if (slideL > -winW * 0.9) {
        goSlide(1);
      } else {
        slide.animate({left: -winW + "px",},200);
      }
    });


    slide.on("touchend", function (e) {
      // 위치값
      let fx = e.changedTouches[0].pageX;
      // console.log("왼", fx);

      // 1. 이동제어(왼/오/제자리)
      if (fx < -winW * 1.1) {
        goSlide(0);
      } else if (fx > -winW * 0.9) {
        goSlide(1);
      }
    });

    function goSlide(dir) {
      console.log("방향:", dir);
      if (dir) { // 분기하기 - 오른쪽이동(이동후 맨뒤li 맨앞으로 이동하기)
        slide.animate({ left: "0px" }, () => {
          slide.prepend(slide.find("li").last()).css({ left: "-100%" });
        });
        btnaddOn(0);
      }
      else { // 분기하기 - 왼쪽이동(이동후 맨앞li 맨뒤이동)
        slide.animate({left: -winW * 2 + "px",},() => {
            slide.append(slide.find("li").first()).css({ left: "-100%" });
          }
        );
        btnaddOn(2);
      }
    } //////////////// goSlide함수 ///////////////////

    // 해당 슬라이드에 맞게 버튼 클래스 부착
    const btn = $(".domeslide-btn li");
    function btnaddOn(seq) {
      let dseq = slide.find("li").eq(seq).attr("data-seq");
      console.log("dseq", dseq);

      btn.eq(dseq).addClass("on").siblings().removeClass("on");
    }

  }; //////// setFn ////////////////
  useEffect(setFn, []);
  useEffect(() => {
    const firstBtn = document.querySelectorAll(".domeslide-btn li")[0];
    if (firstBtn) {
      firstBtn.classList.add("on");
    }
  }, []);
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
          <div className="domeslide__backwrap" >
            <div className="domeslide__back" draggable="false"></div>
          </div>
        </div>
      </section>
      {jqFn()}
    </>
  );
};

export default DomeSlide;
