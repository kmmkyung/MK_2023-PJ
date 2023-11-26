<template>
  <div>
    <com-menu :headerClass="headerClass"></com-menu>
    <main>
      <div class="headerBG"></div>
      <section>
        <div class="container">
          <div class="searchInput">
            <label class="search-label" for="search" v-on:click="searchClick()">SEARCH</label>
            <input id="search" class="search-input" type="text"  v-on:keyup="filterTable()">
          </div>
          <div class="table-wrap">
            <table class="table">
              <thead>
                <tr class="mobile-filter -hidden">
                  <th>FILTER WINES
                    <div class="filter-dot"></div>
                  </th>
                </tr>
                <tr class="filter">
                  <th class="wine" data-type="typeWine">WINE</th>
                  <th class="producer" data-type="typePro">PRODUCER</th>
                  <th class="country">COUNTRY</th>
                  <th class="region">REGION</th>
                  <th class="variety">VARIETY</th>
                  <th class="style">STYLE</th>
                </tr>
              </thead>
              <tbody>
                <template  v-for="country in DataWineList">
                  <template v-for="company in country">
                    <tr class="content" v-for="(ele,idx) in company.LIST" :key="idx">
                      <td>{{ ele.WINE }}</td>
                      <td>{{ ele.PRODUCER }}</td>
                      <td>{{ ele.COUNTRY }}</td>
                      <td>{{ ele.REGION }}</td>
                      <td>{{ ele.VARIETY }}</td>
                      <td>{{ ele.STYLE }}</td>
                    </tr>
                  </template>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import comMenu from './com-Menu.vue';
export default {
  components: { comMenu },
  data(){
    return{
      headerClass:'list',
      country:null,
      company:null,
      wine:null
    }
  },
  props : {
    DataWineList : Array
  },
  methods : {
    searchClick(){
      const searchInput = document.querySelector('.search-input');
      const searchLabel = document.querySelector('.search-label');
      searchInput.addEventListener('focus',function(){
        searchLabel.style.transform = 'translateY(-20px)'
      });
      searchInput.addEventListener('blur',function(){
        searchLabel.style.transform = 'translateY(0)'
      });
    },
    filterTable(){
      let filter = event.target.value.toUpperCase();
      console.log(filter);
      
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
  },
  mounted(){
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
    
  },
  created() {
    // console.log(this.DataWineList.length);

    // this.DataWineList.forEach((ele)=>{
    //   console.log(ele);
    // })
  },
}
</script>

<style>
.container{
  padding-top: 120px;
}

.container::after{
  content: '';
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(255, 255, 255, 0),var(--main))
}

.searchInput{
  text-align: center;
  margin: 50px auto;
}

.search-label{
  display: block;
  font-size: var(--font-size-S);
  transition: all 0.4s;
}

.search-input{
  display: block;
  margin: 10px auto;
  border: none;
  background-color: transparent;
  font-size: var(--font-size-M);
  width: 30%;
  font-family: 'Nanum Myeongjo', serif;
  text-align: center;
}

.search-input:focus{
  outline: none;
}

.table-wrap{
  box-sizing: border-box;
  padding: 0 20px 300px;
}

.table{
  width: 100%;
  margin-top: 120px;
  table-layout: fixed;
  border-collapse: collapse;
}

.table thead{
  position: sticky;
  top: 69px;
  left: 0;
  background-color: var(--main);
}

.table>thead::after{
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: black;
  position: absolute;
  bottom: 0;
}

.table th{
  text-align: start;
  font-size: var(--font-size-S);
  padding-bottom: 10px;
}

.table tr:last-child th::after{
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 50%;
  margin-left: 10px;
  transition: all .2s;
}

.table th:hover::after{
  background-color: black;
}

.table tr{
  border-bottom: 1px solid var(--black);
  transition: all .2s;
}

.table tr.content:hover{
  font-style: italic;
}

.table td{
  height: auto;
  font-size: var(--font-size-M);
  font-family: 'Nanum Myeongjo', serif;
  padding: 15px 0;
}

.mobile-title{
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size-S);
  margin-left: 10px;
  display: none;
}

/* 미디어쿼리 */
@media screen and (max-width:990px){
  .mobile-filter th{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 10px 0;
    box-sizing: border-box;
  }

  .table thead .filter{
    height: 0;
    overflow: hidden;
    border: none;
    transition: all 1s;
  }

  .filter th{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px 0;
    box-sizing: border-box;
  }

  .table thead tr{
    display: flex;
    flex-direction: column;
  }

  .filter-dot{
    vertical-align: middle;
    width: 10px;
    height: 10px;
    border: 1px solid black;
    border-radius: 50%;
    margin-left: 10px;
    transition: all .2s;
  }

  .table thead tr:first-child:hover .filter-dot{
    background-color: black;
  }
  
  .table tbody tr{
    margin: 10px 0;
  }

  .table td {
    padding: 5px 0;
    display: block;
  }
}

</style>