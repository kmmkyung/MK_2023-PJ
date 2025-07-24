/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ScrollTop from "./common/ScrollTop";
import $ from "jquery";

import MainLogo from "./modules/SVG_Logo/MainLogo";
import Logo_W from "./data/svg/Logo_W.svg";
import Bag from "./modules/Bag";

import "./css/root.css";
import "./css/core.css";

import { inputclick } from "./modules/Sub_all";
import { labelclick } from "./modules/EmailForm";

/* 폰트어썸 임포트 */
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

$(() => {
  inputclick(".con-btn__input");
  labelclick(".Login-con__name > input");
  labelclick(".Login-con__pw > input");

  chgNav()
  function chgNav(){
    const winW = window.innerWidth;
    if (winW >= 1024) {
      document.querySelector("#Mnav").classList.add("-hidden");
      document.querySelector("#DTnav").classList.remove("-hidden");
    } else {
      document.querySelector("#Mnav").classList.remove("-hidden");
      document.querySelector("#DTnav").classList.add("-hidden");
    }
  }
    

  // <head> 파비콘 함수 + 호출 _____________________________________
  function favicon() {
    let faviconCounter = 0;
    const faviconImg = [
      "./images/favicon-frame-1.png",
      "./images/favicon-frame-2.png",
      "./images/favicon-frame-3.png",
      "./images/favicon-frame-4.png",
      "./images/favicon-frame-5.png",
    ];

    setInterval(function () {
      const iconElem = document.querySelector(".icon");
      if (iconElem) {
        iconElem.setAttribute("href", faviconImg[faviconCounter]);
        faviconCounter++;
        if (faviconCounter >= faviconImg.length) {
          faviconCounter = 0;
        }
      }
    }, 800);
  }
  favicon(); // 호출

  // MOUSE_CURSOR ______________________________________
  const mouseCursor = $(".cursor");
  const mousePosition = mouseCursor.innerWidth() / 2;
  // console.log('cursor',mouseCursor); // ok
  // console.log('cursorPosition',mousePosition); // 10

  document.body.onmousemove = function (e) {
    // console.log('x',event.pageX,'y',event.pageY); // ok
    // 위치값
    let positionX = e.clientX - mousePosition;
    let positionY = e.clientY - mousePosition;

    // 위치값 이동
    mouseCursor.css({ top: positionY + "px" });
    mouseCursor.css({ left: positionX + "px" });
  };

  $("body").on("mousedown", function () {
    // console.log("클릭!")
    mouseCursor.css({ transform: "scale(0.6)" });
  });
  $("body").on("mouseup", function () {
    // console.log("클릭땜!")
    mouseCursor.css({ transform: "scale(1)" });
  });

  // 네비게이션 ____________________________________________________________
  Mham(); //---- 호출
  function Mham() {
    const ham = document.querySelector(".ham");
    const close = document.querySelector(".close");
    const MLogo = document.querySelector(".Mnav-wrap .nav-logo svg");
    const txtbag = document.querySelector(".Mnav-wrap .nav-R li");
    const Mmenu = document.querySelectorAll(".Mmenu li");

    // 메뉴창 열기
    ham.addEventListener("click", function () {
      close.classList.remove("-hidden");
      ham.classList.add("-hidden");
      document.querySelector("#Mheaderbg").style.transform = "translateX(0%)";
      setTimeout(() => {
        MLogo.style.fill = "#000000";
      }, 300);
      setTimeout(() => {
        txtbag.style.color = "#000000";
      }, 700);
      document.body.style.overflow = "hidden";
    });

    // 메뉴창 닫기
    function menuClose() {
      close.classList.add("-hidden");
      ham.classList.remove("-hidden");
      document.querySelector("#Mheaderbg").style.transform =
        "translateX(-100%)";
      setTimeout(() => {
        MLogo.style.fill = "#ffffff";
      }, 300);
      setTimeout(() => {
        txtbag.style.color = "#ffffff";
      }, 200);
      document.body.style.overflow = "scroll";
    }

    // 메뉴 누르면 메뉴창 닫기
    close.addEventListener("click", menuClose);
    Mmenu.forEach((v) => {
      v.addEventListener("click", menuClose);
    });
  }
  
  // 메뉴 스크롤 올리면 보이기
  $(window).on("mousewheel", function (event) {
    if (event.originalEvent.wheelDelta >= 0) {
      // console.log('Scroll up', $(this).scrollTop());
      let scTop = $(this).scrollTop();
      if (scTop < 800) {
        $("#header").removeClass("fixed");
      } else {
        $("#header").addClass("fixed");
      }

      // console.log("href", location.href.split("#")[1]);
      // topWhite();
      
    } else {
      $("#header").removeClass("fixed");
    }
  });
  
// topWhite()
  NavChg();
  function NavChg() {
    window.addEventListener("resize", function () {
      chgNav()
    });
  }

  // Bag ____________________________________________________________
  // function Bag() {
  //   const BagBtn = document.querySelectorAll(".Bag"); // 버튼들
  //   const Bclose = document.querySelector(".Bag-close");
  //   const Bagwrap = document.querySelector("#bag");
  //   const Bag = document.querySelector(".bag-wrap");
  
  //   BagBtn.forEach((v) => {
  //     v.addEventListener("click", function () {
  //       const scrollY = window.scrollY || document.documentElement.scrollTop; // 여기서 새로 계산!
  //       Bagwrap.style.transform = "translateX(0%)";
  //       Bagwrap.style.overflow = "hidden";
  
  //       document.body.style.position = "fixed";
  //       document.body.style.top = `-${scrollY}px`;
  //       document.body.style.width = "100%";
  
  //       Bag.style.overflow = "auto";
  
  //       setTimeout(() => {
  //         Bagwrap.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  //       }, 500);
  //     });
  //   });
  
  //   Bclose.addEventListener("click", () => {
  //     Bagwrap.style.backgroundColor = "rgba(0, 0, 0, 0)";
  
  //     setTimeout(() => {
  //       Bagwrap.style.transform = "translateX(100%)";
  
  //       // 스크롤 풀기 전에 위치 복원
  //       const scrollY = parseInt(document.body.style.top || "0") * -1;
  //       document.body.style.position = "";
  //       document.body.style.top = "";
  //       document.body.style.width = "";
  
  //       window.scrollTo(0, scrollY);
  //     }, 800);
  //   });
  // }
  
  function Bag() {
    const BagBtn = document.querySelectorAll(".Bag"); // 열기 버튼들 (모바일, 데스크탑)
    const Bclose = document.querySelector(".Bag-close"); // 닫기 버튼
    const Bagwrap = document.querySelector("#bag");
    const Bag = document.querySelector(".bag-wrap");

    let scrollY = 0;

    BagBtn.forEach((v) => {
      v.addEventListener("click", () => {
        // 현재 스크롤 위치 저장
        scrollY = window.scrollY || document.documentElement.scrollTop;

        Bagwrap.style.transform = "translateX(0%)";
        Bagwrap.style.overflow = "hidden";

        // position: fixed 바로 적용 시 스크롤 튀는 문제 방지 딜레이
        setTimeout(() => {
          document.body.style.paddingRight = '15px';
          document.body.style.position = "fixed";
          document.body.style.top = `-${scrollY}px`;
          document.body.style.width = "100%";
          Bag.style.overflow = "auto";
        }, 10);

        setTimeout(() => {
          Bagwrap.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }, 500);
      });
    });

    Bclose.addEventListener("click", () => {
      Bagwrap.style.backgroundColor = "rgba(0, 0, 0, 0)";

      setTimeout(() => {
        Bagwrap.style.transform = "translateX(100%)";

        // body 고정 해제
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.paddingRight = '0px';

        // 저장된 스크롤 위치로 돌아가기
        window.scrollTo(0, scrollY);
      }, 800);
    });
  }

  Bag(); // 호출

  

  // Login ____________________________________________________________
  LoginBtn();
  function LoginBtn() {
    const Lopen = document.querySelector("#Mnav .login");
    const Lclose = document.querySelector(".Login-close");
    const DTLopen = document.querySelector("#DTnav .login");

    Lopen.addEventListener("click", function () {
      document.querySelector("#Login").classList.remove("-hidden");
      setTimeout(() => {
        document.querySelector("#Login").style.opacity = "1";
      }, 300);
      document.body.style.overflow = "hidden";
    });
    Lclose.addEventListener("click", function () {
      document.querySelector("#Login").style.opacity = "0";
      setTimeout(() => {
        document.querySelector("#Login").classList.add("-hidden");
      }, 300);
      document.body.style.overflow = "auto";
    });
    DTLopen.addEventListener("click", function () {
      document.querySelector("#Login").classList.remove("-hidden");
      setTimeout(() => {
        document.querySelector("#Login").style.opacity = "1";
      }, 300);
      document.body.style.overflow = "hidden";
    });
  }
});



const Layout = () => {
  // 장바구니 __________________________________________________________
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const totalNum = cart.reduce((acc, item) => acc + Number(item.num), 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.num) * Number(item.price),
    0
  );

  // 로컬스토리지 업데이트 반영
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 0- main, 1- else
  let [topCon, setTopCon] = useState(0)
  const topWhite = () =>{
    let scTop = $(window).scrollTop();
    
    if (scTop <800) {
      if(topCon) return
    // 모바일M
    document.querySelector("#Mnav .nav-logo svg").style.fill = "#fff";
    document.querySelector(".ham svg").style.color = "#fff";
    document.querySelector("#Mnav .Bag").style.color = "#fff";
    // 데스크탑 DT
    document.querySelector("#DTnav .nav-logo svg").style.fill = "#fff";
    document.querySelector("#DTnav .login").style.color = "#fff";
    document.querySelector("#DTnav .Bag").style.color = "#fff";
    const DTnavli = document.querySelectorAll("#DTnav .nav-L li a");
    DTnavli.forEach((v)=>{ v.style.color = "#fff"; })
  } else {
    // 모바일M
    document.querySelector("#Mnav .nav-logo svg").style.fill = "#000";
    document.querySelector(".ham svg").style.color = "#000";
    document.querySelector("#Mnav .Bag").style.color = "#000";
    // 데스크탑 DT
    document.querySelector("#DTnav .nav-logo svg").style.fill = "#000";
    document.querySelector("#DTnav .login").style.color = "#000";
    document.querySelector("#DTnav .Bag").style.color = "#000";
    const DTnavli = document.querySelectorAll("#DTnav .nav-L li a");
    DTnavli.forEach((v)=>{ v.style.color = "#000"; })
    }
  }

  const chgTop = () =>{
    setTopCon(1);
    topWhite();
  }
  useEffect(()=>{
    topWhite();
      $(window).on("mousewheel",()=>{
        topWhite()
      });
  })

  return (
    <>
      <ScrollTop />
      <div className="cursor"></div>
      {/* TOP -----------------------------------------------------*/}
      <header id="header">
        <div className="topBar">
          <p>방문해주셔서 감사합니다!</p>
        </div>
        {/* DT NAV -----------------------------------------------------*/}
        <nav id="DTnav">
          <div className="DTnav-wrap">
            <div className="nav-L">
              <ul>
                <li onClick={chgTop}>
                  <Link to="/shop">SHOP</Link>
                </li>
                <li onClick={chgTop}>
                  <Link to="/story">OUR STORY</Link>
                </li>
                <li onClick={chgTop}>
                  <Link to="/impact">OUR IMPACT</Link>
                </li>
              </ul>
            </div>
            <Link to="/">
              <MainLogo />
            </Link>
            <span className="ir">ZORA</span>
            <div className="nav-R">
              <ul>
                <li className="login">LOG-IN</li>
                <li className="Bag">BAG<span>({totalNum})</span></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* M NAV -----------------------------------------------------*/}
        <nav id="Mnav">
          <div className="Mnav-wrap">
            <div className="nav-L">
              <ul>
                <li>
                  <button className="ham">
                    <FontAwesomeIcon icon={faBars} className="ham" />
                  </button>
                  <button className="close -hidden">
                    <FontAwesomeIcon icon={faXmark} className="close" />
                  </button>
                </li>
              </ul>
            </div>
            <Link to="/">
              <MainLogo />
            </Link>
            <span className="ir">ZORA</span>
            <div className="nav-R">
              <ul>
                <li className="Bag">BAG({totalNum})</li>
              </ul>
            </div>
          </div>
          <div id="Mheaderbg">
            <ul className="Mmenu">
              <li onClick={chgTop}>
                <Link to="/shop">SHOP</Link>
              </li>
              <li onClick={chgTop}>
                <Link to="/story">Our Story</Link>
              </li>
              <li onClick={chgTop}>
                <Link to="/impact">Our impact</Link>
              </li>
              <li className="login">LOG-IN</li>
            </ul>
          </div>
        </nav>
      </header>
      {/* BAG----------------------------------------------------- */}
      <aside id="bag">
        <div className="bag-wrap">
          <div className="bag-top">
            <h3>Bag</h3>
            <button className="close">
              <FontAwesomeIcon icon={faXmark} className="Bag-close" />
            </button>
          </div>
          <div className="bag-items__tit">
            <h3>
              ITEMS(<span>{totalNum}</span>)
            </h3>
          </div>
          <Bag cart={cart} setCart={setCart}/>
          <div className="bag-items__total">
            <span>TOTAL</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="con-btn__buy">BUY NOW</button>
        </div>
      </aside>
      {/* LOGIN -----------------------------------------------------*/}
      <aside id="Login" className="-hidden">
        <div className="Login-wrap">
          <button className="close">
            <FontAwesomeIcon icon={faXmark} className="Login-close" />
          </button>
          <div className="Login-con">
            <h5>Login</h5>
            <div className="Login-form">
              <form>
                <div className="Login-con__name input">
                  <input type="text" id="email"/>
                  <label htmlFor="email" >USERNAME OR EMAIL</label>
                </div>
                <div className="Login-con__pw input">
                  <input type="password" id="password"/>
                  <label htmlFor="password">PASSWORD</label>
                </div>
                <button className="Login-con__btn">Login</button>
              </form>
            </div>
          </div>
        </div>
        <div className="Login-bg"></div>
      </aside>
      {/* MAIN CONTENT -----------------------------------------------------*/}
      <main id="cont">
        <Outlet context={{ cart, setCart }} />
      </main>
      {/* FOOTER -----------------------------------------------------*/}
      <footer id="footer">
        <img className="nav-logo-footer" src={Logo_W} alt="logo" />
        <div className="footer-wrap">
          <div className="footer-nav">
            <ul className="footer-nav__1">
              <li>
                <a href="#" className="btn-W">
                  SHOP
                </a>
              </li>
              <li>
                <a href="#" className="btn-W">
                  OUR STORY
                </a>
              </li>
              <li>
                <a href="#" className="btn-W">
                  OUR IMPACT
                </a>
              </li>
              <li>
                <a href="#" className="btn-W">
                  CONTACT
                </a>
              </li>
            </ul>
            <ul className="footer-nav__2">
              <li>
                <a href="#" className="btn-W">
                  TERMS & CONDITIONS
                </a>
              </li>
              <li>
                <a href="#" className="btn-W">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="#" className="btn-W">
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="footer-nav__3">
              <li>
                <a href="#" className="btn-W">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="#" className="btn-W">
                  SPOTIFY
                </a>
              </li>
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
