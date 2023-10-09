window.addEventListener('DOMContentLoaded',function(){

// [ header - logo ]
const headerLogoW = $('.logo_W');
headerLogoW.html(svgLogo.logo_w);

const svgW = $('svg .white'); // svg 변해야 하는 것
let page = $('.page'); // 페이지 전체
let pageW = $('.pageW'); // 배경 흰색 페이지
let pageB = $('.pageB'); // 배경 검은색 페이지
let scrollBg = 0; // 스크롤 변수
const winH = window.innerHeight; // 윈도우 높이값
const documentH = document.body.clientHeight; // 전체문서 높이값

// const retVal = ele => ele.getBoundingClientRect().top;
// let scTop = window.scrollY;

// $(window).on('scroll',function(){
//   let bgB1 = retVal(pageB[0]);
//   let bgB2 = retVal(pageB[1]);
//   let bgB3 = retVal(pageB[2]);
// console.log(scTop < bgB1);

//   if(scTop > bgB1,bgB2){

//   }


// })

// 필요한거
// 윝ㅗㅜ 맨



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