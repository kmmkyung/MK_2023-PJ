import DataWineList from "../assets/data/DataWineList.js"
window.addEventListener('DOMContentLoaded',function(){

  // search
  const searchInput = document.querySelector('.search-input')
  const searchLabel = document.querySelector('.search-label')
  searchInput.addEventListener('focus',function(){
    searchLabel.style.transform = 'translateY(-20px)'
  })
  searchInput.addEventListener('blur',function(){
    searchLabel.style.transform = 'translateY(0)'
  })

  // table Data
  const tableTbody = document.querySelector('.table tbody');
  const country = Object.keys(DataWineList);
  let tableTd = ``;
  let tableTdWine = [];
  let tableTdProducer = [];
  let tableTdCountry = [];
  let tableTdRegion = [];
  let tableTdVariety = [];
  let tableTdStyle = [];
  
  for(let i=0; i<country.length-1; i++){
    for(let winesCompany in DataWineList[country[i]]){
      for(let wines of DataWineList[country[i]][winesCompany].LIST){
        tableTdWine.push(wines.WINE)
        tableTdProducer.push(wines.PRODUCER)
        tableTdCountry.push(wines.COUNTRY)
        tableTdRegion.push(wines.REGION)
        tableTdVariety.push(wines.VARIETY)
        tableTdStyle.push(wines.STYLE)
      }
    }    
  }
  let WineL = tableTdWine.length
  for(let winesTd = 0; winesTd < WineL-1; winesTd++){
    let tableTdLine = `
    <tr class="content">
      <td>${tableTdWine[winesTd]}</td>
      <td>${tableTdProducer[winesTd]}</td>
      <td>${tableTdCountry[winesTd]}</td>
      <td>${tableTdRegion[winesTd]}</td>
      <td>${tableTdVariety[winesTd]}</td>
      <td>${tableTdStyle[winesTd]}</td>
    </tr>`;

    tableTd += tableTdLine;
    tableTbody.innerHTML = tableTd;
  }

  // sort
  const thWine = document.querySelector('.wine');
  let click = 0;
  thWine.addEventListener('click',function(){
    // if(click = 0){
      tableTdWine.sort(function(a,b){
        return a > b ? -1 : 1
      })
    // }
      
  })
})
