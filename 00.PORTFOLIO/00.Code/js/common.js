window.addEventListener('DOMContentLoaded',function(){

// [ header - logo ]
// const headerLogo = $('.logo_W');
// headerLogo.html(svgLogo.logo_w);
// let pageNum = 0 // 전체페이지수
// function updataPage(){

// }


// [ header - contact]
const workBtn = $('.works-btn');
const aboutBtn = $('.about-btn');
const footerBtn = $('.footer-btn');
workBtn.on('click',function(){
  $('html').animate({scrollTop:$("#sec-works").offset().top},300)
});
aboutBtn.on('click',function(){
  $('html').animate({scrollTop:$("#sec-me").offset().top},300)
});
footerBtn.on('click',function(){
  $('html').animate({scrollTop:document.body.scrollHeight},300)
});

// [ header - menu ]
const menu = $('.menu');
for(let i=0; i<menu.length; i++){
  let menu = $('.menu').eq(i);
  let idx = menu.text()
  let value = idx.split('')
  let text = ''
  for(let x=0; x<value.length; x++){
    text += `<span>${value[x]}</span>`
    menu.html(text)
  }    
}

const tl = gsap.timeline({defaults: { ease: "power4.inOut"},
repeat: -1, 
yoyo: true, 
});

tl.from($('span'),{
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