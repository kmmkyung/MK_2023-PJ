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
    setInterval(function(){
      const noticeLi = document.querySelectorAll('.notice-line__notice ul li');
      noticeUl.insertBefore(noticeLi[noticeLi.length-1],noticeLi[0]);
      noticeUl.style.height = -100 +'%';
      noticeUl.style.transition = "none";
      setTimeout(function(){
        noticeUl.style.height = '0';
        noticeUl.style.transition = "height .4s ease-in-out";
      },1)
    },4000)
  }
  noticeSlide()


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
        clearAuto()
      }
      else{
        promotionAccBtn.classList.toggle('fa-chevron-up');
        promotionAccBtn.classList.toggle('fa-chevron-down');
        promotioncontent.style.height = 0;
        clearInterval(autoSlideInterval);
        clearTimeout(autoSlideTimeout);
      }
    })
  }
  promotionAccordion()
  

  // [ 공지사항 - 프로모션 가로 슬라이드 ]
  const arrowBtn = document.querySelectorAll('.promotionBanner-arrow i');
  const slideUl = document.querySelector('.promotionBanner-box');
  const pause = document.querySelector('.fa-pause');
  const play = document.querySelector('.fa-play');
  let clickClick = 0;
  let autoSlideInterval
  let autoSlideTimeout
  
  // 버튼 이벤트 설정 및 분기(L-0 / R-1)
  arrowBtn.forEach(function(v,i){
    v.addEventListener('click',function(){
      clearAuto()
      promotionSlide(i)
      promotionOn()
      if(play.classList!=='-hidden'){
        play.classList.add('-hidden');
        pause.classList.remove('-hidden')
      }
    })
  })

  // 슬라이드 이동 함수
  function promotionSlide(i){
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
  
  // 프로모션 가로 슬라이드 On 함수
  function promotionOn(){
    const slideLl = document.querySelectorAll('.promotionBanner');
    const bullet = document.querySelectorAll('.fa-circle');

    let nowseq = slideLl[2].getAttribute('data-seq');
    console.log('현재순번',nowseq);
    for(let x of slideLl){x.classList.remove('on')};
    slideLl[nowseq].classList.add('on');
    for(let x of bullet){x.classList.remove('on')};
    bullet[nowseq].classList.add('on');
  }

  // 프로모션 가로 슬라이드 자동 이동
  function autoSlide(){
    autoSlideInterval = setInterval(function(){
      promotionSlide(1)
      promotionOn()
    },4000)
  }
  
  // 프로모션 가로 슬라이드 멈춤버튼
  function pauseBtn(){
    pause.addEventListener('click',()=>{
      clearInterval(autoSlideInterval);
      pause.classList.add('-hidden');
      play.classList.remove('-hidden')
    })
    play.addEventListener('click',()=>{
      autoSlide();
      play.classList.add('-hidden');
      pause.classList.remove('-hidden')
    })
  }
  pauseBtn()
  
  // 프로모션 가로 슬라이드 자동 초기화
  function clearAuto(){
    clearInterval(autoSlideInterval);
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(autoSlide,4500)
  }






  
})
