window.addEventListener("DOMContentLoaded",()=>{
  console.log("core-JS 로딩완료!");
// ______________________________mobile-menu_____________________________
    /*-------------------------
    mobile-menu - menu 보이기
    함수명: mobileMenu
    기능: #gnb에 class .on을 적용시키면 모바일전용 메뉴 보여짐
    대상: .ham , .close
    변경대상: #gnb
    -------------------------*/
    // 대상
    const ham = document.querySelector(".ham")
    const close = document.querySelector(".close")
    // console.log(ham,close)
    ham.onclick = mobileMenu;
    close.onclick = mobileMenu;
    function mobileMenu(){
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
    navM.forEach((x,idx)=>{
      x.onclick = () => {
      console.log("메뉴요소",x);
      moveMenu(idx);

      let tg = x.nextElementSibling;
      console.log("타겟높이값:",tg.clientHeight);

      let hv = tg.querySelector("ul").clientHeight;
      console.log("ul높이값:",hv);

      // (2)타겟의 높이값이 0이 아니면 0으로 hv값 변경
      if(tg.clientHeight!=0) hv = 0;
      tg.querySelector(".submenu-box").style.height = hv + "px";
      x.parentElement.classList.toggle("on");
      }///// click /////
    })///// forEach /////

    // .subMenu 클릭시 상위 li로 이벤트 버블링 막기!
    const smenu = document.querySelectorAll(".submenu")
    // console.log(smenu)
    for(let x of smenu){
      x.addEventListener("click",e=>e.stopPropagation());
    }///// for of /////

    // a요소 클릭시 기본기능 막기!
    const atag = document.querySelectorAll("a");
    for(let x of atag) {
      x.addEventListener("click",e=>e.preventDefault());
    } ///// for of /////

    /********************************** 
      메뉴 초기화 함수 : 처음상태로 돌림
    **********************************/
      function moveMenu (seq=1000){
      console.log("seq",seq)

      // 모든 서브메뉴 높이값 0
      smenu.forEach((ele,idx)=>{
        if(idx===seq) return
        console.log("smenu순번:",idx);
          // 높이값 0만들기
          ele.style.height = 0;
        }); //////// forEach ////////
        // 2. 서브메뉴있는 li의 클래스 "on"지우기
        // 대상: .gnb>ul>li:has(.smenu) 
        // ★[-> gnb변수의 부모요소 : ele.parentElement]
        smenu.forEach((ele,idx)=>{
          // 호출한 순번과 같으면 넘어가!
          if(idx===seq) return;
          console.log("li순번:",idx);

          // 클래스 on 빼기 : 
          // ★[gnb변수의 부모요소 : ele.parentElement]
          ele.parentElement.classList.remove("on");
        }); /////// forEach //////////
    }
    // gnb 요소
    const gnbBx = document.querySelector("#gnb");

    // 타임아웃변수
    let autoTgnb;

    //// gnb 마우스 아웃시 자동초기화 /////
    gnbBx.addEventListener("mouseleave",()=>{
      console.log("아웃~!!");
        autoTgnb = setTimeout(() => {
          moveMenu();
          // 보내는값 없이 호출시 모두 초기화한다!
        }, 500);
    }); ////////// mouseout ///////////////

    //// gnb 마우스 오버시 타임아웃 지우기!(실행쓰나미 방지!) /////
    gnbBx.addEventListener("mouseenter",()=>{
      console.log("오버~!!");
        // 타임아웃 지우기
        clearTimeout(autoTgnb);
    }); ////////// mouseout ///////////////



    // ______________________________mobile-menu_____________________________
    // ______________________________page1_____________________________
    /*-------------------------
    page1 - 메뉴 보이기
    함수명: showMenu
    기능: 오버시 메뉴보이기
    대상: .l_nav>ul>li
    변경대상: .l_nav, #all_nav
    변경내용: 높이값 기존100px에서 메뉴 내용만큼
    -------------------------*/ 
    $(".l_nav>ul>li").mouseover(function(){
      $(this).find(".submenu").stop().slideDown(300);
      $(".r_nav").css({height:"400px"});
      
      let Ht = $(this).find(".submenu-box").height() + 200;
      $("#all_nav").addClass("on")
      .css({height:Ht+"px"})
      // console.log(Ht);
  })
  $(".l_nav>ul>li").mouseout(function(){
      $(this).find(".submenu").stop().slideUp(300)
      // $(".r_nav").stop().slideUp(300);
  })
  let setTT;
  $("#all_nav").mouseleave(function(){
      clearTimeout(setTT);
      setTT = setTimeout(() => {
          $(this).removeClass("on")
      }, 300);
      $(".r_nav").css({height:"100px"});
  })

      // ______________________________page1_____________________________
})