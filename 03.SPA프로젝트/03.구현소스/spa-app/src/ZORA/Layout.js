import React from 'react';
import "./css/root.css";
import "./css/core.css";
import Logo_W from './data/svg/Logo_W.svg';
import rounde_cricle from './data/svg/rounde_cricle.svg';
import rounde_hand from './data/svg/rounde_hand.svg';
import { Link, Outlet } from "react-router-dom";
import $ from 'jquery'
import MainLogo from './modules/SVG_Logo/MainLogo';

/* 폰트어썸 임포트 */
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

$(()=>{
// <head> 파비콘 함수 + 호출 _____________________________________
favicon(); //---- 호출
function favicon(){
  let faviconCounter = 0;
  const faviconImg = ['./images/favicon-frame-1.png',
    './images/favicon-frame-2.png','./images/favicon-frame-3.png',
    './images/favicon-frame-4.png','./images/favicon-frame-5.png',]

  setInterval(function(){  
    document.querySelector(".icon").setAttribute("href",faviconImg[faviconCounter])
    if(faviconCounter == faviconImg.length-1){faviconCounter=0;}
    else{faviconCounter++;}
  },800)
};

// MOUSE_CURSOR ______________________________________
const mouseCursor = $('.cursor');
const mousePosition = mouseCursor.innerWidth()/2;
// console.log('cursor',mouseCursor); // ok
// console.log('cursorPosition',mousePosition); // 10

document.body.onmousemove = function(e){
  // console.log('x',event.pageX,'y',event.pageY); // ok
  // 위치값
  let positionX = e.clientX-mousePosition
  let positionY = e.clientY-mousePosition
  
  // 위치값 이동
  mouseCursor.css({top:positionY+"px"})
  mouseCursor.css({left:positionX+"px"})
}

$("body").on("mousedown",function(){
  // console.log("클릭!")
  mouseCursor.css({transform:"scale(0.6)"})
})
$("body").on("mouseup",function(){
  // console.log("클릭땜!")
  mouseCursor.css({transform:"scale(1)"})
})

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

// 웹 네비 숨기 ______________________________________________________
document.querySelector("#DTnav").classList.add('-hidden');
});


const Layout = () => {
  return (
      <>
        <div className ="cursor"></div>
        {/* 상단영역 네비게이션 */}
        <header id="header">
          <div class="topBar">
            <p>~~(˘̩̩̩ε˘̩ƪ)~~ 성우야 안나와ㅇㅅ"ㅇ</p>
          </div>
          <nav id="DTnav">
            <div class="nav-L">
              <ul>
                <li><a href="#">SHOP</a></li>
                <li><a href="#">LEARN</a></li>
              </ul>
            </div>
            <MainLogo/>
            <span class="ir">ZORA</span>
            <div class="nav-R">
              <ul>
                <li><a href="#">LOGIN</a></li>
                <li><a href="#">BAG(0)</a></li>
              </ul>
            </div>
          </nav> 
        <nav id="Mnav">
            <div class="Mnav-wrap">
                <div class="nav-L">
                  <ul>
                    <li>
                      <button class="ham">
                      <FontAwesomeIcon icon={faBars} />
                      </button>
                      <button class="close -hidden">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <MainLogo/>
                <span class="ir">ZORA</span>
                <div class="nav-R">
                  <ul>
                  <li><a href="#">BAG(0)</a></li>
                </ul>
              </div>
            </div>
            <div id="Mheaderbg">
              <div class="Mmenu">
                <h3>SHOP</h3>
                <h3>Our Story</h3>
                <h3>Our impact</h3>
              </div>
              <div class="Mlogin">
                <h3>LOG-IN</h3>
              </div>
            </div>
          </nav> 
        </header>
        {/* 움직이는 원 svg */}
        <aside>
          <div class="svg">
          <img className ="svg__1" src={rounde_cricle} alt="logo" />
            <img className ="svg__2" src={rounde_hand} alt="logo" />
          </div>
        </aside>
        {/* 메인 */}
        <main id="cont">
          <Outlet />
        </main>
        {/* 하단영역 */}
        <footer id="footer">
          <img className ="nav-logo-footer" src={Logo_W} alt="logo" />
          <div className="footer-wrap">
            <div className="footer-nav">
              <ul className="footer-nav__1">
                <li><a href="#" className="btn-W">SHOP</a></li>
                <li><a href="#" className="btn-W">OUR STORY</a></li>
                <li><a href="#" className="btn-W">OUR IMPACT</a></li>
                <li><a href="#" className="btn-W">CONTACT</a></li>
              </ul>
              <ul className="footer-nav__2">
                <li><a href="#" className="btn-W">TERMS & CONDITIONS</a></li>
                <li><a href="#" className="btn-W">PRIVACY POLICY</a></li>
                <li><a href="#" className="btn-W">FAQ</a></li>
              </ul>
              <ul className="footer-nav__3">
                <li><a href="#" className="btn-W">INSTAGRAM</a></li>
                <li><a href="#" className="btn-W">SPOTIFY</a></li>
              </ul>
            </div>
            <p>© 2023 ZORA™</p>
          </div>
        </footer>
      </>
  );
}; 
// 내보내기
export default Layout;