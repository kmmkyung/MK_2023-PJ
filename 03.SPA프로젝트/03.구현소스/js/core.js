///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded", () => {

// 파비콘 함수 + 호출 ________________________________________
function favicon(){
  const faviconImg = [
    './images/favicon-frame-1.png',
    './images/favicon-frame-2.png',
    './images/favicon-frame-3.png',
    './images/favicon-frame-4.png',
    './images/favicon-frame-5.png',
  ]
  let faviconCounter = 0;
  
  setInterval(function(){
    
    // document.querySelector("head").innerHTML='<link rel="icon" href="'+faviconImg[faviconCounter]+'" type="image/png">'
    document.querySelector(".icon").setAttribute("href",faviconImg[faviconCounter])
    if(faviconCounter == faviconImg.length-1){faviconCounter=0;}
    else{faviconCounter++;}
   },2000)
}; //// setInterval ////
favicon();
//______________________________________________________________

  // 헤더 메뉴바 svg
  document.querySelector(".nav-logo").innerHTML=SvgData.logo;
  // 고정 svg
  document.querySelector(".svg__1").innerHTML=SvgData.rounde_hand;
  document.querySelector(".svg__2").innerHTML=SvgData.rounde_cricle;
  // page1 svg
  document.querySelector(".page1-svg").innerHTML=SvgData.page1;

})///////////////////////// load /////////////////////////
