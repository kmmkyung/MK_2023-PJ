window.addEventListener("DOMContentLoaded", () => {
  console.log("core-JS 로딩완료!");
  // ______________________________(ㅜOㅜ)=o_____________________________
  // (ㅜOㅜ)=o 왜 오류나는데 허어어엉
  /*-------------------------
  menu - 메뉴 보이기
  기능: 오버시 메뉴보이기
  대상: .nav>ul>li
  변경대상: .nav
  변경내용: 높이값 기존에서 메뉴 내용만큼 + 50px
  -------------------------*/
  const nav = document.querySelector("#gnb .nav"); // 로고기준 왼쪽 메뉴바 전체
  const menu = document.querySelectorAll(".nav>ul>li"); // 4가지 메뉴(브랜드, 메뉴, 스토어, 뉴스)
  const submenu = document.querySelectorAll(".submenu"); // 4가지 메뉴의 서브
  const about = document.querySelector(".submenu_h2"); // about us 메뉴
  // console.log("nav", nav);
  // console.log("menu", menu);
  // console.log("submenu", submenu);
  // console.log('about',about);

  // 해당 메뉴에 마우스 올리면
  menu.forEach((v, i) => {
    v.onmouseenter = () => {
      submenu[i].style.display = "block"; // 해당 메뉴의 서브메뉴 보여줘

      // 서브메뉴 전체 높이값
      let vH = v.querySelector(".submenu ul").clientHeight;
      nav.classList.add("on"); // 메뉴바에 남색 배경색 넣어주기
      about.style.display = "block"; // about us 보여줘
      nav.style.height = vH + 150 + "px"; // 뒷배경(남색) vH+50px정도 늘려주기
    };

    // 해당 메뉴에 마우스 떨어지면
    v.onmouseleave = () => {
      submenu[i].style.display = "none"; // 헤딩 메뉴의 서브메뉴 숨겨줘
    };
  });

  // 그리고 왼쪽 전체 메뉴에 마우스 떨어지면
  nav.onmouseleave = () => {
    if (window.innerWidth <= 786) {
      // 모바일버전에서 about us는 늘 있어줘
      about.style.display = "block";
    } else {
      about.style.display = "none"; // 모바일버전이 아니면 사라져
    }
    nav.classList.remove("on"); // 메뉴바에 남색 배경색 뼤줘
    nav.style.height = "100px"; // 뒷배경 원래 높이만큼 줄여주기
  };

  // ______________________________<(*'ㅅ'*)>_____________________________
  // <(*'ㅅ'*)> 이건 된다구~~
  /*-------------------------
    mobile-menu - menu 보이기
    함수명: mobileMenu
    기능: #gnb에 class .on을 적용시키면 모바일전용 메뉴 보여짐
    대상: .ham , .close
    변경대상: #gnb
    -------------------------*/
  const ham = document.querySelector(".ham");
  const close = document.querySelector(".close");

  ham.onclick = mobileMenu;
  close.onclick = mobileMenu;
  function mobileMenu() {
    const gnb = document.querySelector("#gnb");
    gnb.classList.toggle("on");
  }

  // ______________________________(ㅜOㅜ)=o_____________________________
  // (ㅜOㅜ)=o 왜 안돼는데 허어어엉 이론은 완벽한데... 흠...
  // 글구 넘어가는 상세메뉴는 슬라이드하고싶어요ㅠ <- 어떡게...??
  /*-------------------------
    mobile-menu - 하위메뉴
    함수명: mobileMH
    기능: 메뉴 li클릭시 하위메뉴 열기/닫기
    대상: . nav>ul>li>a
    -------------------------*/
  const navM = document.querySelectorAll(".nav>ul>li>a");
  // console.log("대상", navM);

  navM.forEach((v) => {
    v.onclick = () => {
      let tg = v.nextElementSibling;
      // console.log("타겟높이값:", tg.clientHeight);

      let hv = tg.querySelector("ul").clientHeight;
      // console.log("ul높이값:", hv);

    // 타겟의 높이값이 0이 아니면 0으로 hv값 변경 
    if (tg.clientHeig!= 0){ hv = 0 }
    else{
      tg.querySelector(".submenu").style.height = hv + "px";
      }
    };
  });









}); //////////////////////////////////////////////////////////////////////////////////////
