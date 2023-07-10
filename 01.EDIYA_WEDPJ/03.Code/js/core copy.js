// 원래는 css grid 사용해서 메뉴바를 만들었는데 (메뉴를 왼쪽, 오른쪽 따로 만들고 그리드로 따따따 조립) <- 03.header----grid파일이 그거!
// 메뉴에 마우스 오버하면 전체 메뉴배경빅스가 내려와야 하는 구성이기 때문에(왼쪽만 내려와서 오른쪽 따로 내리고... 복잡해짐)
// 그래서 헤더를 한 메뉴바로 다시 만들었다,,,

// 선생님이 해주신 원본 js코드는 header----grid 버전의 core를 보면 될듯한데... 저기서 모바일버전이 됐다 안됐다 거림ㅋㅋ
// 설명해주려고 주석쓴거니까 확인하고 필요없어진 주석은 지워도 ㅇㅋ


// 시작~~

const menuFn = () =>{
  const submenu = document.querySelectorAll(".nav>ul>li")
  const nav = document.querySelector(".nav");
  let navH = nav.clientHeight;
  const about = document.querySelector(".submenu_h2");
  if(window.innerWidth > 786){
    submenu.forEach((v,i)=>{
      let tg = v.querySelector(".submenu");
      v.onmouseenter = () =>{
        tg.style.display = "block"
        nav.style.height = tg.clientHeight + navH + 50 +"px";
        nav.classList.add("on");
        about.style.display = "block"
      }
      v.onmouseleave = ()=>{
        tg.style.display = "none";
        nav.style.height = navH + about.clientHeight + 50 + "px";
      }
    })
    nav.onmouseleave = () =>{
      nav.classList.remove("on");
      nav.style.height = navH + "px";
      about.style.display = "none";
    }
  }else{
    submenu.forEach((v,i)=>{
      let tg = v.querySelector(".submenu");
      v.querySelector("a").onclick = ()=>{
        tg.style.display="block";
      }
    })
  }
}

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
menuFn();
window.addEventListener("resize", menuFn)


}); //////////////////////////////////////////////////////////////////////////////////////
