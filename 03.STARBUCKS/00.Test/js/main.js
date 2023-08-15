window.addEventListener('DOMContentLoaded',function(){

  // [ 베찌 ]
  window.addEventListener('scroll',function(){
    const badge = document.querySelector('.badge');
    if(window.scrollY>500){
      badge.classList.add('-opacity');
      badge.style.pointerEvents='none';
    }
    else{
      badge.classList.remove('-opacity');
      badge.style.pointerEvents='all';
    }
  })

  // [ 공지사항 - 공지 세로 슬라이드 ]
  function noticeSlide(){
    const noticeUl = document.querySelector('.notice-line__notice ul');
    const noticeLi = document.querySelectorAll('.notice-line__notice ul li');
    let noticeIndex = 0;
  }

  // [ 공지사항 - 프로모션 아코디언 ]
  function promotionAccordion(){
    const promotionAccBtn = document.querySelector('.notice-line__promotion i');
    const promotioncontent = document.querySelector('#notice-promotionBanner');
    let promotionBanner = false;
    promotionAccBtn.addEventListener('click',function(){
      promotionBanner = !promotionBanner
      if(promotionBanner){
        promotionAccBtn.classList.toggle('fa-chevron-up');
        promotionAccBtn.classList.toggle('fa-chevron-down');
        promotioncontent.style.height = 658+'px';
      }
      else{
        promotionAccBtn.classList.toggle('fa-chevron-up');
        promotionAccBtn.classList.toggle('fa-chevron-down');
        promotioncontent.style.height = 0;
      }
    })
  }
  promotionAccordion()
  
  
  // [ 공지사항 - 프로모션 가로 슬라이드 ]
  const arrowBtn = document.querySelectorAll('.promotionBanner-arrow i');
  const slideUl = document.querySelector('.promotionBanner-box');
  let clickClick = 0;
  
  // 버튼 이벤트 설정 및 분기(L-0 / R-1)
  arrowBtn.forEach(function(v,i){
    v.addEventListener('click',function(){
      promotionSlide(i)
      promotionBullet(i)
    })
  })

  // 슬라이드 이동 함수
  function promotionSlide(i){
    // li 수집
    const slideLl = document.querySelectorAll('.promotionBanner');
    // 광클금지
    if(clickClick) return;
    clickClick = 1;
    setTimeout(()=>{
      clickClick = 0
    },400);

    if(i){
      slideUl.style.left = -102 +'%';
      slideUl.style.transition = 'left .4s ease-in-out';
      setTimeout(function(){
        slideUl.appendChild(slideLl[0]);
        slideUl.style.left = '0';
        slideUl.style.transition = "none";
      },400)
    }
    else{
      slideUl.insertBefore(slideLl[slideLl.length-1],slideLl[0]);
      slideUl.style.left = -102 +'%';
      slideUl.style.transition = "none";
      setTimeout(function(){
        slideUl.style.left = '0';
        slideUl.style.transition = "left .4s ease-in-out";
      },1)
    }
  }

  // 프로모션 가로 슬라이드 블릿 함수
  function promotionBullet(i){
    const slideLl = document.querySelectorAll('.promotionBanner');
    const bullet = document.querySelectorAll('.fa-circle');
    let bulletseq = slideLl[i].getAttribute('data-seq');
    for(let x of bullet){x.classList.remove('on')};
    bullet[bulletseq].classList.add('on');
  }

  // 프로모션 가로 슬라이드 자동 이동
  function autoSlide(){
    let autoSlideInterval = setInterval(function(){
      promotionSlide(1)
      promotionBullet(1)
    },4000)
    return autoSlideInterval;
  }
  autoSlide()

  // 
})
// const pause = document.querySelector('.fa-pause');