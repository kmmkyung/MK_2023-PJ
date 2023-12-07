import DataWineList from "../assets/data/DataWineList.js"
window.addEventListener('DOMContentLoaded',function(){

// [title]
window.addEventListener('resize',function(){
  const title = document.querySelector('.title>h2');
  if(window.innerWidth>990){
    title.textContent = Object.keys(DataWineList.AUSTRALIA)[0]
  }
  else{
    title.textContent = ''
  }
})
  
// [wines list]
// wines list sort
  let winesList = '';
  let wines = DataWineList.AUSTRALIA['Ada Wines']['LIST'];
  
// wines list img
  const itemImg = document.querySelector('.wines-imgBox');
  const companyImg = document.querySelector('.company-imgBox>img')
  itemImg.style.backgroundImage = "url('./assets/"+wines[0].IMG+"')";
  companyImg.src = `./assets/${DataWineList.AUSTRALIA['Ada Wines'].COMPANY_IMG}`

// wines list company p
  const story1 = document.querySelector('.story-1');
  const story2 = document.querySelector('.story-2');
  const story3 = document.querySelector('.story-3');
  const readBtn = document.querySelector('.readBtn');
  story1.textContent = DataWineList.AUSTRALIA['Ada Wines'].STORY_1;
  story2.textContent = DataWineList.AUSTRALIA['Ada Wines'].STORY_2;
  story3.textContent = DataWineList.AUSTRALIA['Ada Wines'].STORY_3;
  readBtn.addEventListener('click',function(){
    story2.classList.toggle('active');
    story3.classList.toggle('active');
    story2.classList.contains('active')? story2.style.height=story2.scrollHeight+'px' : story2.style.height=0;
    story3.classList.contains('active')? story3.style.height=story3.scrollHeight+'px' : story3.style.height=0;
    story2.classList.contains('active')? readBtn.innerHTML='READ LESS' : readBtn.innerHTML='READ MORE';
  })

// wines list HTML
  wines.sort(function(a,b){
    return a.WINE<b.WINE ? -1 : 1
  })
  for(let wines of DataWineList.AUSTRALIA['Ada Wines']['LIST']){
    winesList += /* html */`
    <li class="item">
    <h3>${wines.WINE}</h3>
    <h4>${wines.VARIETY}</h4>
    <span>MORE INFO</span>
    </li>`
  }
  document.querySelector('.item-list').innerHTML = winesList;
  
// wines list effect
  const itemList = document.querySelector('.item-list');
  const item = document.querySelectorAll('.item');
  
  if(itemList.scrollHeight >= 360){
    item[item.length-1].style.marginBottom = '100%'
  }
  
  item.forEach(function(ele,idx){
    ele.addEventListener('mouseenter',function(){
      itemImg.style.backgroundImage = "url('./assets/"+wines[idx].IMG+"')";
      ele.classList.add('colorB');
      let notEle = document.querySelectorAll('.item-list>li[class]:not(.colorB)')
      notEle.forEach(function(ele){
        ele.classList.add('colorGray');
      })
    })
    ele.addEventListener('mouseleave',function(){
      let notEle = document.querySelectorAll('.item-list>li[class]:not(.colorB)')
      ele.classList.remove('colorB');
      notEle.forEach(function(ele){
        ele.classList.remove('colorGray');
      })
      itemImg.style.backgroundImage = "url('./assets/"+wines[0].IMG+"')";
    })
  })

// Btn
  const infoBtn = document.querySelector('.infoBtn');
  const topBtn = document.querySelector('.topBtn')
  const companyPage =  document.querySelector('#company')  
  const winesPage =  document.querySelector('#wines')  
  
  infoBtn.addEventListener('click',function(){
    companyPage.scrollIntoView({ behavior: "smooth", block: "start"});
  })

  topBtn.addEventListener('click',function(){
    winesPage.scrollIntoView({ behavior: "smooth", block: "start"});
  })


})