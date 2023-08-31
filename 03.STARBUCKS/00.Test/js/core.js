window.addEventListener('DOMContentLoaded',function(){

  // [ 메인메뉴 - 메뉴리스트 적용 ]
  const nav = document.querySelector('.main-menu')
  let mainMenuCode = '';
  mainMenuCode += `<ul class="menu">`
  // 메뉴 타이틀 title=COFFEE,MENU,STORE...
  for(let title in navData){
    mainMenuCode += `
      <li class="menu-item">
        <a href="#">
          <div class="menu-item__name">${title}</div>
        </a>
        <div class="menu-item__contents -hidden">
        <ul class="contents-menu">
        `
    // 서브메뉴타이틀 sTitle=커피,커피이야기,스타벅스 리저브...
    for(let sTitle in navData[title]){
      mainMenuCode += `
          <li class="contents-menu__list">
            <h4>${sTitle}</h4>
            <ul>
      `
      // 하위메뉴
        for(let list of navData[title][sTitle]){
          mainMenuCode += `
              <li>${list}</li>
              `
            }
            mainMenuCode += `
            </ul>
          </li>
            `
          }
          mainMenuCode += `
        </ul>
      </div>
    </li>
    `
  }
  mainMenuCode += `</ul>`
  nav.innerHTML = mainMenuCode;
  
  // [ 메인메뉴 - 오버시 보이게 하기 ]
  const title = document.querySelectorAll('.menu-item')
  title.forEach((v,i)=>{
    const menuContainer = document.querySelectorAll('.menu-item__contents');
    const menuUl =  document.querySelectorAll('.contents-menu')
    v.addEventListener('mouseenter',function(){
      menuContainer[i].classList.remove('-hidden') 
      let vH = menuUl[i].clientHeight;
      menuContainer[i].style.height = vH + 'px';
    })
    v.addEventListener('mouseleave',function(){
      menuContainer[i].classList.add('-hidden')
      menuContainer[i].style.height = 0;
    })
  })
  

  // [ 서브메뉴 - 서치아이콘 ]
  const searchInput = document.querySelector('.search input') 
  const searchIcon = document.querySelector('.search i')
  searchInput.addEventListener('focus',function(){
    searchIcon.classList.add('-opacity')
    searchInput.setAttribute('placeholder',' 검색어를 입력해 주세요');
  })
  searchInput.addEventListener('blur',function(){
    searchIcon.classList.remove('-opacity')
    searchInput.setAttribute('placeholder','');
    searchInput.value = "";
  })
  // enter시 내용 삭제
  searchInput.addEventListener('keypress',function(e){
    if(e.keyCode == 13){searchInput.value = "";}
  })


  // [푸터 메뉴리스트 적용]
  const footerNav = document.querySelector('.footer-menu');
  let footerMenuCode = '';
  footerMenuCode+=`<ul class="menu">`
  for(let title in footerData){
    footerMenuCode+=`
    <li class="menu-item">
    <h4><a href="#">${title}</a></h4>
      <ol> 
    `
    for(let list of footerData[title]){
      footerMenuCode+=`
        <li><a href="#">${list}</a></li>
      `
    }
    footerMenuCode+=`
      </ol>
    </li>
    `
  }
  footerMenuCode+=`</ul>`
  footerNav.innerHTML=footerMenuCode;
})