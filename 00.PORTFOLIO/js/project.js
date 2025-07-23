window.addEventListener('DOMContentLoaded',function(){
    // header - svg color change on scroll
    const headerH = document.querySelector("header").offsetHeight;
    const svgW = document.querySelectorAll("svg .white");
    const menuWords = document.querySelectorAll(".menu-word");
    const section1 = document.querySelector(".section-1");
    const section2 = document.querySelector(".section-2");

  window.addEventListener('scroll', function(){
    const scrollTop = window.scrollY;
    if(scrollTop < section1.clientHeight - headerH){ 
      svgW.forEach((svg) => svg.style.fill = "#fff");
      menuWords.forEach((word) => word.style.color = "#fff");
    }
    else if(scrollTop >= section1.clientHeight - headerH
      && scrollTop < section2.offsetTop + section2.offsetHeight - headerH){
      svgW.forEach((svg) => svg.style.fill = "#000");
      menuWords.forEach((word) => word.style.color = "#000");
    }
    else {
      svgW.forEach((svg) => svg.style.fill = "#fff");
      menuWords.forEach((word) => word.style.color = "#fff");
    }
  });

  // header - menu click & color change
  const homeBtn = document.querySelector(".home-btn");
  const visitSiteBtn = document.querySelector(".visitSite-btn");
  const contactBtn = document.querySelector(".contact-btn");
  const visitSiteBtnWords = visitSiteBtn.querySelectorAll('.menu-word');

  visitSiteBtnWords.forEach((ele)=>{
    ele.classList.add('gradient-text');
  })
  visitSiteBtnWords[0].classList.add('icon');

  homeBtn.addEventListener('click', function() {
    location.href = 'index.html';
  });

  visitSiteBtn.addEventListener('click', function() {
    const siteUrl = visitSiteBtn.dataset.siteUrl;
    if(siteUrl) window.open(siteUrl, '_blank'); 
  });

  contactBtn.addEventListener('click', function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
});
