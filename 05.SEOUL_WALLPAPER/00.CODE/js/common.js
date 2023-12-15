import svgData from '../assets/data/data-svgData.js';
import gnbData from '../assets/data/data-gnbData.js';

window.addEventListener('DOMContentLoaded',function(){
  // [ header ]
  //// logo
  const logo = document.querySelector('.pc-header .logo');
  logo.innerHTML = svgData.logoSvg_b;

  //// main-gnb
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

  //// gnd hover
  const pcHeader = document.querySelector('.pc-header');
  const gnbMenu = document.querySelectorAll('.gnb-menu');
  const pcGnbBg = document.querySelector('.pc-header__bg');

  gnbMenu.forEach((ele)=>{
    ele.addEventListener('mouseenter',function(){
      pcHeader.style.backgroundColor = 'white'
      pcGnbBg.classList.remove('-hidden')
    })
  })
  
  gnbMenu.forEach((ele)=>{
    ele.addEventListener('mouseleave',function(){
      pcHeader.style.backgroundColor = 'transparent'
      pcGnbBg.classList.add('-hidden')
    })
  })

  //// etc-gnb
  const langBox = document.querySelector('.lang-box');
  const wishBox = document.querySelector('.wish-box');
  const searchBoxIcon = document.querySelector('.search-box__icon');
  const mobileBox = document.querySelector('.mobile-menu');
  const mobileHeader = document.querySelector('.mobile-header');
  const mobileGnbBg = document.querySelector('.mobile-header__bg');
  langBox.addEventListener('mouseenter',function(){
    langBox.classList.add('hover')
  })
  langBox.addEventListener('mouseleave',function(){
    langBox.classList.remove('hover')
  })
  mobileBox.addEventListener('click',function(){
    mobileBox.classList.toggle('on')
    if(mobileBox.classList.contains('on')){
      document.querySelector('.search-box__input').focus();
      langBox.classList.add('on')
      wishBox.classList.add('on')
      searchBoxIcon.classList.add('on')
      mobileHeader.classList.add('on')
      mobileGnbBg.classList.remove('-hidden')
      document.querySelector('.gnb').classList.add('mobileOn')
      document.querySelector('.logo').classList.add('mobileOn')
    }
    else{
      langBox.classList.remove('on')
      wishBox.classList.remove('on')
      searchBoxIcon.classList.remove('on')
      mobileHeader.classList.remove('on')
      mobileGnbBg.classList.add('-hidden')
      document.querySelector('.gnb').classList.remove('mobileOn')
      document.querySelector('.logo').classList.remove('mobileOn')
    }
  })
  document.querySelector('.mobile-header__bg').addEventListener('click',function(){
    mobileBox.classList.remove('on')
    langBox.classList.remove('on')
    wishBox.classList.remove('on')
    searchBoxIcon.classList.remove('on')
    mobileHeader.classList.remove('on')
    mobileGnbBg.classList.add('-hidden')
    document.querySelector('.gnb').classList.remove('mobileOn')
    document.querySelector('.logo').classList.remove('mobileOn')
  })
})