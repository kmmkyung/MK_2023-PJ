window.addEventListener('DOMContentLoaded',function(){
  // section1
  //// banner
  let swiper1 = new Swiper('.section-1__swiper', {
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
  window.addEventListener('resize',function(){
    const section2cards = document.querySelector('.section-2__pc');
    const section2swiper = document.querySelector('.section-2__mobile');
    if(window.innerWidth<=950){
      section2cards.style.display='none'
      section2swiper.style.display='block'
    }
    if(window.innerWidth>950){
      section2cards.style.display='flex'
      section2swiper.style.display='none'
    }
  })
  
  //// card
  const section2 = document.querySelector('#section-2');
  const cards = document.querySelector('.section-2__pc');
  const lastCard = document.querySelector('.section-2__pc .searchPaperCard-wrap');
  const lastCardImg = document.querySelector('.section-2__pc .content-searchPaperCard img');
  const searchPaperTextChange = document.querySelector('.section-2__pc .content-searchPaperCard .searchPaperText-change');
  const searchPaperText = document.querySelector('.section-2__pc .content-searchPaperCard .searchPaperText');

  let timeline = gsap.timeline({
    scrollTrigger:{
      trigger:section2,
      pin:true,
      scrub:1,
      end: section2.scrollWidth+"+=2000"
    },
    defaults: { ease: 'none', duration: 10}
  })
  timeline.to(cards,{xPercent:-30,x:-(cards.clientWidth/4*1.5)-180})
  timeline.to(searchPaperText,1,{display:'none'})
  timeline.to(lastCard,2,{overflow:'visible'})
  timeline.to(lastCardImg,2,{display: 'block', width: '110vw', height: '100vh'})
  timeline.to(searchPaperTextChange,1,{autoAlpha: 1},"-=1.5")
  timeline.addPause(30);
  ScrollTrigger.refresh();

  ScrollTrigger.matchMedia({
    "(max-width: 950px)": function(){
      timeline.pause(!timeline.pause);
      ScrollTrigger.disable(false)
    },
    "(min-width: 951px)": function(){
      ScrollTrigger.enable()
      timeline.isActive();
    },
  });

  //// banner
  let swiper2 = new Swiper('#section-2 .section-2__swiper', {
      direction: 'horizontal',
      loop: true,
      // autoplay: {
      //   delay: 3000
      // },
      pagination: {
        el: '.swiper-pagination__2',
        clickable: true,
        type:'bullets'
      },
      // on:{
      //   resize:function(){
      //     swiper2.update()
      //     swiper2.enable()
      //     if(window.innerWidth>950){
      //       swiper2.detachEvents()
      //       swiper2.disable()
      //     }
      //   }
      // }
    });


})