import DataWineList from "../assets/data/DataWineList.js"
window.addEventListener('DOMContentLoaded',function(){

  // title
  const title = document.querySelector('.title>h2');
  title.textContent = Object.keys(DataWineList.AUSTRALIA)[0]
  
  // wines list 
  // wines list sort
  let winesList = '';
  let wines = DataWineList.AUSTRALIA['Ada Wines']['LIST'];

  
  wines.sort(function(a,b){
    return a.WINE<b.WINE ? -1 : 1
  })
  for(let wines of DataWineList.AUSTRALIA['Ada Wines']['LIST']){
    winesList += `
    <li class="item">
    <h3>${wines.WINE}</h3>
    <h4>${wines.VARIETY}</h4>
    <span>MORE INFO</span>
    </li>`
  }
  document.querySelector('.item-list').innerHTML = winesList;
  
  const itemImg = document.querySelector('.wines-imgBox');
  itemImg.style.backgroundImage = "url('./assets/"+wines[0].IMG+"')";
  
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

})