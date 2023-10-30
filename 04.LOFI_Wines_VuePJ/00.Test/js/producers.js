import DataWine from "../assets/data/DataWine.js";
window.addEventListener('DOMContentLoaded',function(){
  const content = document.querySelector('.content');
  let producersData = ``
  producersData += /* html */`<ul class="list-container">`
  for(let key in DataWine){
    producersData += /* html */`
      <li class="list">${key}
        <ol class="item-container">
    `
    for(let item of DataWine[key]){
      producersData += /* html */`
        <li class="item"><a class="btn-underline" href="#">${item}</a></li>
      `
    }
    producersData += /* html */`
      </ol>
    </li>
    `
  }
  producersData += /* html */`
  </ul>`
  content.innerHTML = producersData;
})
