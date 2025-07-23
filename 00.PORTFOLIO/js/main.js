// cSpell: disable
const timeline = gsap.timeline()

window.addEventListener('DOMContentLoaded',function(){
  // menu - menu click
  const projectBtn = document.querySelector(".project-btn");
  const aboutBtn = document.querySelector(".about-btn");
  const contactBtn = document.querySelector(".contact-btn");
  const workSection = document.querySelector(".section-2");
  const aboutSection = document.querySelector(".section-3");
console.log(workSection.offsetTop);
  projectBtn.addEventListener('click', function() {
    window.scrollTo({ top: workSection.offsetTop, behavior: "smooth" });
  });
  aboutBtn.addEventListener('click', function() {
    window.scrollTo({ top: aboutSection.offsetTop, behavior: "smooth" });
  });
  contactBtn.addEventListener('click', function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

  // header - svg color change on scroll
  const headerH = document.querySelector("header").offsetHeight;
  const svgW = document.querySelectorAll("svg .white");
  const menuWords = document.querySelectorAll(".menu-word");
  const section1 = document.querySelector(".section-1");
  const section3 = document.querySelector(".section-3");
  const section4 = document.querySelector(".section-4");

  window.addEventListener('scroll', function(){
    const scrollTop = window.scrollY;
    // console.log('scrollTop:', scrollTop);

    if(scrollTop < section1.clientHeight - headerH){ 
      svgW.forEach((svg) => svg.style.fill = "#fff");
      menuWords.forEach((word) => word.style.color = "#fff");
    }
    else if(scrollTop >= section1.clientHeight - headerH
      && scrollTop < section3.offsetTop - headerH){
      svgW.forEach((svg) => svg.style.fill = "#000");
      menuWords.forEach((word) => word.style.color = "#000");
    }
    else if(scrollTop >= section3.offsetTop - headerH
      && scrollTop < section4.offsetTop - headerH){
      svgW.forEach((svg) => svg.style.fill = "#fff");
      menuWords.forEach((word) => word.style.color = "#fff");
    }
    else if(scrollTop >= section4.offsetTop - headerH
      && scrollTop < section4.offsetTop + section4.offsetHeight - headerH){
      svgW.forEach((svg) => svg.style.fill = "#000");
      menuWords.forEach((word) => word.style.color = "#000");
    }
    else {
      svgW.forEach((svg) => svg.style.fill = "#fff");
      menuWords.forEach((word) => word.style.color = "#fff");
    }
  });

  // section1 - last project GSAP animation
  const lastProjectBox = document.querySelector(".last-project .project-box");
  const lastProjectText = document.querySelectorAll(".last-project__text");
  
  timeline.from((lastProjectBox),{ opacity: 0, duration: 3 })
  .from((lastProjectText),{ opacity: 0, duration: 2 }, "-=1.5");


  //section2 - horizontal scroll GSAP animation
  const projectPage = document.querySelector(".section-2");
  const project = gsap.utils.toArray(".section-2 .project");

  const projectTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: projectPage,
      pin: true,
      scrub: 1,
      // anticipatePin: 1,
      // markers: true
    },
    defaults: { ease: "none", duration: 1 },
  });

  projectTimeline.to( project,{ x: () => -(projectPage.scrollWidth - document.body.clientWidth + 100)})

  project.forEach((pj) => {
    gsap.fromTo( pj,
      { opacity: 0.5, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: pj,
          containerAnimation: projectTimeline, // 가로 스크롤 타임라인과 연동
          start: "left 80%",
          end: "right 20%",
          toggleActions: "play reverse play reverse",
          // markers: true
        }, duration: 0.8,
      }
    );
  });

}) // end of DOMContentLoaded