window.addEventListener('DOMContentLoaded',function(){
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

  $(window).on("scroll", function () {
    let winTop = $(window).scrollTop();
    // console.log(winTop);
    if (winTop < trigger1) {
      // console.log('메인');
      svgW.css({ fill: "white" });
    }
    if (winTop >= trigger1) {
      // console.log('흰페이지 1');
      svgW.css({ fill: "black" });
    }
    if ($(window).height() + winTop + 100 >= $(document).height()) {
      svgW.css({ fill: "white" });
    }
  });
})