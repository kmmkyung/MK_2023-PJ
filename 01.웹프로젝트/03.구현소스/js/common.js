// 공통 JS - common.js

const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
const cg = x => console.log(x);

///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    cg("로딩완료!");

    /*-------------------------
     page2 - new menu 슬라이드
     함수명: p2Slide
     기능: 버튼 이벤트 및 기능구현
     -------------------------*/

    function p2Slide(){
        // 대상선정 - 변경대상 / 이벤트대상버튼(좌우) / 슬라이드 li / bar
        const slide = document.querySelector(".con-slide>ul");
        const rbtn = document.querySelector(".con-rbtn");
        const lbtn = document.querySelector(".con-lbtn");
        const slideli =document.querySelector(".con-slide>ul>li")
        const bar= document.querySelector(".bar-small_bar")
    
        // slideli 고유 순번 지정
        slideli.forEach((ele, idx)=>{
            ele.setAttribute("data-seq",idx)
        });

        // 

        lbtn.onclick=()=>{
            console.log("P2_왼쪽 버튼")
            slide.style.left = 350 + "px";
            slide.style.transition = ".4s";
        }
        rbtn.onclick=()=>{
            console.log("P2_오른쪽 버튼")
            slide.style.left = -350+"px";
            slide.style.transition = ".4s";
        }
    }

    p2Slide();

    /*-------------------------
     footer - svg 로고 삽입 
     -------------------------*/
    // svg 대상 : .page_6-vector__logo
    const logoSVG = qs(".page_6-vector__logo");

    // svg넣기
    logoSVG.innerHTML = svgData.logo;

}); ///////////////////////// load /////////////////////////