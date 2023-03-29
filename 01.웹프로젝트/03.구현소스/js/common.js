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
    

    // ______________________________page2_____________________________
    /*-------------------------
     page2 - new menu 슬라이드
     함수명: p2Slide
     기능: 이동방향에 따른 요소 이동하기
     대상: btns
     변경대상: slide, bar
     -------------------------*/
     const btns = document.querySelectorAll(".con-btns>.btns");
     const bar= document.querySelector(".bar-small_bar");
    
     const p2Slide = (dir) => {
        // dir 버튼구분(1-오른쪽 / 0- 왼쪽)
        
        // 선정 / 광클금지변수 / 대상
        let prot = 0;
        const slide = document.querySelector(".con-slide>ul");
        let slideli =document.querySelectorAll(".con-slide>ul>li");
        
        // 광클금지
        if(prot) return;
        prot =1; //잠금
        setTimeout(() => {
            prot = 0; // 0.4초 후 해제
        },400)
        
        // 호출확인
        console.log("dir", dir);
        
        // 분기하기(이동대상 : slideli)
        // if 오른쪽 / else 왼쪽
        if(dir) {
            slide.appendChild(slideli[0]);
        }
        else{
            slide.insertBefore(slideli[slideli.length - 1], slideli[0]);
        }
    }; ///// p2Slide /////

        // 버튼 클릭이벤트
        console.log(btns)
        btns.forEach((ele, idx) => {
            ele.onclick = () => {
                // 슬라이드 함수 호출
                p2Slide(idx);
                // 자동호출 지우기
                clearAuto();
            }; ///// click /////
        }); ///// forEach /////
                
        /*-------------------------
        함수명: autoSlide
        기능: 인터발 함수로 슬라이드 자동 함수 호출
        -------------------------*/
        
        // 인터발 함수 지우기 위한 변수
        let autoI
        // 타임아웃함수 지우기 위한 변수
        let autoT
        function autoSlide() {
            console.log("인터발 시작");
            // 인터발함수로 슬라이드 함수 호출
            autoI = setInterval(() => p2Slide(1), 3000);
        } /////autoSlide 함수 /////

        // 최초호출
        autoSlide();

    /*-------------------------
     함수명: clearAuto
     기능: 인터발 함수 지우고 다시 셋팅
     -------------------------*/
     function clearAuto() {
        console.log("인터발 멈춤");
        // 인터발 지우기
        clearInterval(autoI);

        // 타임아웃 지우기
        clearTimeout(autoT);

        // 5초 후 작동(인터발은 3초 후 => 8초)
        autoT = setTimeout(autoSlide, 5000);
     } ///// clearAuto 함수 /////

    
    // ______________________________page2_____________________________


}); ///////////////////////// load /////////////////////////