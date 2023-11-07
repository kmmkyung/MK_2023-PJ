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
  for(let winesTdNum = 0; winesTdNum < WineL-1; winesTdNum++){
    let tableTdLine = `
    <tr class="content">
    <td>${tableTdWine[winesTdNum]}</td>
    <td>${tableTdProducer[winesTdNum]}</td>
    <td>${tableTdCountry[winesTdNum]}</td>
    <td>${tableTdRegion[winesTdNum]}</td>
    <td>${tableTdVariety[winesTdNum]}</td>
    <td>${tableTdStyle[winesTdNum]}</td>
    </tr>`;
    
    tableTd += tableTdLine;
    tableTbody.innerHTML = tableTd;
  }

  // sort
  const thWine = document.querySelector('.wine');
  let tbody = document.querySelector('tbody')
  let rows = Array.from(tbody.rows)  
  let nameA
  
  thWine.addEventListener('click',function(e){
    let th = e.target;
    rowsArr(th.cellIndex,th.dataset.type);
  })

  function rowsArr(index,type){
    switch(type){
      case 'name' :
        nameA = function(rowA,rowB){
        return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML;
      };
      break;
    }
    rows.sort(nameA)
    tableTbody.append(...rows);

  }
})
