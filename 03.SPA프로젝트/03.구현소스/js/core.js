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

// rounde SVG scroll rotate ______________________________________
roundSvgMove(); //---- 호출
function roundSvgMove(){
  const RC = document.querySelector(".svg__1")
  
  window.addEventListener('scroll' ,function(){
    let WinscrollY = window.scrollY
    // console.log('scrollY',WinscrollY); // ok
    RC.style.transform="rotate("+WinscrollY/10+"deg)";
  })
} //---- roundSvgMove 함수 ----//

// .-JSmove scroll transform  ______________________________________ ((해야함))
classJSmove(); //---- 호출
function classJSmove(){
  const classMove = document.querySelectorAll(".-JSmove");
  console.log('classMove',classMove); 

  // 위치값 구하기
  // window.addEventListener('scroll',function(){
  //   setTimeout(function(){
  //   classMove.style.opacity=1
  //   classMove.style.transform="translateY(0%)";
  //   },3000)
  // })
}

// MOUSE_CURSOR ______________________________________
const mouseCursor = document.querySelector(".cursor");
const mousePosition = mouseCursor.clientWidth/2;
// console.log('cursor',mouseCursor); // ok
// console.log('cursorPosition',mousePosition); // 10

document.body.onmousemove = function(){
  // console.log('x',event.pageX,'y',event.pageY); // ok
  // 위치값
  let positionX = event.clientX-mousePosition
  let positionY = event.clientY-mousePosition
  
  // 위치값 이동
  mouseCursor.style.top=positionY+"px";
  mouseCursor.style.left=positionX+"px";
}

document.body.addEventListener("mousedown",function(){
  // console.log("클릭!")
  mouseCursor.style.transform="scale(0.6)";
})
document.body.addEventListener("mouseup",function(){
  // console.log("클릭땜!")
  mouseCursor.style.transform="scale(1)";
})

// 이벤트 설정을 좀 더 자세히 클릭하고 있는 동안인지...


// Chocolate 뽀각 _______________________________________________________
// const chocolateImg1 = 

})///////////////////////// load /////////////////////////


