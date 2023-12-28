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
    autoplay: {
      delay: 5000
    },
    effect:'fade',
    pagination: {
      el: '.swiper1-pagination',
      clickable: true,
      renderBullet:function(index,className){
        return `<li class=${className}>${PaginationValue[index]}</li>`
      }
    }, 
  })
})