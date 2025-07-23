// cSpell: disable
import { svgLogo } from "./svgLogo.js"

window.addEventListener('DOMContentLoaded',function(){
  // header - logo
  const headerLogo = document.querySelector(".logo");
  headerLogo.innerHTML = svgLogo.pageLogo_w;

  // header - menu GSAP animation
  //// menu word split and save
  const menu = document.querySelectorAll('.menu');
  for(let i = 0; i <menu.length; i++){
    const menuItem = menu[i];
    const menuValue = menuItem.textContent;
    const valueWords = [...menuValue];
    menuItem.innerHTML ='';
    
    for(let word = 0; word < valueWords.length; word++){
      const span = document.createElement('span');
      span.className = 'menu-word';
      span.textContent = valueWords[word];
      menuItem.appendChild(span);
    }
  }
  //// GSAP timeline for menu animation
  const timeline = gsap.timeline({
    defaults: { ease: "power4.inOut" }, // 모든 요소 적용
    repeat: -1, yoyo: true }  // 무한 반복 , 앞뒤반복
  )
  timeline.from('.menu-word', { // 초기값 설정
    y: 10, opacity: 0, skewX: 30, stagger: 0.03, duration: 1,
  })
  .to((menu),{ // 끝값 설정
    y: -10, skewX: 0, stagger:0.03, duration: 1,
  })

  // header - logo click scroll to top
  headerLogo.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  })


  // footer - z-index
  const section1 = document.querySelector(".section-1");
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const mainHeight = main.offsetHeight;

  window.addEventListener('scroll', function(){
    const scrollTop = window.scrollY;
    if(scrollTop < mainHeight/2){
      section1.style.zIndex = "1";
      footer.style.zIndex = "-1";
    }
    else {
      section1.style.zIndex = "-1";
      footer.style.zIndex = "1";
    }
  })

}) // end of DOMContentLoaded