///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("core.js 로딩완료")

  /********************
    gnb에 로고 넣기
  ********************/
  const logoSVG1 = document.querySelector(".nav_Logo1");
  const logoSVG2 = document.querySelector(".nav_Logo2");
  // console.log(logoSVG1,logoSVG2)

  logoSVG1.innerHTML = svgData.logo_1;
  logoSVG2.innerHTML = svgData.logo_2;


  /********************
    gnb 메뉴 넣기
  ********************/
  // 1. 대상 선정
  const nav = document.querySelector(".nav");
  console.log(nav);

  // 2. 변수
  let hcode ="";

  // 3. 구조화
  hcode += 
  for(let sm in gnbdata){
    hcode += `

    `;
  }

      // 4. GNB 박스에 출력하기
      nav.innerHTML = hcode;

}) ///////////////////////// load /////////////////////////

