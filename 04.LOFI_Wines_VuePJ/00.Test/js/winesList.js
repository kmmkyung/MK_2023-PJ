import DataWineList from "../assets/data/DataWineList.js"
window.addEventListener('DOMContentLoaded',function(){

  // wines list 
  // wines list sort
  let winesList = '';
  for(let wines of DataWineList.AUSTRALIA['Ada Wines']['LIST']){
    const winesName = wines
    console.log(winesName);
    
    
    winesList += `
    <li class="item">
      <h3>${wines.WINE}</h3>
      <h4>${wines.VARIETY}</h4>
      <span>MORE INFO</span>
    </li>`
  }
  document.querySelector('.item-list').innerHTML = winesList;


  // wines list eff
  const item = document.querySelectorAll('.item');
  item.forEach(function(ele,idx){
    ele.addEventListener('mouseenter',function(){
      
    })
  })
})