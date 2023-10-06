window.addEventListener('DOMContentLoaded',function(){

// [ 메인페이지 마지막 프로젝트 ]
const tl = gsap.timeline();
tl.from($('.main-project__imgBox'),{
  opacity:0,
  duration:3
}).from([$('.main-project h3'),$('.main-project h2'),$('.main-project p')],{
  opacity:0,
  duration:2
},'-=1.5')

// [프로젝트 페이지 가로 스크롤]
const project = gsap.utils.toArry('.project');
const hiddenPj = gsap.utils.toArry('.hiddenPj');
const firstPj = document.querySelector('.firstPj');


})// DOMContentLoaded