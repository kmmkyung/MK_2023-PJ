///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("core.js 로딩완료")

  const logoSVG1 = document.querySelector(".nav_Logo1 div");
  const logoSVG2 = document.querySelector(".nav_Logo2 div");
  // console.log(logoSVG1,logoSVG2)

  logoSVG1.innerHTML = svgData.logo_1;
  logoSVG2.innerHTML = svgData.logo_2;

}) ///////////////////////// load /////////////////////////

