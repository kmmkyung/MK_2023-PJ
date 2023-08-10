window.addEventListener('DOMContentLoaded',function(){

  // [ 베찌 ]
  window.addEventListener('scroll',function(){
    const badge = document.querySelector('.badge')
    if(window.scrollY>800){
      badge.classList.add('-opacity')
      badge.style.pointerEvents='none';
    }
    else{
      badge.classList.remove('-opacity')
      badge.style.pointerEvents='all';
    }
  })

  // [ 공지사항 - 공지 세로 슬라이드 ]
  function noticeSlide(){
    const noticeUl = document.querySelector('.notice-line__notice ul')
    const noticeLi = document.querySelectorAll('.notice-line__notice ul li')
    
  }
  // [ 공지사항 - 프로모션 아코디언 ]
  // [ 공지사항 - 프로모션 가로 슬라이드 ]
  
})