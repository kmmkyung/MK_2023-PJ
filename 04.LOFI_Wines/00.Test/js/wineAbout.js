import DataWineList from "../assets/data/DataWineList.js"
window.addEventListener('DOMContentLoaded',function(){

  window.addEventListener('resize',function(){
    const title = document.querySelector('.title>h2');
    if(window.innerWidth>990){
    // [title]
    title.textContent = DataWineList.AUSTRALIA["Ada Wines"].LIST[0].WINE
  }
  else{
    title.textContent = ''
  }
})

  // wines list img
let wines = DataWineList.AUSTRALIA['Ada Wines']['LIST'];
const itemImg = document.querySelector('.wines-imgBox>img');
itemImg.src = `./assets/${wines[0].IMG}`;

let winesContentWine = document.querySelector('.wines-content h3')
let winesContentVariety = document.querySelector('.wines-content h4')
let winesContentAbout = document.querySelector('.wines-content .about')

winesContentWine.textContent= DataWineList.AUSTRALIA["Ada Wines"].LIST[0].WINE
winesContentVariety.textContent= DataWineList.AUSTRALIA["Ada Wines"].LIST[0].VARIETY
winesContentAbout.textContent= DataWineList.AUSTRALIA["Ada Wines"].LIST[0].ABOUT
})
