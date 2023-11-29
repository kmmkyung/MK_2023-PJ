<template>
  <div>
    <com-menu :headerClass="headerClass"></com-menu>
    <main id="main">
      <div class="headerBG"></div>
      <section id="wines" class="wines">
        <div class="wines-left">
          <div class="wines-wrap">
            <div class="wines-list">
              <ul class="item-list">
                <li class="item" v-for="(ele,idx) in findListArr" :key="idx">
                  <h3>{{ ele.WINE }}</h3>
                  <h4>{{ ele.VARIETY }}</h4>
                  <span>more</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="info">
            <span class="btn-line infoBtn">PRODUCER INFO</span>
          </div>
        </div>
        <div class="wines-right">
          <div class="wines-imgBox">
            <!-- <img :src="require(`../${findListArr[0].IMG}`)" alt="wines"> -->
          </div>
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
          <div class="company-imgBox">
            <img :src="require(`../${findArr.COMPANY_IMG}`)" alt="company" v-if="findArr.COMPANY_IMG !==''">
          </div>
        </div>
      </section>
      <div class="btn">
        <a class="btn-line" href="#">PREV</a>
        <span class="btn-line topBtn">TOP</span>
        <a class="btn-line" href="#">NEXT</a>
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
    }
  },
  components:{
    ComMenu
  },
  props:{
    DataWineList:Array,
    idx:Number
  },
  methods:{
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
  }
  },
  created(){    
    this.DataWineList.forEach((ele)=>{
      this.countryArr.push(...ele.DATA)
    })
      this.countryArr.find((ele)=>{
      if(ele.COMPANY == this.routeID){
        this.findArr = ele
        this.findListArr = ele.LIST
      }
    })
    
  },
  mounted(){
    const itemList = document.querySelector('.item-list');
    const item = document.querySelectorAll('.item');
    const itemImg = document.querySelector('.wines-imgBox');
    this.findListArr[0].IMG !==''? itemImg.style.backgroundImage = 'url(' + require(`../${this.findListArr[0].IMG}`) + ')' : itemImg.style.backgroundImage = 'none'
    
    if(itemList.scrollHeight >= 360){
      item[item.length-1].style.marginBottom = '100%'
    }
    
    item.forEach((ele,idx)=>{
      ele.addEventListener('mouseenter',()=>{
        if(this.findListArr[idx].IMG == ''){itemImg.style.backgroundImage = ''}
        itemImg.style.backgroundImage = 'url(' + require(`../${this.findListArr[idx].IMG}`) + ')'
        
        ele.classList.add('colorB');
        let notEle = document.querySelectorAll('.item-list>li[class]:not(.colorB)')
        notEle.forEach(function(ele){
          ele.classList.add('colorGray');
        })
      })
      ele.addEventListener('mouseleave',function(){
        this.findListArr[0].IMG !==''? itemImg.style.backgroundImage = 'url(' + require(`../${this.findListArr[0].IMG}`) + ')' : itemImg.style.backgroundImage = 'none'
        let notEle = document.querySelectorAll('.item-list>li[class]:not(.colorB)')
        ele.classList.remove('colorB');
        notEle.forEach(function(ele){
          ele.classList.remove('colorGray');
        })
      })
    })
  }
}
</script>

<style scoped>
#main{
  position: relative;
}

.wines{
  width: 100%;
  height: 100vh;
  display: flex;
}

.wines-left,
.wines-right,
.company-left,
.company-right{
  width: 50%;
}

.wines-left{
  position: relative;
  margin-top: 59px;
}

.wines-wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.wines-list{
  overflow-y: auto;
  max-height: 360px;
}

.wines-wrap::before{
  content: '';
  position: absolute;
  bottom: 0%;
  background: linear-gradient(rgba(255, 255, 255, 0),var(--main));;
  width: 100%;
  height: 20%;
  pointer-events: none;
  z-index: 1;
}

.item-list{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.item{
  padding-bottom: 10px;
  transition: all .5s;
  cursor: pointer;
}

.item.colorB{
  color: var(--block);
}

.item.colorGray{
  color: rgba(0, 0, 0, 0.5);
}

.item:hover span{
  opacity: 1;
  transform: translateY(0%);
}

.item h3,
.item h4{
  font-size: var(--font-size-M);
  font-family: 'Nanum Myeongjo', serif;
  margin: 10px;
}

.item h4,
.company-text h4{
  font-style: italic;
}

.item span{
  font-size: var(--font-size-S);
  transform: translateY(50%);
  display: inline-block;
  opacity: 0;
  transition: all .5s;
}

.info{
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
}

.info a{
  font-size: var(--font-size-M);
}

.wines-right{
  background-color: var(--gray);
  padding-top: 59px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wines-imgBox{
  width: 50%;
  height: 80%;
  background-size: cover;
  background-position: center;
  transition: all .4s;
}

.wines-imgBox img{
  width: 100%;
}

.company-left{
  background-color: var(--beige);
}

.company{
  display: flex;
}

.btn{
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 20px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
}

.btn a,
.btn span{
  font-size: var(--font-size-M);
}

.company-left{
  box-sizing: border-box;
  padding: 65px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.company-text .story-2,
.company-text .story-3{
  transition: all 1s;
  height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
}

.story-2.active,
.story-3.active{
  overflow: auto;
  visibility: visible;
  opacity: 1;
}

.company-text h2,
.company-text h4,
.company-text p{
  text-align: center;
  font-size: var(--font-size-M);
  font-family: 'Nanum Myeongjo', serif;
  line-height: 1.3;
}

.company-text p{
  margin-top: 10px;
}

.readBtn{
  margin-top: 10px;
  cursor: pointer;
}

.company-right{
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: var(--main);
  z-index: 2;
}

.company-imgBox{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.company-imgBox>img{
  object-fit: contain;
  width: 55%;
}

/* 미디어쿼리 */
@media screen and (max-width:990px){

  .wines-left{
    width: 100%;
  }

  .wines-right{
    display: none;
  }

  .company {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .company-left,
  .company-right{
    width: 100%;
    height: 100%;
    background-color: var(--beige);
  }

  .company-right{
    position: static;
    padding-top: 65px;
    z-index: 0;
  }
}

/* 미디어쿼리 */
@media screen and (max-width:780px){

}
</style>