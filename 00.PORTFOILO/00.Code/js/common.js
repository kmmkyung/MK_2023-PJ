window.addEventListener('DOMContentLoaded',function(){
console.log('common 로딩');


// [ header - logo ]
const headerLogo = $('.logo_W');
headerLogo.html(svgLogo.logo_w);

// [ header - contact]
const footerBtn = $('.footer-btn');
footerBtn.on('click',function(){
  $(window).scrollTop(document.body.scrollHeight);
})

// [ footer - z-index]
const footer = $('footer');
let mainH = $('#sec-main').height();

$(window).on('scroll',function(){
  if($(window).scrollTop()>mainH){
    footer.css({zIndex:'1'})
  }
  else{
    footer.css({zIndex:'-1'})
  }
})



}) // DOMContentLoaded