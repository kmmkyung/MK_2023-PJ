window.addEventListener('DOMContentLoaded',function(){
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

  
})