<template>
  <div>
    <com-menu :headerClass="headerClass" :companyName="routeID"></com-menu>
    <main>
      <div class="headerBG"></div>
      <section id="wines" class="wines">
        <div class="wines-left">
          <div class="wines-wrap">
            <div class="wines-list">
              <ul class="item-list">
                <li class="item" v-for="(wine,idx) in findListArr" :key="idx" v-on:click="aboutPage(wine)">
                  <h3>{{ wine.WINE }}</h3>
                  <h4>{{ wine.VARIETY }}</h4>
                  <span>more</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="info">
            <span class="btn-line infoBtn" v-on:click="infoClick()">PRODUCER INFO</span>
          </div>
        </div>
        <div class="wines-right">
          <div class="wines-imgBox"></div>
        </div>
      </section>
      <section class="company" id="company">
        <div class="company-left">
          <div class="company-text">
            <h2>{{ findArr.COMPANY }}</h2>
            <h4>{{ findArr.LIST[0].COUNTRY }}</h4>
            <p class="story-1">
              {{ findArr.STORY_1 }}
            </p>
            <p class="story-2" v-if="findArr.STORY_2 !==''">
              {{ findArr.STORY_2 }}
            </p>
            <p class="story-3" v-if="findArr.STORY_3 !==''">
              {{ findArr.STORY_3  }}
            </p>
          </div>
          <span v-on:click="storyRead()" class="btn-line readBtn">READ MORE</span>
        </div>
        <div class="company-right">
          <div class="company-imgBox" v-if="findArr.COMPANY_IMG !=='' ">
            <img :src="require(`../${findArr.COMPANY_IMG}`)" alt="company" >
          </div>
        </div>
      </section>
      <div class="btn">
        <span class="btn-line" v-on:click="prevClick()">PREV</span>
        <span class="btn-line topBtn" v-on:click="topClick()">TOP</span>
        <span class="btn-line" v-on:click="nextClick()">NEXT</span>
      </div>
    </main>
  </div>
</template>

<script>
import ComMenu from './com-Menu.vue'
export default {
  data(){
    return{
      headerClass:'company',
      countryArr:[],
      companyArr:[],
      routeID : this.$route.params.id,
      findArr:[],
      findListArr:[],
      companyArrItem : []
    }
  },
  components:{
    ComMenu
  },
  props:{
    DataWine:Array,
    DataWineList:Array,
    idx:Number,
    title:String,
  },
  methods:{
    aboutPage(wine){
      this.$router.push({
        name: "aboutPage",
        params:{
          wineName: wine.WINE,
        },
        state:{
          wineItem:wine.ID
        }
      })
    },
    storyRead(){
      const story2 = document.querySelector('.story-2');
      const story3 = document.querySelector('.story-3');
      const readBtn = document.querySelector('.readBtn');
      if(this.findArr.STORY_2 !==''){
      story2.classList.toggle('active');
      story2.classList.contains('active')? story2.style.height=story2.scrollHeight+'px' : story2.style.height=0;
      story2.classList.contains('active')? readBtn.innerHTML='READ LESS' : readBtn.innerHTML='READ MORE';
      }
      if(this.findArr.STORY_3 !==''){
        story3.classList.toggle('active');
        story3.classList.contains('active')? story3.style.height=story3.scrollHeight+'px' : story3.style.height=0;
      }
    },
    infoClick(){
      const companyPage =  document.querySelector('#company')  
      companyPage.scrollIntoView({ behavior: "smooth", block: "start"});
    },
    topClick(){
      const winesPage =  document.querySelector('#wines')  
      winesPage.scrollIntoView({ behavior: "smooth", block: "start"});
    },
    nextClick(){
      window.scrollTo(0,0)
      this.companyArrItem.findIndex((company,idx) => {
        if(company == this.routeID && idx !== this.companyArrItem.length-1){
        this.$router.push({path:`${this.companyArrItem[idx+1]}`})
      }})
    },
    prevClick(){
      window.scrollTo(0,0)
      this.companyArrItem.findIndex((company,idx) => {
        if(company == this.routeID && idx !== 0){
          this.$router.push({path:`${this.companyArrItem[idx-1]}`})
        }
      })
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
      }
    })
    
    this.companyArr = this.DataWine;
    let companyArrValues = [...this.companyArr];
    companyArrValues.forEach((ele)=>{
      ele.forEach((item)=>{
        this.companyArrItem.push(item)
      })
    })
  },
  mounted(){
    const itemList = document.querySelector('.item-list');
    const item = document.querySelectorAll('.item');
    const itemImg = document.querySelector('.wines-imgBox');
    this.findListArr[0].IMG !==''? itemImg.style.backgroundImage = 'url(' + require(`../${this.findListArr[0].IMG}`) + ')' : itemImg.style.backgroundImage = 'none'
    
    if(itemList.scrollHeight >= 360){
      item[item.length-1].style.marginBottom = '10rem'
    }
    
    item.forEach((ele,idx)=>{
      ele.addEventListener('mouseenter',()=>{
        if(this.findListArr[idx].IMG == ''){itemImg.style.backgroundImage = 'none'}
        else{itemImg.style.backgroundImage = 'url(' + require(`../${this.findListArr[idx].IMG}`) + ')'}
        ele.classList.add('colorB');
        let notEle = document.querySelectorAll('.item-list>li[class]:not(.colorB)')
        notEle.forEach(function(ele){
          ele.classList.add('colorGray');
        })
      })
      ele.addEventListener('mouseleave',()=>{
        this.findListArr[0].IMG !=''? itemImg.style.backgroundImage = 'url(' + require(`../${this.findListArr[0].IMG}`) + ')' : itemImg.style.backgroundImage = 'none'
        ele.classList.remove('colorB');
        let notEle = document.querySelectorAll('.item-list>li[class]:not(.colorB)')
        notEle.forEach(function(ele){
          ele.classList.remove('colorGray');
        })
      })
    })
  }
}
</script>

<style scoped src="../css/company.css">
</style>