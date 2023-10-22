window.addEventListener('DOMContentLoaded',function(){
  // [로고]
  const logo = document.querySelector('.logo')
  logo.innerHTML=logoData

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
})
