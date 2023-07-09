window.addEventListener("DOMContentLoaded", () => {
  console.log("core-JS 로딩완료!");

  // ______________________________page1_____________________________
  /*-------------------------
  page1 - 메뉴 보이기
  기능: 오버시 메뉴보이기
  대상: .nav>ul>li
  변경대상: .nav
  변경내용: 높이값 기존100px에서 메뉴 내용만큼
  -------------------------*/
  const nav = document.querySelector("#gnb .nav"); // 메뉴 전체
  const menu = document.querySelectorAll(".nav>ul>li"); // 4가지 메뉴
  const submenu = document.querySelectorAll(".submenu"); // 4가지 메뉴의 서브
  const about = document.querySelector(".submenu_h2"); // about 메뉴
  // console.log("nav", nav);
  // console.log("menu", menu);
  // console.log("submenu", submenu);
  
  menu.forEach((v,i) => {    
    v.onmouseenter = () => {
      submenu[i].style.display = "block";
      let vH = v.querySelector(".submenu ul").clientHeight;      

      nav.classList.add("on"); // 메뉴 전체에 배경색 넣어주기
      about.style.display = "block";
      nav.style.height =  vH + 150 + "px";
    };
    v.onmouseleave = () => {
      submenu[i].style.display = "none";
    }
  });
  nav.onmouseleave = () => {
    about.style.display = "none";
    nav.classList.remove("on");
    nav.style.height = "100px";
};
  // ______________________________mobile-menu_____________________________
  /*-------------------------
    mobile-menu - menu 보이기
    함수명: mobileMenu
    기능: #gnb에 class .on을 적용시키면 모바일전용 메뉴 보여짐
    대상: .ham , .close
    변경대상: #gnb
    -------------------------*/
  // 대상
  const ham = document.querySelector(".ham");
  const close = document.querySelector(".close");
  // console.log(ham,close)
  ham.onclick = mobileMenu;
  close.onclick = mobileMenu;
  function mobileMenu() {
    // console.log("모바일메뉴");
    const gnb = document.querySelector("#gnb");
    // console.log(gnb);
    gnb.classList.toggle("on");
  }

  /*-------------------------
    mobile-menu - 하위메뉴
    함수명: mobileMH
    기능: 메뉴 li클릭시 하위메뉴 열기/닫기
    대상: .l_nav>ul>li>a
    -------------------------*/
  // 대상
  const navM = document.querySelectorAll(".l_nav>ul>li>a");
  // console.log("대상",navM);

  // 이벤트 셋팅
  navM.forEach((x, idx) => {
    x.onclick = () => {
      console.log("메뉴요소", x);
      moveMenu(idx);

      let tg = x.nextElementSibling;
      console.log("타겟높이값:", tg.clientHeight);

      let hv = tg.querySelector("ul").clientHeight;
      console.log("ul높이값:", hv);

      // (2)타겟의 높이값이 0이 아니면 0으로 hv값 변경
      if (tg.clientHeight != 0) hv = 0;
      tg.querySelector(".submenu-box").style.height = hv + "px";
      x.parentElement.classList.toggle("on");
    }; ///// click /////
  }); ///// forEach /////

  // .subMenu 클릭시 상위 li로 이벤트 버블링 막기!
  const smenu = document.querySelectorAll(".submenu");
  // console.log(smenu)
  for (let x of smenu) {
    x.addEventListener("click", (e) => e.stopPropagation());
  } ///// for of /////

  // a요소 클릭시 기본기능 막기!
  const atag = document.querySelectorAll("a");
  for (let x of atag) {
    x.addEventListener("click", (e) => e.preventDefault());
  } ///// for of /////
}); //////////////////////////////////////////////////////////////////////////////////////
