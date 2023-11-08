import DataWineList from "../assets/data/DataWineList.js"
window.addEventListener('DOMContentLoaded',function(){

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
  let click =[0,0,0,0,0,0]
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.rows);    
  let wineSort;
  const th = document.querySelectorAll('th')
  th.forEach(function(ele,idx){
    ele.addEventListener('click',function(e){ // 홀수이면
      click[idx]++;
      let thTarget = e.target;    
      if(click[idx]%2 == 1){
        rowsArr1(thTarget.cellIndex);
        rows.sort(wineSort);
        tbody.append(...rows);
      }
      if(click[idx]%2 == 0){
        rowsArr2(thTarget.cellIndex);
        rows.sort(wineSort);
        tbody.append(...rows);
      }
    })
  })

  function rowsArr1(index){
    wineSort = function(rowA,rowB){
      return rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1;          
    };
  }
  function rowsArr2(index){
    wineSort = function(rowA,rowB){
      return rowA.cells[index].innerHTML < rowB.cells[index].innerHTML ? 1 : -1;          
    };
  }

// search
  const searchInput = document.querySelector('.search-input');
  const searchLabel = document.querySelector('.search-label');
  searchInput.addEventListener('focus',function(){
    searchLabel.style.transform = 'translateY(-20px)'
  });
  searchInput.addEventListener('blur',function(){
    searchLabel.style.transform = 'translateY(0)'
  });

// filter
  function filterTable(event){
    let filter = event.target.value.toUpperCase()
    let rows = document.querySelector(".table tbody").rows;    

    for(let i = 0; i < rows.length; i++){
      for(let v = 0; v <= 5; v++){
        const Col = rows[i].cells[v].innerHTML
        const ColUpper = Col.toUpperCase()
        if(ColUpper.indexOf(filter) > -1){
          rows[i].style.display = ''
        }
        else{
          rows[i].style.display = 'none'
        }
      }
    }
  }
  searchInput.addEventListener('keyup',filterTable)
})
