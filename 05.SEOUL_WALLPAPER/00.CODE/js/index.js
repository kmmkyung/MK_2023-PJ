window.addEventListener('DOMContentLoaded',function(){
  // section1
  //// banner
  const swiper = new Swiper('.section-1__swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000
    },
    effect:'fade',
    crossFade:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  

  // section2
  //// card
  const section2 = document.querySelector('#section-2');
  const cards = document.querySelector('.section-2__content');
  const lastCardImg = document.querySelector('.content-searchPaperCard img');
  const searchPaperTextChange = document.querySelector('.content-searchPaperCard .searchPaperText-change');
  const searchPaperText = document.querySelector('.content-searchPaperCard .searchPaperText');

  let timeline = gsap.timeline({
    scrollTrigger:{
      trigger:section2,
      pin:true,
      scrub:1,
      end: section2.scrollWidth+"+=2000"
    },
    defaults: { ease: 'none', duration: 10}
  })

  timeline.to(cards,{xPercent:-30})
  timeline.to(cards,{x:-(cards.clientWidth/4*1.5)-180})
  timeline.to(searchPaperText,1,{display:'none'})
  timeline.to(lastCardImg,4,{width: '110vw', height: '100vh'})
  timeline.to(searchPaperTextChange,1,{
    autoAlpha: 1
  },"-=1.5")
  timeline.addPause(50);
})