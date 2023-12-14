import svgData from '../assets/data/data-svgData.js';
import gnbData from '../assets/data/data-gnbData.js';

window.addEventListener('DOMContentLoaded',function(){
  // [ header ]
  //// logo
  const logo = document.querySelector('.pc-header .logo');
  logo.innerHTML = svgData.logoSvg_b;

  //// gnb
  const gnb = document.querySelector('.gnb-all .gnb');
  let gnbDataCode = '';  

  for(let title in gnbData){
    gnbDataCode += /* html */`
      <li class="gnb-menu">${title}
        <div class="gnb-menu__area">
        <ol>
          <li class="gnb-menu__title">
            <span class="title-ko">${title}</span>
            <img src="./assets/svg/gnb-dropdown-icon.svg" alt="dropdown-icon">
            <div class="title-content">
              <img src="./assets/svg/talk-icon.svg" alt="talk-icon">
    `
    for(let enTitle in gnbData[title]){
      gnbDataCode += /* html */`
              <span class="title-en">${enTitle}</span>
              </div>
          </li>
        `
      for(let subTitle in gnbData[title][enTitle]){
      gnbDataCode += /* html */`
          <li class="gnb-menu__item">${subTitle}
      `
        for(let menu of gnbData[title][enTitle][subTitle]){
        gnbDataCode += /* html */`
            <span>${menu}</span>
      `
        }
      gnbDataCode += /*html*/`
          </li>
        `;
      }
    gnbDataCode += /*html*/`
    `;
    }
    gnbDataCode += /*html*/`
        </ol>
      </div>
    </li>
    `;
  }
  gnb.innerHTML = gnbDataCode;
})