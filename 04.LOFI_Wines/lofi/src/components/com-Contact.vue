<template>
  <div>
    <com-menu :headerClass="headerClass" :title="title" ></com-menu>
    <main class="contact">
      <div class="headerBG"></div>
      <section class="contact-left">
        <p class="contact-text">
          Lo-Fi Wines was founded on the ideals of sustainable viticulture, a natural approach to winemaking and expression of terroir.<br>
          Our portfolio pays homage to small, passion-driven wineries that create lively wines with honesty and care. Our aim is to provide exposure to what we think are some of the most exciting and interesting wines currently made. We hope that you fall in love with these wines as much as we have.
        </p>
        <div class="contact-people">
          <div class="people-ele" v-for="(ele,idx) in DataContact" :key="idx">
            <h5 class="name">{{ele.name}}</h5>
            <p class="number">{{ele.number}}</p>
            <p class="email">{{ele.email}}</p>
          </div>
        </div>
      </section>
      <section class="contact-right">
        <div class="contact-right__img"></div>
      </section>
    </main>
  </div>
</template>

<script>
import ComMenu from './com-Menu.vue';
  export default {
    name:'comContact',
    data(){
      return{
        title:'Contact',
        headerClass:'contact'
      }
    },
    components:{
        ComMenu
    },
    props:{
      DataContact:Array
    },
    created(){
      window.scrollTo(0,0)
    }
  }
</script>

<style scoped src="../css/contact.css">
</style>