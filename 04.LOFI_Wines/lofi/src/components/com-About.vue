<template>
  <div>
    <main>
      <div class="headerBG"></div>
      <section class="wines">
        <div class="wines-left">
          <div class="wines-content">
            <h3></h3>
            <h4></h4>
            <p class="about"></p>
          </div>
          <div class="info">
            <router-link class="btn-line">VIEW ALL WINES</router-link>
          </div>
        </div>
        <div class="wines-right">
          <div class="wines-imgBox">
            <img src="" alt="wines">
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// import ComMenu from './com-Menu.vue';

export default {
  data(){
    return{
      headerClass:'about'
    }
  },
  components :{
    // ComMenu
  },
}
</script>

<style scoped src="../css/about.css">

</style>