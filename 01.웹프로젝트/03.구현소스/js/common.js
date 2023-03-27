// 공통 JS - common.js

const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
const cg = x => console.log(x);

///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    cg("common.js 로딩완료!");

    /*-------------------------
     footer - svg 로고 삽입 
     대상 : .page_6-vector__logo
     -------------------------*/
    const logoSVG = qs(".page_6-vector__logo");

    // svg넣기
    logoSVG.innerHTML = svgData.logo;

    /*-------------------------
     page1 - 메뉴 보이기
     함수명: 
     기능: 
     대상: 
     변경대상: 
     -------------------------*/



    /*-------------------------
     page2 - new menu 슬라이드
     함수명: p2Slide
     기능: 버튼 이벤트 및 기능구현
     대상: rbtn, lbtn
     변경대상: slide, bar
     -------------------------*/

    function p2Slide(){
        // 대상선정 - 변경대상 / 이벤트대상버튼(좌우) / 슬라이드 li / bar
        const slide = document.querySelector(".con-slide>ul");
        const rbtn = document.querySelector(".con-rbtn");
        const lbtn = document.querySelector(".con-lbtn");
        const slideli =document.querySelector(".con-slide>ul>li");
        const bar= document.querySelector(".bar-small_bar");
    
        // 초기화 1 - 순번 붙이기
        slideli.forEach(ele,idx => {
            ele.setAtrribute("data-seq", idx);
        }); ///// forEach /////

        // 초기화 2 - 맨뒤 맨앞으로 이동 2번
        const chgseq = () =>{
            // 현재 슬라이드 li 새로읽기
            slideli = slide.querySelectorAll("li");
            slide.insertBefore(slideli[slideli.length-1],slideli[0]);
        } ///// chgseq 함수 //////

        for(let i=0;i<2;i++) chgseq();

        // 슬라이드 변경함수
        const GoSlide = (seq) => {
            if(prot) return;
            prot = 1;
            setTimeout(() => {
                prot = 0;
            }, 400);

            // 오른쪽 버튼 클릭시
            console.log("P2_오른쪽 버튼")
            if(seq){
                slide.style.left = -350+"px";
                slide.style.transition = "left .4s ease-in-out";
            }
        }// 슬라이드 변경함수

        // lbtn.onclick=()=>{
        //     console.log("P2_왼쪽 버튼")
        //     slide.style.left = 350 + "px";
        //     slide.style.transition = ".4s";
        // }
    } /////p2Slide/////


}); ///////////////////////// load /////////////////////////