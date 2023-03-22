// 공통 JS - common.js

const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
const cg = x => console.log(x);

///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    cg("로딩완료!");

    /*-------------------------
     page2 - new menu 슬라이드
     기능: 버튼 이벤트 및 기능구현
     -------------------------*/

    const p2_Slide = document.querySelector(".con-slide");
    const p2_rbtn = document.querySelector(".con-rbtn");
    const p2_lbtn = document.querySelector(".con-lbtn");

        let num = 0;
        
        p2_rbtn.onclick=()=>{
            console.log("P2_오른쪽 버튼")
            p2_Slide.style.left = (num++*-350) + "px";
            p2_Slide.style.transition = ".4s";
        }
        p2_lbtn.onclick=()=>{
            console.log("P2_왼쪽 버튼")
            p2_Slide.style.left = (num--*-350) + "px";
            p2_Slide.style.transition = ".4s";
        }

    /*-------------------------
     footer - svg 로고 삽입 
     -------------------------*/
    // svg 대상 : .page_6-logo
    const logoSVG = qs(".page_6-vector__logo");

    // svg넣기
    logoSVG.innerHTML = svgData.logo;

}); ///////////////////////// load /////////////////////////