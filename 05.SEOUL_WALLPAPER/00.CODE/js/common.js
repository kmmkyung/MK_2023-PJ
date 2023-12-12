// import gnbData from '../assets/data/data-gnbData';
import svgData from '../assets/data/data-svgData.js';

window.addEventListener('DOMContentLoaded',function(){
  // [ header ]
  //// logo
  const logo = document.querySelector('.pc-header .logo');
  logo.innerHTML = svgData.logoSvg_b;
})