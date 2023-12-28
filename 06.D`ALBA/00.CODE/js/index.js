window.addEventListener('DOMContentLoaded',function(){
  // section1
  //// swiper
  const swiper1Pagination = document.querySelectorAll('.swiper1-pagination li')
  let PaginationValue = []
  swiper1Pagination.forEach(function(ele){
    PaginationValue.push(ele.textContent)
  })
  
  const swiper1 = new Swiper('.section-1__swiper',{
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //   delay: 5000
    // },
    effect:'fade',
    pagination: {
      el: '.swiper1-pagination',
      clickable: true,
      renderBullet:function(index,className){
        return `<li class=${className}>${PaginationValue[index]}</li>`
      }
    }
  })

  window.addEventListener('resize',function(){
    const bannerBg1 = document.querySelector('.banner-1')
    const bannerBg2 = document.querySelector('.banner-2')
    const bannerBg3 = document.querySelector('.banner-3')
    const bannerBg4 = document.querySelector('.banner-4')
    if(window.innerWidth<=900){
      bannerBg1.style.backgroundImage='url(./assets/images/mobile_section-1-1.jpg)'
      bannerBg2.style.backgroundImage='url(./assets/images/mobile_section-1-2.jpg)'
      bannerBg3.style.backgroundImage='url(./assets/images/mobile_section-1-3.jpg)'
      bannerBg4.style.backgroundImage='url(./assets/images/mobile_section-1-4.jpg)'
    }
    if(window.innerWidth>900){
      bannerBg1.style.backgroundImage='url(./assets/images/section-1-1.jpg)'
      bannerBg2.style.backgroundImage='url(./assets/images/section-1-2.jpg)'
      bannerBg3.style.backgroundImage='url(./assets/images/section-1-3.jpg)'
      bannerBg4.style.backgroundImage='url(./assets/images/section-1-4.jpg)'
      
    }
  })
})