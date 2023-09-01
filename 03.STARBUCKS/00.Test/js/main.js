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


  // [ 배너 - 모바일 사이즈]
  // -윈도우 가로사이즈가 930px 이하라면 #banner의 DT이미지 M이미지로 바꾸기
  window.addEventListener('resize',function(){
    const winWidth = window.innerWidth;
    const bannerDT = document.querySelectorAll('.banner-DT')    
    const bannerM = document.querySelectorAll('.banner-M')
    if(winWidth<=930){
      bannerDT.forEach(function(v){
        v.classList.remove('-opacity')
        v.classList.add('-hidden')
      })
      bannerM.forEach(function(v){
        v.classList.add('-opacity')
        v.classList.remove('-hidden')
      })
    }
    else{
      bannerM.forEach(function(v){
        v.classList.remove('-opacity')
        v.classList.add('-hidden')
      })
      bannerDT.forEach(function(v){
        v.classList.add('-opacity')
        v.classList.remove('-hidden')
      })
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
  

  // [ 공지사항 - 프로모션 가로 슬라이드 ]________________________________________________________________________________
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
  
  // 프로모션 가로 슬라이드 On 함수________________________________________
  // 문제 1. 현재순번은 맞는데 슬라이드 클래스 on(opacity:1)이 안맞는중
  // 문제 2. 블릿을 화살표 누르면 한번 순서 먹었다가 움직임
  // 함수를 호출할때마다 슬라이드랑 블릿을 다시 수집하는데 왜일까요
  // 확인하기 쉽게 아코디언은 기본높이로 꺼내놨습니당~
  // 이 함수는 자동이동(autoSlide), 화살표 누를때 호출하게 해놨음!

  function promotionOn(){
    // 함수 실행될때마다 재수집
    const slideLl = document.querySelectorAll('.promotionBanner'); // li 슬리이드 3개
    const bullet = document.querySelectorAll('.fa-circle'); // 블릿 3개

    let nowseq = slideLl[2].getAttribute('data-seq');
    console.log('현재순번',nowseq);
    for(let x of slideLl){x.classList.remove('on')};
    slideLl[nowseq].classList.add('on'); //<- 문제 1
    for(let x of bullet){x.classList.remove('on')};
    bullet[nowseq].classList.add('on'); //<- 문제 2
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
