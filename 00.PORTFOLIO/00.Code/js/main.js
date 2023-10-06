window.addEventListener('DOMContentLoaded',function(){

const tl = gsap.timeline();
tl.from($('.main-project__imgBox'),{
  opacity:0,
  duration:3
}).from([$('.main-project h3'),$('.main-project h2'),$('.main-project p')],{
  opacity:0,
  duration:2
},'-=1.5')


})// DOMContentLoaded