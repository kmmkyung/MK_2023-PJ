<template>
  <div>
    <com-menu :headerClass="headerClass" :title="title"></com-menu>
    <main>
      <div class="headerBG"></div>
      <div class="content">
        <ul class="list-container">
          
          <li class="list" v-for="(country,countryIdx) in $store.state.country" :key="countryIdx">
            <ol class="item-container">{{ country }}
              <li class="item" v-for="(companyItem,idx) in DataWine[countryIdx]" :key="idx">
                <router-link :to="`/company/${companyItem}`" class="btn-underline" :idx="idx" :title="companyItem ">{{ companyItem }}</router-link>
              </li>
            </ol>ㅋㅋㅋ
          </li>
          
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import ComMenu from './com-Menu.vue'
export default {
  name : 'comProducers',
  data(){
    return{
      headerClass:'producers',
      title:'Producers'
    }
  },
  components :{
    ComMenu
  },
  props:{
    DataWine:Object
  },
  methods:{

  }
}
</script>

<style scoped>
main{
  justify-content: center;
}

.list-container{
  padding-top: 120px;
  text-align: center;
}

.list{
  font-size: var(--font-size-S);
  margin: 40px 0;
}

.item-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item{
  margin: 5px 0;
  font-size: min(7vw,var(--font-size-L));
  font-family: 'Nanum Myeongjo', serif;
}
</style>