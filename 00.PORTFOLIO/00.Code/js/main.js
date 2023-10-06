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
const hiddenPj = gsap.utils.toArray('.hiddenPj');
const project = gsap.utils.toArray('.project');
const firstPj = document.querySelector('.firstPj');

let projectTl = gsap.timeline({
  scrollTrigger:{
    trigger: projectPage,
    pin:true,
    scrub:1,
  },
  defaults: { ease: 'none', duration: 1 }
})

projectTl.to(project,{
  x: () => -(projectPage.scrollWidth - document.documentElement.clientWidth+200)},'same')
.from(hiddenPj,{
  opacity:.2,
  y:100,
  // duration:2,
  // stagger:{
  //   amount:1,
  //   each:0.5
  // }
},'same');

gsap.from(firstPj,{
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:projectPage,
    start:'top 40%',
    end:'bottom 10%',
    toggleActions: "play none none reverse"
  }  
});



})// DOMContentLoadeds