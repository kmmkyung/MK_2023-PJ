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
                <li class="item" v-for="(ele,idx) in DataWineList" :key="idx">
                  <h3>{{ idx }}</h3>
                  <h4></h4>
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
            <!-- <img src="" alt="wines"> -->
          </div>
        </div>
      </section>
      <section class="company" id="company">
        <div class="company-left">
          <div class="company-text">
            <h2>Ada Wines</h2>
            <h4>Australia</h4>
            <p class="story-1">
              Ada is the passion project for James Ellis, who also works full time with Gareth Belton of Gentle Folk in the Adelaide Hills. Ada is a relative newcomer to the South Australian wine scene with their first release being born of the 2018 vintage. A viticulturist at heart James is firmly of the belief that all of his wines are made in the vineyard and he is meticulous with his approach to organics across the sites he manages for Ada and Gareth. Before starting Ada, James had worked his way through many of the nations iconic regions with time spent in vineyard and cellar in the Barossa Valley working for Penfolds, Hunter Valley and McLaren Vale where he met James Erskine of Jauma who introduced him to Gareth.
            </p>
            <p class="story-2">
              Now James has purchased a house in the Barossa and will continue to work in the hills while sourcing precious small parcels from across South Australia. He crafts wines that are truly expressive of the regions they come from whilst also being produced from the grapes that he loves to drink. Skinsy Eden Riesling, McLaren Vale Grenache, Piccadilly Valley Chardonnay, Basket Range Pinot Noir and Barossa Grenache with more to come as James finds his groove and grows. All Ada grapes are from small growers who farm the land respectively and organically. While winemaking is fairly hands off with the only additions being minimal amounts of SO2 when it is necessary.
            </p>
            <p class="story-3">
              James’ 2021 release is stellar. All five wines are looking great and will continue to evolve across the year. We are thrilled to be working together and cant wait to watch Ada grow into one of the regions most exciting producers.
            </p>
          </div>
          <span class="btn-line readBtn">READ MORE</span>
        </div>
        <div class="company-right">
          <div class="company-imgBox">
            <img src="" alt="company">
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
      headerClass:'company'
    }
  },
  components:{
    ComMenu
  },
  props:{
    DataWineList:Array
  }
}
</script>

<style scoped>
main{
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
  width: 55%;
  height: 80%;
  background-size: cover;
  background-position: center;
  transition: all .4s;
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
</style>