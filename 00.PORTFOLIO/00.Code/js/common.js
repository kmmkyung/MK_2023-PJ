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