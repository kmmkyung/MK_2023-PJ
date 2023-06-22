import React from 'react';
import "./css/root.css";
import "./css/core.css";
import Logo_W from './data/svg/Logo_W.svg';
import { Link, Outlet } from "react-router-dom";
import $ from 'jquery'
import MainLogo from './modules/SVG_Logo/MainLogo';

/* 폰트어썸 임포트 */
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
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

// 네비게이션 ____________________________________________________________
Mham(); //---- 호출
function Mham(){
  document.querySelector("#DTnav").classList.add('-hidden');
  const ham = document.querySelector(".ham")
  const close = document.querySelector(".close")
  const MLogo = document.querySelector('.Mnav-wrap .nav-logo svg')
  const Mbag = document.querySelector('.Mnav-wrap .nav-R a')
  
  ham.addEventListener('click',function(){
    close.classList.remove('-hidden');
    ham.classList.add('-hidden');
    document.querySelector('#Mheaderbg').style.transform="translateX(0%)"
    setTimeout(()=>{
      MLogo.style.fill="#000000"
    },300);
    setTimeout(()=>{
      Mbag.style.color="#000000"
    },700);
  })
  close.addEventListener('click',function(){
    close.classList.add('-hidden');
    ham.classList.remove('-hidden');
    document.querySelector('#Mheaderbg').style.transform="translateX(-100%)"
    setTimeout(()=>{
      MLogo.style.fill="#ffffff"
    },300)
    setTimeout(()=>{
      Mbag.style.color="#ffffff"
    },200)
  })
}
});


const Layout = () => {
  return (
      <>
        <div className ="cursor"></div>
        {/* 상단영역 네비게이션 */}
        <header id="header">
          <div className="topBar">
            <p>~~(˘̩̩̩ε˘̩ƪ)~~ 성우야 안나와ㅇㅅ"ㅇ</p>
          </div>
          <nav id="DTnav">
            <div className="nav-L">
              <ul>
                <li>
                  <Link to ='/shop'>
                    <h3>SHOP</h3>
                  </Link>
                </li>
                <li>
                  <h3>LEARN</h3>
                </li>
              </ul>
            </div>
            <Link to ='/main'>
              <MainLogo/>
            </Link>
            <span className="ir">ZORA</span>
            <div className="nav-R">
              <ul>
                <li><a href="#">LOGIN</a></li>
                <li><a href="#">BAG(0)</a></li>
              </ul>
            </div>
          </nav> 
        <nav id="Mnav">
            <div className="Mnav-wrap">
                <div className="nav-L">
                  <ul>
                    <li>
                      <button className="ham">
                        <FontAwesomeIcon icon={faBars} className='ham'/>
                      </button>
                      <button className="close -hidden">
                        <FontAwesomeIcon icon={faXmark} className='close' />
                      </button>
                    </li>
                  </ul>
                </div>
              <Link to='/main'>
                <MainLogo/>
              </Link>
              <span className="ir">ZORA</span>
              <div className="nav-R">
                <ul>
                  <li><a href="#">BAG(0)</a></li>
                </ul>
              </div>
            </div>
            <div id="Mheaderbg">
              <div className="Mmenu">
                <Link to ='/shop'>
                  <h3>SHOP</h3>
                </Link>
                <h3>Our Story</h3>
                <h3>Our impact</h3>
              </div>
              <div className="Mlogin">
                <h3>LOG-IN</h3>
              </div>
            </div>
          </nav> 
        </header>
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




// 해야할거
// 위로 스크롤시 헤더 픽스드로
// 클릭하면 메뉴가 사라짐
// 