<template>
  <div>
    <com-menu :wineName="wineName"></com-menu>
    <main>
      <div class="headerBG"></div>
      <section class="about">
        <div class="about-left">
          <div class="about-content">
            <h3>{{$route.params.wineName}}</h3>
            <h4>{{findListArr[wineItem].VARIETY}}</h4>
            <p class="about-text">{{findListArr[wineItem].ABOUT}}</p>
          </div>
          <div class="about-info">
            <span v-on:click="companyPage()" class="btn-line" >VIEW ALL WINES</span>
          </div>
        </div>
        <div class="about-right">
          <div class="about-imgBox" v-if="findListArr[wineItem].IMG !=='' ">
            <img :src="require(`../${findListArr[wineItem].IMG}`)" alt="wines">
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
  const { wineItem } = history.state;
  const { wineName } = history.state;
</script>

<script>
import ComMenu from './com-Menu.vue';

export default {
  name:'comAbout',
  data(){
    return{
      headerClass:'about',
      routeID:this.$route.params.id,
      countryArr:[],
      findArr:[],
      findListArr:[],
    }
  },
  props:{
    DataWine:Array,
    DataWineList:Array,
  },
  components :{
    ComMenu
  },
  methods :{
    companyPage(){
      this.$router.push(`/company/${this.routeID}`)
    }
  },
  created(){
    window.scrollTo(0,0)

    this.DataWineList.forEach((ele)=>{
      this.countryArr.push(...ele.DATA)      
    })
    this.countryArr.find((ele)=>{
      if(ele.COMPANY == this.routeID){
        this.findArr = ele
        this.findListArr = ele.LIST
        // console.log(this.findArr);
        // console.log(this.findListArr);
        
      }
    })
  },

}
</script>

<style scoped src="../css/about.css">
</style>