window.addEventListener('DOMContentLoaded',function(){
  // [로고]
  const logo = document.querySelector('.logo')
  logo.innerHTML=logoData
  logo.addEventListener('click',function(){
    location.href= 'index.html';
  })

  // [메뉴]
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  const menuItem = document.querySelectorAll('.menu-item');
  const asideLink = document.querySelector('aside');

  function menuItemFn(ele,time){
    setTimeout(function(){
      menuItem[ele].style.transform='translateY(0%)'
      menuItem[ele].style.opacity='1'
    },time)
  }
  
  hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('on');
    nav.classList.toggle('on');
    if(nav.classList.contains('on')){
      menuItemFn(0,600)
      menuItemFn(1,800)
      menuItemFn(2,1000)
      setTimeout(()=>{
        asideLink.style.transform='translateY(0%)'
        asideLink.style.opacity='1'
      },400)
    }
    else{
      menuItem.forEach((ele,idx) => {
        menuItem[idx].style.opacity='0'
        menuItem[idx].style.transform='translateY(100%)'
      })
      asideLink.style.opacity='0'
      asideLink.style.transform='translateY(100%)'
    }
  })

  // [메뉴배경]
  function headerBg(){
    const bg = document.querySelector('.headerBG')
    const header = document.querySelector('header')
    const companyPageRight = document.querySelector('.company-right')

    if(header.className == 'contact'){
      bg.style.backgroundColor = 'var(--contact)' 
    }
    if(header.className == 'producers'){
      bg.style.backgroundColor = 'var(--main)'
    }
    window.addEventListener('scroll',function(){
      if(header.className == 'winesList' && window.scrollY >= companyPageRight.scrollHeight ){
        bg.style.backgroundColor = 'var(--beige)'
      }
      if(header.className == 'winesList' && window.scrollY <= companyPageRight.scrollHeight ){
        bg.style.backgroundColor = 'transparent'
      }
    })
  }
  headerBg()
})
