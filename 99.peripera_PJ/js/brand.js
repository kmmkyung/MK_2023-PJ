// 서브페이지 브랜드 JS - brand.js

// 로딩구역 ///////////////////////////////////////
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {

    // console.log("링크 로딩완료!");

    // 1. 링크 대상 선정 :
    const lnb = document.querySelectorAll(".tab_brand ul li");
    const logo = document.querySelectorAll(".logo a");
    // logo -> 모바일, pc버전 a요소 2개
    
    // 2-1. 브랜드/히스토리 페이지 연결
    lnb.forEach((ele,idx) => {
        ele.onclick = (e) => {
            e.preventDefault();
            
            if (idx === 0) {
                location.href = "brand_page.html";
            } //////// if
            else if (idx === 1) {
                location.href = "history_page.html";
            } //////// else if 

        }; /////// click ///////////
    }); /////////// forEach //////////////
}