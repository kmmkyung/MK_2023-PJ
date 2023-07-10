// 원래는 css grid 사용해서 메뉴바를 만들었는데 (메뉴를 왼쪽, 오른쪽 따로 만들고 그리드로 따따따 조립) <- 03.header----grid파일이 그거!
// 메뉴에 마우스 오버하면 전체 메뉴배경빅스가 내려와야 하는 구성이기 때문에(왼쪽만 내려와서 오른쪽 따로 내리고... 복잡해짐)
// 그래서 헤더를 한 메뉴바로 다시 만들었다,,,

// 선생님이 해주신 원본 js코드는 header----grid 버전의 core를 보면 될듯한데... 저기서 모바일버전이 됐다 안됐다 거림ㅋㅋ
// 설명해주려고 주석쓴거니까 확인하고 필요없어진 주석은 지워도 ㅇㅋ


// 시작~~



window.addEventListener("DOMContentLoaded", () => {
  console.log("core-JS 로딩완료!");
  // ______________________________(ㅜOㅜ)=o_____________________________
  // (ㅜOㅜ)=o about us 마우스 가져가면 왜 오류나는데 허어어엉
  // 그리고 submenu 위치에 마우스 가져가도 왜 메뉴 바뀌는거야 와까라나이
  /*-------------------------
  menu - 메뉴 보이기
  기능: 오버시 메뉴보이기
  대상: .nav>ul>li
  변경대상: .nav
  변경내용: 높이값 기존에서 메뉴 내용만큼 + 50px
  -------------------------*/
  const nav = document.querySelector("#gnb .nav"); // 로고기준 왼쪽 메뉴바 전체
  const menu = document.querySelectorAll(".nav>ul>li"); // 4가지 메뉴(브랜드, 메뉴, 스토어, 뉴스)
  const submenu = document.querySelectorAll(".submenu"); // 4가지 메뉴의 서브 상세메뉴
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
      // sw <- about us 부모요소에 submenu클래스 없어서 추가하고 .subemenu ul있으면 ul의 clientHeight구하고 ul없으면 submenu의 clientHeight구하기 ################################
      let vH = v.querySelector(".submenu ul")? v.querySelector(".submenu ul").clientHeight : v.querySelector(".submenu").clientHeight;
      nav.classList.add("on"); // 메뉴바에 남색 배경색 넣어주기
      about.style.display = "block"; // about us 보여줘
      nav.style.height = vH + 150 + "px"; // 뒷배경(남색) vH+50px정도 늘려주기
    };

    // 해당 메뉴에 마우스 떨어지면
    v.onmouseleave = () => {
      submenu[i].style.display = "none"; // 헤당 메뉴의 서브메뉴 숨겨줘
    };
  });

  // 그리고 왼쪽 전체 메뉴에 마우스 떨어지면
  nav.onmouseleave = () => {
    if (window.innerWidth <= 786) {
      // 사이즈 786인 모바일버전에서 about us는 늘 있어줘
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

  // ______________________________(ㅜOㅜ)=o[이디야파일]_____________________________
  // (ㅜOㅜ)=o 왜 안돼는데 허어어엉 이론은 완벽한데... 흠...
  // 글구 넘어가는 상세메뉴는 숨겨져서... 넘어가면 슬라이드하고싶어요ㅠ <- 어떡게...??
  /*-------------------------
    mobile-menu - 하위메뉴
    함수명: mobileMH
    기능: 메뉴 li클릭시 하위메뉴 열기/닫기
    대상: .nav>ul>li>a
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
      v.parentElement.classList.toggle("on"); // 해당 li에 클래스 on 주기...
                                              // 이론적으로 on = hv 만큼 높이값 변경일거같은데 이걸 코드로...?
      }

    // .subMenu 클릭시 상위 li로 이벤트 버블링 막기! <- 탐쌤 아리가또~~
    const smenu = document.querySelectorAll(".submenu")
    // console.log(smenu)
    for(let x of smenu){
      x.addEventListener("click",e=>e.stopPropagation());
    }///// for of ////

    };
  });



}); //////////////////////////////////////////////////////////////////////////////////////
