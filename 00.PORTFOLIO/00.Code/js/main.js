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
      anticipatePin: 1,
      end: () => "+="+(projectPage.scrollWidth - window.innerWidth),
      start: "top top",
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

  // [ header - logo ]
  const svgW = $("svg .white");
  const logo = $(".logo_W");
  // console.log(logo);

  let logoH = logo.offset().top + logo.height();
  // console.log('logo offset',logo.offset().top);
  // console.log('logo height',logo.height());

  // ################################### page 1
  let pageWork = $("#sec-works");
  let page1 = pageWork.offset().top;
  // console.log(page1);
  let trigger1 = page1 - logoH;
  // console.log(trigger1);
  // ################################### page 2
  let pageAbout = $(".about");
  let page2 = pageAbout.offset().top;
  // console.log(page2);
  let trigger2 = page2 - logoH;
  // console.log(trigger2);
  // ################################### page 3
  let pageStack = $(".stack");
  let page3 = pageStack.offset().top;
  // console.log(page3);
  let trigger3 = page3 - logoH;
  // console.log(trigger3);

  $(window).on("scroll", function () {
    let winTop = $(window).scrollTop();
    // console.log(winTop);
    if (winTop < trigger1) {
      // console.log('메인');
      svgW.css({ fill: "white" });
    }
    if (winTop >= trigger1 && winTop < trigger2) {
      // console.log('흰페이지 1');
      svgW.css({ fill: "black" });
    }
    if (winTop >= trigger2 && winTop < trigger3) {
      // console.log('검정페이지 1');
      svgW.css({ fill: "white" });
    }
    if (winTop >= trigger3) {
      // console.log('흰페이지 2');
      svgW.css({ fill: "black" });
    }
    if ($(window).height() + winTop + 100 >= $(document).height()) {
      svgW.css({ fill: "white" });
    }
  });
}); // DOMContentLoaded
