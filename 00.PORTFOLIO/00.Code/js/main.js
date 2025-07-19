window.addEventListener("DOMContentLoaded", function () {
  // [ header - contact]
  const workBtn = document.querySelector(".works-btn")
  const secWorks = document.querySelector('#sec-works')
  const aboutBtn = $(".about-btn");
  const footerBtn = $(".footer-btn");
  // workBtn.on("click", function () {
  //   $("html").animate({ scrollTop: $("#sec-works").offset().top }, 300);
  // });

  workBtn.addEventListener('click',function(){
    window.scrollTo({top:secWorks.offsetHeight, behavior: "smooth",})
  })
  aboutBtn.on("click", function () {
    $("html").animate({ scrollTop: $("#sec-me").offset().top }, 300);
  });
  footerBtn.on("click", function () {
    $("html").animate({ scrollTop: document.body.scrollHeight }, 300);
  });

  // [ 메인페이지 마지막 프로젝트 ]
  let tl = gsap.timeline();
  tl.from($(".main-project__imgBox"), {
    opacity: 0,
    duration: 3,
  }).from(
    [$(".main-project h3"), $(".main-project h2"), $(".main-project p")],
    {
      opacity: 0,
      duration: 2,
    },
    "-=1.5"
  );

  // [프로젝트 페이지 가로 스크롤]
  const projectPage = document.querySelector("#sec-works");
  const project = gsap.utils.toArray(".project");
  let projectTl = gsap.timeline({
    scrollTrigger: {
      trigger: projectPage,
      pin: true,
      scrub: 1,
      // anticipatePin: 1,
      markers: true, // 개발 중에만 표시
    },
    defaults: { ease: "none", duration: 1 },
  });

  projectTl.to( project,{ x: () => -(projectPage.scrollWidth - document.documentElement.clientWidth + 200 ),},"same")

  project.forEach((pj) => {
    gsap.fromTo( pj,
      { opacity: 0.5, y: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: pj,
          containerAnimation: projectTl, // 가로 스크롤 타임라인과 연동
          start: "left 80%",
          end: "right 20%",
          toggleActions: "play reverse play reverse",
          // markers: true, // 개발 중에만 표시
        },
        duration: 0.8,
      }
    );
  });

}); // DOMContentLoaded
