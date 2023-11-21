<template>
  <main>
    <div class="headerBG"></div>
    <section class="left">
      <p class="content-text">
        Lo-Fi Wines was founded on the ideals of sustainable viticulture, a natural approach to winemaking and expression of terroir.<br>
        Our portfolio pays homage to small, passion-driven wineries that create lively wines with honesty and care. Our aim is to provide exposure to what we think are some of the most exciting and interesting wines currently made. We hope that you fall in love with these wines as much as we have.
      </p>
      <div class="content-people">
        <div class="people-ele" v-for="(ele,idx) in DataContact" :key="idx">
          <h5 class="name">{{ele.name}}</h5>
          <p class="number">{{ele.number}}</p>
          <p class="email">{{ele.email}}</p>
        </div>
      </div>
    </section>
    <section class="right">
      <div class="right-img"></div>
    </section>
  </main>
</template>

<script>
  export default {
    name:'comContact',
    data(){
      return{
        peopleCode : ``,
      }
    },
    components:{
    },
    props:{
      DataContact:Array
    },
    methods:{
    },
    mounted(){
      if(window.innerWidth>990){
        document.querySelector('.title h2').textContent = 'Contact';
      }
      else{
        document.querySelector('.title h2').textContent = '';
      }
    }
  }
</script>

<style scoped>
/* main */
main{
  background-color: var(--contact);
  font-weight: 300;
  width: 100%;
  display: flex;
}

.left{
  width: 50%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.content-text{
  padding-top: 65px;
  margin-bottom: 65px;
  width: 80%;
  font-family: 'Nanum Myeongjo', serif;
  font-size: var(--font-size-M);
}
.people-ele{
  margin-bottom: 20px;
}

.people-ele h5,.people-ele p{
  font-size: var(--font-size-S);
  line-height: 20px;
  letter-spacing: 2px;
}

.right{
  width: 50%;
  height: 100%;
  position: fixed;
  right: 0;
  z-index: 1;
}

.right .right-img{
  background-image: url(../assets/images/contact.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

/* 미디어쿼리 */
@media screen and (max-width:990px){
  .left{
    width: 100%;
  }

  .right{
    display: none;
  }
}

</style>