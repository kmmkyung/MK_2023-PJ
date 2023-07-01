/* eslint-disable */
import React, { useEffect } from 'react';
import { json, Link, Outlet } from "react-router-dom";
import ScrollTop from "./common/ScrollTop";
import $ from 'jquery'

import MainLogo from './modules/SVG_Logo/MainLogo';
import Logo_W from './data/svg/Logo_W.svg';
import Bag from './modules/Bag';

import "./css/root.css";
import "./css/core.css";

import { inputclick } from './modules/SubItem';
import { labelclick } from './modules/EmailForm';

/* 폰트어썸 임포트 */
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

$(()=>{
  inputclick(".con-btn__input");
  labelclick(".Login-con__name > input")
  labelclick(".Login-con__pw > input")

// <head> 파비콘 함수 + 호출 _____________________________________
favicon(); //---- 호출
function favicon(){
  let faviconCounter = 0;
  const faviconImg = ['./images/favicon-frame-1.png',
    './images/favicon-frame-2.png','./images/favicon-frame-3.png',
    './images/favicon-frame-4.png','./images/favicon-frame-5.png',]

  setInterval(function(){  
    document.querySelector(".icon").setAttribute("href",faviconImg[faviconCounter])
    faviconCounter++;
    if(faviconCounter == faviconImg.length-1){faviconCounter=0}
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


function Mham(){
  document.querySelector("#DTnav").classList.add('-hidden');
  const ham = document.querySelector(".ham");
  const close = document.querySelector(".close");
  const MLogo = document.querySelector('.Mnav-wrap .nav-logo svg');
  const txtbag = document.querySelector('.Mnav-wrap .nav-R li');
  const Mmenu = document.querySelectorAll(".Mmenu h3");
      
  // 메뉴창 열기
  ham.addEventListener('click',function(){
    close.classList.remove('-hidden');
    ham.classList.add('-hidden');
    document.querySelector('#Mheaderbg').style.transform="translateX(0%)"
    setTimeout(()=>{
      MLogo.style.fill="#000000"
    },300);
    setTimeout(()=>{
      txtbag.style.color="#000000"
    },700);
    document.body.style.overflow="hidden"
  })

  // 메뉴창 닫기
  function menuClose(){
    close.classList.add('-hidden');
    ham.classList.remove('-hidden');
    document.querySelector('#Mheaderbg').style.transform="translateX(-100%)"
    setTimeout(()=>{
      MLogo.style.fill="#ffffff"
    },300)
    setTimeout(()=>{
      txtbag.style.color="#ffffff"
    },200)
    document.body.style.overflow="scroll"
  }

  // 메뉴 누르면 메뉴창 닫기
  close.addEventListener('click',menuClose)
  Mmenu.forEach(v=>{
    v.addEventListener("click",menuClose)
  })
}
Mham(); //---- 호출

MBag()
function MBag(){
  const Bag = document.querySelectorAll(".Bag")
  const Bclose = document.querySelector(".Bag-close")
  const Bagwrap = document.querySelector("#bag")  
  Bag.forEach((v)=>{
    v.addEventListener('click',function(){
      Bagwrap.style.transform="translateX(0%)"
      document.body.style.overflow="hidden"
    })
  })
  Bclose.addEventListener('click',()=>{
    Bagwrap.style.transform="translateX(100%)"
    document.body.style.overflow="scroll"
  })
}

LoginBtn()
function LoginBtn(){
  const Lopen = document.querySelector(".Mlogin>h3")
  const Lclose = document.querySelector(".Login-close")
  
  Lopen.addEventListener('click',function(){
    document.querySelector("#Login").classList.remove("-hidden");
    setTimeout(()=>{
      document.querySelector("#Login").style.opacity="1";
    },10)
    document.body.style.overflow="hidden";
  })
  Lclose.addEventListener('click',function(){
    document.querySelector("#Login").style.opacity="0";
    setTimeout(()=>{
      document.querySelector("#Login").classList.add("-hidden");
    },2000)
    document.body.style.overflow="scroll"
  })
}



// 메뉴 스크롤 올리면 보이기
document.querySelector('.Mnav-wrap .nav-logo svg').style.fill="#fff";
document.querySelector('#Mnav .nav-R .Bag').style.color="#fff";
document.querySelector(".ham svg").style.color="#fff";

$(window).on("mousewheel",function(event){
  if (event.originalEvent.wheelDelta >= 0) {
    // console.log('Scroll up', $(this).scrollTop());
    let scTop = $(this).scrollTop();
    if(scTop < 800){
      $("#header").removeClass("fixed")
      document.querySelector('.Mnav-wrap .nav-logo svg').style.fill="#fff";
      document.querySelector('#Mnav .nav-R .Bag').style.color="#fff";
      document.querySelector('.ham svg').style.color="#fff";
    }else{
      $("#header").addClass("fixed")
      document.querySelector('.Mnav-wrap .nav-logo svg').style.fill="#000";
      document.querySelector('#Mnav .nav-R .Bag').style.color="#000";
      document.querySelector('.ham svg').style.color="#000";
    }
  }
  else {
    $("#header").removeClass("fixed")
  }
})

});

// 장바구니 __________________________________________________________      
let org = JSON.parse(localStorage.getItem("cart"))

const Layout = () => {

  return (
    <>
    <ScrollTop />
      <div className ="cursor"></div>
      {/* TOP -----------------------------------------------------*/}
      <header id="header">
        <div className="topBar">
          <p>~~(˘̩̩̩ε˘̩ƪ)~~ 성우야 안나와ㅇㅅ"ㅇ</p>
        </div>
        {/* DT NAV -----------------------------------------------------*/}
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
          <Link to ='/'>
            <MainLogo />
          </Link>
          <span className="ir">ZORA</span>
          <div className="nav-R">
            <ul>
              <li><a href="#">LOGIN</a></li>
              <li className='Bag'>BAG(0)</li>
            </ul>
          </div>
        </nav> 
        {/* M NAV -----------------------------------------------------*/}
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
            <Link to='/'>
              <MainLogo />
            </Link>
            <span className="ir">ZORA</span>
            <div className="nav-R">
              <ul>
                <li className='Bag'>BAG(0)</li>
              </ul>
            </div>
          </div>
          <div id="Mheaderbg">
            <div className="Mmenu">
              <Link to ='/shop'>
                <h3>SHOP</h3>
              </Link>
              <Link to ='/story'>
                <h3>Our Story</h3>
              </Link>
              <Link to ='/impact'>
                <h3>Our impact</h3>
              </Link>
            <div className="Mlogin">
              <h3>LOG-IN</h3>
            </div>
            </div>
          </div>
        </nav>
      </header>
        {/* BAG----------------------------------------------------- */}
      <aside id="bag">
        <div className="bag-wrap">
          <div className='bag-top'>
            <h3>Bag</h3>
            <button className="close">
              <FontAwesomeIcon icon={faXmark} className='Bag-close'/>
            </button>
          </div>
          <div className="bag-items__tit">
            <h3>ITEMS(<span>0</span>)</h3>
          </div>
              <Bag />
          <div className="bag-items__total">
            <span>TOTAL</span>
            <span>$0</span>
          </div>
          <button className="con-btn__buy">BUY NOW</button>
        </div>
      </aside>
        {/* LOGIN -----------------------------------------------------*/}
        <aside id='Login' className='-hidden'>
          <div className='Login-wrap'>
            <button className="close">
                <FontAwesomeIcon icon={faXmark} className='Login-close'/>
            </button>
            <div className='Login-con'>
              <h5>Login</h5>
              <div className='Login-form'>
                <form>
                  <div className='Login-con__name input'>
                    <input type="text"/>
                    <label htmlFor="text">USERNAME OR EMAIL</label>
                  </div>
                  <div className='Login-con__pw input'>
                    <input type="password"/>
                    <label htmlFor="password">PASSWORD</label>
                  </div>
                  <button className="Login-con__btn">Login</button>
                </form>
              </div>
            </div>
          </div>
          <div className='Login-bg'></div>
        </aside>
      {/* MAIN CONTENT -----------------------------------------------------*/}
      <main id="cont">
        <Outlet />
      </main>
      {/* FOOTER -----------------------------------------------------*/}
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