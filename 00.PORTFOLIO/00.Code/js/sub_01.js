window.addEventListener('DOMContentLoaded',function(){

  // [ header - contact]
  const mainBtn = $('.main-btn');
  const siteBtn = $('.site-btn');
  const footerBtn = $('.footer-btn');

  mainBtn.on('click',function(){
    location.href = 'index.html';
  });
  siteBtn.on('click',function(){
    window.open('https://kmmkyung.github.io/PJ-EDIAY/Code/intro.html', '_blank');
  });
  footerBtn.on('click',function(){
    $('html').animate({scrollTop:document.body.scrollHeight},300)
  });






})