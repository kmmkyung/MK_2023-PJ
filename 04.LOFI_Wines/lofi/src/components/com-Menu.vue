<template>
  <div class="Menu">
    <header>
      <div class="header-container">
        <div class="logo-All">
          <div class="logo"></div>
          <h1 class="ir">LOFI Wines</h1>
        </div>
        <div class="title">
          <h2></h2>
        </div>
        <div class="menu-Icon">
          <div class="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
      </div>
    </header>
    <nav>
      <ul class="menu-list">
        <li class="menu-item">
          <a href="#" class="btn-underline">Producers</a>
        </li>
        <li class="menu-item">
          <a href="#" class="btn-underline">The Wine List</a>
        </li>
        <li class="menu-item">
          <router-link to="/contact" class="btn-underline">Contact</router-link>
        </li>
      </ul>
      <aside>
        <a class="btn-line" href="#">INSTAGRAM</a>
        <a class="btn-line" href="#">FACEBOOK</a>
      </aside>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  components :{
  },
  props:{
    headerClass:Array
  }
}
</script>

<style>
@import url(../css/menu.css);
</style>