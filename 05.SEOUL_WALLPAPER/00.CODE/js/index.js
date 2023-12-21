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

  function changeContent(){
    const searchPaperText = document.querySelector('.content-searchPaperCard .searchPaperText');
    searchPaperText.classList.toggle('-hidden');
}




  let timeline = gsap.timeline({
    scrollTrigger:{
      trigger:section2,
      pin:true,
      scrub:1,
      end: section2.scrollWidth,
      makers:true 
    },
    defaults: { ease: 'none', duration: 10, }
  })

  timeline.to(cards,{x:-(cards.clientWidth/4*3)-30})
  
  timeline.to(lastCardImg,14,{width: '110vw', height: '100vh', onStart:changeContent})

  timeline.to(searchPaperTextChange,4,{
    visibility: 'visible',
    opacity: 1
  },"-=10")
})