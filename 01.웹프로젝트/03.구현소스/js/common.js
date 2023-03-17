// 공통 JS - common.js

const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
const cg = x => console.log(x);

window.addEventListener("DOMContentLoaded",()=>{

    cg("로딩완료!");

    // svg 대상 : .page_6-logo
    const logoSVG = qs(".page_6-logo");

    // svg넣기
    logoSVG.innerHTML = svgData.logo;

}); /////////// load /////////////////////////