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
     함수명: showMenu
     기능: 오버시 메뉴보이기
     대상: .l_nav>ul>li
     변경대상: .l_nav, #all_nav
     변경내용: 높이값 기존100px에서 메뉴 내용만큼
     -------------------------*/ 
    $(".l_nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(300);
        $(".r_nav").css({height:"400px"});

        let Ht = $(this).find(".submenu-box").height() + 200;
        $("#all_nav").addClass("on")
        .css({height:Ht+"px"})
        console.log(Ht);
    })
    $(".l_nav>ul>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(300)
        // $(".r_nav").stop().slideUp(300);
    })
    let setTT;
    $("#all_nav").mouseleave(function(){
       clearTimeout(setTT);
        setTT = setTimeout(() => {
            $(this).removeClass("on")
        }, 300);
        $(".r_nav").css({height:"100px"});
    })

    // const Lnav = qs(".l_nav");
    // const Lmenu = qsa(".l_nav>ul>li");
    // Lmenu.forEach(ele=>{
    //     ele.onmouseenter=()=>{
    //         // 오버시 각 메뉴 다음형제요소의 높이값읽어오기
    //         // ele.nextElementSibling - 다음형제요소
    //         // clientHeight - 높이값
    //         let eleH = ele.querySelector(".submenu").nextElementSibling.clientHeight+100;
    //         console.log(ele.querySelector("a").nextElementSibling.clientHeight);

    //         allNav.classList.add("on");
    //         allNav.style.height = eleH+"px";
    //         ele.style.height = eleH+"px";
    //         ele.querySelector(".submenu").style.height = eleH+"px";

    //     }
    //     ele.onmouseleave=()=>{
    //         allNav.classList.remove("on");
    //         allNav.style.height = "100px";
    //         Lnav.style.height = "100px";
    //         ele.style.height = "100px";
    //         ele.querySelector(".submenu").style.height = "0px";
    //     }

    // })
    

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