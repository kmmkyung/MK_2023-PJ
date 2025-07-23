<template>
  <div>
    <com-menu :headerClass="headerClass" :title="title"></com-menu>
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
                <tr class="mobile-filter -hidden" v-on:click="filterOn">
                  <th>FILTER WINES
                    <div class="filter-dot"></div>
                  </th>
                </tr>
                <tr class="filter">
                  <th class="wine">WINE</th>
                  <th class="producer">PRODUCER</th>
                  <th class="country">COUNTRY</th>
                  <th class="region">REGION</th>
                  <th class="variety">VARIETY</th>
                  <th class="style">STYLE</th>
                </tr>
              </thead>
              <tbody>
                <tr class="content" v-for="ele in this.companyArr" :key="ele">
                  <td v-on:click="aboutPage(ele)">
                      {{ ele.WINE }}
                  </td>
                  <td v-on:click="aboutPage(ele)">
                      {{ ele.PRODUCER }}
                  </td>
                  <td v-on:click="aboutPage(ele)">
                      {{ ele.COUNTRY }}
                  </td>
                  <td v-on:click="aboutPage(ele)">
                      {{ ele.REGION }}
                  </td>
                  <td v-on:click="aboutPage(ele)">
                      {{ ele.VARIETY }}
                  </td>
                  <td v-on:click="aboutPage(ele)">
                      {{ ele.STYLE }}
                  </td>
                </tr>
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
      title:'The Wine List',
      countryArr: [],
      companyArr: []
    }
  },
  props : {
    DataWineList : Array
  },
  methods : {
    aboutPage(wine){
      this.$router.push({
        name: "aboutPage",
        params:{
          id:wine.PRODUCER,
          wineName: wine.WINE,
        },
        state:{
          wineItem:wine.ID
        }
      })
    },
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
    },
    filterOn(){
      const filterMenu = document.querySelector('.filter');
      filterMenu.classList.toggle('on')
      filterMenu.classList.contains('on')? filterMenu.style.height=filterMenu.scrollHeight+'px' : filterMenu.style.height=0;
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
  created(){
    window.scrollTo(0,0)

  this.DataWineList.forEach((ele) => {
    this.countryArr.push(...ele.DATA);
    ele.DATA.forEach((item) => {
      this.companyArr.push(...item.LIST);
    });
  });
  }
}
</script>

<style scoped src="../css/theWineList.css">
</style>