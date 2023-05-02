///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("core.js 로딩완료")

  /********************
    gnb에 로고 넣기 / 바꾸기 / 메뉴 넣기
  ********************/
  const logoSVG1 = document.querySelector(".nav_Logo1");
  const logoSVG2 = document.querySelector(".nav_Logo2");
  const nav = document.querySelector(".nav_L--list");
  console.log(logoSVG1,logoSVG2,nav)

  // 1. gnb 로고 넣기
  logoSVG1.innerHTML = svgData.logo_1;
  logoSVG2.innerHTML = svgData.logo_2;

  // 2. gnb 로고 바꾸기
  function logoChSvg2(){
    logoSVG2.style.display="block"
    logoSVG1.classList.add("-hidden")
  }

  nav.addEventListener("wheel",logoChSvg2);
  nav.addEventListener("onmouseenter",logoChSvg2);

  // 3. 메뉴 넣기
  // 3-1. 변수
  let hcode =""
  
  // 3-2. 구조화
  hcode += `
  `;
    
  for(let x in gnbdata){
    hcode += `
    <li class="nav_L--menu">
      <a class="-ghost -blur" href="#">${x}</a>
      <ul class="submenu-all">
    `
    // console.log(x);
    
    for(let y in gnbdata[x]){
      hcode += `
        <li class="nav_L--submenu"><a class="-blur_submenu" href="#">${y}</a>
          <ol class="submenu_list">
      `;
      // console.log(y);
      
      for(let z of gnbdata[x][y]){
        hcode += `
        <li><a class="-blur_submenu" href="#">${z}</a></li>
        `;
      }
      hcode += `
          </ol>
        </li>
      `;
    }
    hcode += `
      </ul>
      </li>
    `;
  }
  hcode += `
  `;

  // console.log(hcode);
  //   nav.forEach(ele=>{
    
  //   let mtit = ele.innerText;
  //   // console.log(mtit);
    
  //   let tgdata = gnbdata[mtit];
  
  //   // console.log("tgdata", tgdata);
  // })
  nav.innerHTML = hcode;
  
  const submenu = document.querySelector(".submenu-all");
  submenu.classList.add("-hidden")
  // 3-3. gnb 메뉴 오버시 서브메뉴 보이기
  const list = document.querySelectorAll(".nav_L--menu");
  console.log("list",list);
  console.log("submenu",submenu);
  
  
  // 3-3-1. 하위메뉴/메뉴배경 변경함수
  const subBg = (ele,hv,opa) => {
    ele.style.paddingBottom = hv+"px"
    ele.style.opacity = opa;
  };
  
  for(let x of list){
    // 마우스 오버시 ___________________ 하위메뉴 박스/하위 내부 박스높이값/변경함수 호출
    x.onmouseenter = () => {
      const menuBox = document.querySelector(".nav")
      let submenuBoxHv = menuBox.querySelector(".submenu-all").clientHeight;
      // console.log("하위내부높이",submenuBoxHv);
      subBg(menuBox,submenuBoxHv,1)
    } 
    // 마우스 아웃시 ___________________
    x.onmouseleave = () => {
      let menuBox = x.querySelector(".nav");
      subBg(menuBox,0,1)
    } //___________________
  } ////// for of /////
}) ///////////////////////// load /////////////////////////

