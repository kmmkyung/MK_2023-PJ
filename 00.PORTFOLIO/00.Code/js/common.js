window.addEventListener('DOMContentLoaded',function(){

// [ header - logo ]
const headerLogoW = $('.logo_W');
headerLogoW.html(svgLogo.logo_w);
headerLogoW.on('click',function(){
  setTimeout(()=>{
    scrollTo(0,0);
  },50)
})

// [ header - menu ]
const menu = $('.menu');
for(let i=0; i<menu.length; i++){
  let menu = $('.menu').eq(i);
  let idx = menu.text()
  let value = idx.split('')
  let text = ''
  for(let x=0; x<value.length; x++){
    text += `<span class="menu-word">${value[x]}</span>`
    menu.html(text)
  }    
}

const tl = gsap.timeline({defaults: { ease: "power4.inOut"},
  repeat: -1, 
  yoyo: true, 
});

tl.from($('.menu-word'),{
  y: 10,
  opacity: 0,
  skewX: 30,
  stagger: 0.03,
  duration: 1,
})
.to($(menu),{
  y: -10,
  skewX: 0,
  opacity:1,
  stagger:0.03,
  duration: 1,
})


  // [ header - logo ]
  const svgW = $("svg .white");
  const header = $("header");

  let headerH = header.height();
  const page2 = $('#sec-works').offset().top;
  const page2Width = $('#sec-works').offset().width;
  const page3 = $('#sec-me .about').offset().top;
  const page4 = $('#sec-me .stack').offset().top;
console.log( page2, page3, page4,page2Width);
console.log(page2Width);
  $(window).on("scroll", function () {
    const winTop = $(window).scrollTop();
  console.log(winTop),'winTop';
    if (winTop < page2 - headerH) {
      // 메인
      console.log('메인');
      svgW.css({ fill: "white" });
      menu.css({ color: "white" });
  
    } else if (winTop >= page2 - headerH && winTop <  page2Width+ page3 - headerH) {
      // 작업물
      console.log('작업물');
      svgW.css({ fill: "black" });
      menu.css({ color: "black" });
  
    }
    // else if (winTop < page4 - headerH) {
    //   // about
    //   console.log('about');
    //   svgW.css({ fill: "white" });
    //   menu.css({ color: "white" });
  
    // } else if (winTop < page5 - headerH) {
    //   // tool
    //   console.log('tool');
    //   svgW.css({ fill: "black" });
    //   menu.css({ color: "black" });
  
    // } else {
    //   // footer
    //   console.log('footer');
    //   svgW.css({ fill: "white" });
    //   menu.css({ color: "white" });
    // }
  });
  

// [ footer - z-index]
const footer = $('footer');
let mainH = $('#sec-main').height();

$(window).on('scroll',function(){
  if($(window).scrollTop()>mainH){
    footer.css({zIndex:'1'})
  }
  else{
    footer.css({zIndex:'-1'})
  }
})
}) // DOMContentLoaded