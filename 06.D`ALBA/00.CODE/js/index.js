window.addEventListener('DOMContentLoaded',function(){
  // section1
  //// swiper
  const swiper1 = new Swiper('.section-1__swiper',{
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000
    },
    effect:'fade',
    pagination: {
      el: '.swiper1-pagination',
      clickable: true,
      type:'custom'
    },
  })
})