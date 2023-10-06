window.addEventListener('DOMContentLoaded',function(){

// [ 메인페이지 마지막 프로젝트 ]
let tl = gsap.timeline();
tl.from($('.main-project__imgBox'),{
  opacity:0,
  duration:3
}).from([$('.main-project h3'),$('.main-project h2'),$('.main-project p')],{
  opacity:0,
  duration:2
},'-=1.5');

// [프로젝트 페이지 가로 스크롤]
const projectPage = document.querySelector('#sec-works');
const project = gsap.utils.toArray('.project');
const hiddenPj = gsap.utils.toArray('.hiddenPj');
const firstPj = document.querySelector('.firstPj');

let secWork = gsap.to(projectPage,{
  // defaults: { ease: 'none', duration: 1 },
  ease: 'none',
  duration: 1,
  scrollTrigger:{
    trigger: projectPage,
    pin:true,
    scrub:1,
    end: () => projectPage.scrollWidth - document.documentElement.clientWidth,
  }
});


let projectTl = gsap.timeline({})
projectTl.to(project,{
  scrollTrigger:{
    containerAnimation: secWork
  }
})




})// DOMContentLoadeds