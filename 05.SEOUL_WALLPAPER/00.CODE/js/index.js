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

  window.addEventListener('scroll',function(){
    let section2WinTop = section2.getBoundingClientRect().top
    let section2PageSize = section2.offsetHeight
    // console.log(window.scrollY-section2PageSize);
    // console.log(section2PageSize/2*1);
    
    // if(section2WinTop<=0){
    //   section2.style.position = 'fixed';
    // }
    // if(window.scrollY - section2PageSize >= section2PageSize/2*1){
    //   section2.style.position = 'relative';
    // }
  })





})