// [ header - contact]
const workBtn = $('.main-btn');
const aboutBtn = $('.site-btn');
const footerBtn = $('.footer-btn');
workBtn.on('click',function(){
  $('html').animate({},300)
});
aboutBtn.on('click',function(){
  $('html').animate({},300)
});
footerBtn.on('click',function(){
  $('html').animate({scrollTop:document.body.scrollHeight},300)
});