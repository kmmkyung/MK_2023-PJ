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
    <td>${tableTdWine[winesTdNum]}<span class="mobile-title">(WINE)</span></td>
    <td>${tableTdProducer[winesTdNum]}<span class="mobile-title">(PRODUCER)</span></td>
    <td>${tableTdCountry[winesTdNum]}<span class="mobile-title">(COUNTRY)</span></td>
    <td>${tableTdRegion[winesTdNum]}<span class="mobile-title">(REGION)</span></td>
    <td>${tableTdVariety[winesTdNum]}<span class="mobile-title">(VARIETY)</span></td>
    <td>${tableTdStyle[winesTdNum]}<span class="mobile-title">(STYLE)</span></td>
    </tr>`;
    
    tableTd += tableTdLine;
    tableTbody.innerHTML = tableTd;
  }

  // sort
  let click =[0,0,0,0,0,0]
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.rows);    
  let wineSort;
  const th = document.querySelectorAll('.filter th')
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

// search filter
  function filterTable(event){

    let filter = event.target.value.toUpperCase()
    let rows = document.querySelector(".table tbody").rows;
    for(let i = 0; i < rows.length; i++){
      let Col0 = rows[i].cells[0].innerHTML.toUpperCase();        
      let Col1 = rows[i].cells[1].innerHTML.toUpperCase();        
      let Col2 = rows[i].cells[2].innerHTML.toUpperCase();        
      let Col3 = rows[i].cells[3].innerHTML.toUpperCase();        
      let Col4 = rows[i].cells[4].innerHTML.toUpperCase();        
      let Col5 = rows[i].cells[5].innerHTML.toUpperCase();        

      if(Col0.indexOf(filter) > -1 ||
      Col1.indexOf(filter) > -1 ||
      Col2.indexOf(filter) > -1 ||
      Col3.indexOf(filter) > -1 ||
      Col4.indexOf(filter) > -1 ||
      Col5.indexOf(filter) > -1
      ){rows[i].style.display = ''}
      else{rows[i].style.display = 'none'}
    }
  }

  searchInput.addEventListener('keyup',filterTable)

  // Mobile menu
  const mobileFilter = document.querySelector('.mobile-filter');
  const mobileFilterDot = document.querySelector('.filter-dot');
  const filter = document.querySelector('.filter');
  window.addEventListener('resize',function(){
    if(window.innerWidth>990){
      document.querySelector('.title h2').textContent = 'The wine List'
      mobileFilter.classList.add('-hidden');
      mobileFilterDot.style.backgroundColor = '';
      filter.style.height = 0 + 'px';
      filter.style.overflow = 'hidden';
      document.querySelectorAll('.mobile-title').forEach(function(ele){
        ele.style.display='none';
      })
    }
    else{
      document.querySelector('.title h2').textContent = ''
      mobileFilter.classList.remove('-hidden');
      document.querySelectorAll('.mobile-title').forEach(function(ele){
        ele.style.display='inline';
      })

    }
  })
  mobileFilter.addEventListener('click',function(){
    mobileFilter.classList.toggle('active');
    if(mobileFilter.classList.contains('active')){
      mobileFilterDot.style.backgroundColor = 'black';
      filter.style.height = filter.scrollHeight + 'px';
      filter.style.overflow = 'auto';
    }
    else{
      mobileFilterDot.style.backgroundColor = '';
      filter.style.height = 0 + 'px';
      filter.style.overflow = 'hidden';
    }
  })
})
