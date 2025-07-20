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
    const valueWords = menuValue.split('');
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

  // header - svg color change on scroll
  const headerH = document.querySelector("header").offsetHeight;
  const svgW = document.querySelectorAll("svg .white");
  const menuWords = document.querySelectorAll(".menu-word");
  const section1 = document.querySelector(".section-1");
  const section2 = document.querySelector(".section-2");
  const section2Content = document.querySelector(".section-2__content");
  const section3 = document.querySelector(".section-3");
  const section4 = document.querySelector(".section-4");
  window.addEventListener('scroll', function(){
    const scrollTop = window.scrollY;
    console.log('scrollTop:', scrollTop);

    if(scrollTop < section1.clientHeight - headerH){ //743
      // console.log('section1');
      svgW.forEach((svg) => svg.style.fill = "#fff");
      menuWords.forEach((word) => word.style.color = "#fff");
    }
    else if(scrollTop >= section1.clientHeight - headerH && scrollTop < section2Content.clientWidth - window.innerWidth - headerH){
      console.log('section2');
      svgW.forEach((svg) => svg.style.fill = "#000");
      menuWords.forEach((word) => word.style.color = "#000");
    }
    else if(scrollTop >= section2Content.clientWidth - window.innerWidth - headerH){
      console.log('section3');
      // svgW.forEach((svg) => svg.style.fill = "#fff");
      // menuWords.forEach((word) => word.style.color = "#fff");
    }
  });

  // footer - z-index
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