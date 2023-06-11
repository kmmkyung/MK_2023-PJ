///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded", () => {
console.log('core JS 로딩');


// <head> 파비콘 함수 + 호출 _____________________________________
favicon(); //---- 호출
function favicon(){
  let faviconCounter = 0;
  const faviconImg = ['./images/favicon-frame-1.png',
    './images/favicon-frame-2.png','./images/favicon-frame-3.png',
    './images/favicon-frame-4.png','./images/favicon-frame-5.png',]

  setInterval(function(){  
    // document.querySelector("head").innerHTML='<link rel="icon" href="'+faviconImg[faviconCounter]+'" type="image/png">'
    document.querySelector(".icon").setAttribute("href",faviconImg[faviconCounter])
    if(faviconCounter == faviconImg.length-1){faviconCounter=0;}
    else{faviconCounter++;}
  },800)
}; //---- favicon 함수 ----//
//______________________________________________________________

// SVG _________________________________________________________
// 헤더 메뉴바 svg
document.querySelector(".nav-logo").innerHTML=SvgData.logo;
// 고정 원형 svg
document.querySelector(".svg__1").innerHTML=SvgData.rounde_cricle;
document.querySelector(".svg__2").innerHTML=SvgData.rounde_hand;
// page1 center svg
document.querySelector(".page1-svg").innerHTML=SvgData.page1;
//______________________________________________________________

// rounde SVG 스크롤시 움직임 ______________________________________
roundSvgMove(); //---- 호출
function roundSvgMove(){
  const RC = document.querySelector(".svg__1")
  
  window.addEventListener('scroll' ,function(){
    let WinscrollY = window.scrollY
    // console.log('scrollY',WinscrollY);
    RC.style.transform="rotate("+WinscrollY+"deg)";
  })
} //---- roundSvgMove 함수 ----//
})///////////////////////// load /////////////////////////
