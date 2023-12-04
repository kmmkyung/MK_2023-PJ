<template>
  <div>
    <com-menu :wineName="wineName"></com-menu>
    <main>
      <div class="headerBG"></div>
      <section class="wines">
        <div class="wines-left">
          <div class="wines-content">
            <h3>{{this.itemIdx}}</h3>
            <h4>ㅁㅁ</h4>
            <p class="about">ㅁㅁㅁㅁㅁ</p>
          </div>
          <div class="info">
            <span v-on:click="companyPage()" class="btn-line" >VIEW ALL WINES</span>
          </div>
        </div>
        <div class="wines-right">
          <div class="wines-imgBox">
            <!-- <img src="" alt="wines"> -->
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ComMenu from './com-Menu.vue';

export default {
  data(){
    return{
      headerClass:'about',
      wineName:this.$route.params.wineName,
      routeID:this.$route.params.id,
      countryArr:[],
      findArr:[],
      findListArr:[],

    }
  },
  props:{
    DataWine:Array,
    DataWineList:Array,
    itemIdx:Number
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

    // this.DataWineList.forEach((ele)=>{
    //   this.countryArr.push(...ele.DATA)
    // })
    // this.countryArr.find((ele)=>{
    //   if(ele.COMPANY == this.routeID){
    //     this.findArr = ele
    //     this.findListArr = ele.LIST
    //   }
    // })
  }
}
</script>

<style scoped src="../css/about.css">

</style>