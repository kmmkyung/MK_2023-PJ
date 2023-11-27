<template>
  <div>
    <com-menu></com-menu>
    <main>
      <div class="headerBG"></div>
      <section class="left">
        <div class="left-content">
          <h1 class="-center">Bringing together the small and the wonderful from around the world.</h1>
          <p>
            Lo-Fi Wines is an Australian based wine importer and distributor of local and international producers with a strong commitment to sustainability in the vineyard, a focus on low-intervention in the cellar and a passion for good drinking in the glass.
          </p>
          <a class="btn-line" href="#">VIEW OUR PRODUCERS</a>
        </div>
      </section>
      <section class="right">
        <div class="right-img"></div>
      </section>
    </main>
  </div>
</template>

<script>
import ComMenu from './com-Menu.vue'
export default {
  components :{
    ComMenu:ComMenu
  }
}
</script>

<style scoped src="../css/main.css">
</style>