<template>
  <div class="Menu">
    <header :class="headerClass">
      <div class="header-container">
        <div class="logo-All">
          <div class="logo" v-on:click=" home() "></div>
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
          <router-link to="/producers" class="btn-underline">Producers</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/thewinelist" class="btn-underline">The Wine List</router-link>
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
import logoData from '../js/svg.js'

export default {
  data(){
    return{
    }
  },
  components :{
  },
  props:{
    headerClass:Array
  },
  methods :{
    home(){
      this.$router.push('/')
    }
    
  },
  mounted(){
    const logo = document.querySelector('.logo')
    logo.innerHTML=logoData

    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const menuItem = document.querySelectorAll('.menu-item');
    const asideLink = document.querySelector('aside');

    function menuItemFn(ele,time){
      setTimeout(function(){
        menuItem[ele].style.transform='translateY(0%)'
        menuItem[ele].style.opacity='1'
      },time)
    }

    hamburger.addEventListener('click',function(){
      hamburger.classList.toggle('on');
      nav.classList.toggle('on');
      if(nav.classList.contains('on')){
        menuItemFn(0,600)
        menuItemFn(1,800)
        menuItemFn(2,1000)
        setTimeout(()=>{
          asideLink.style.transform='translateY(0%)'
          asideLink.style.opacity='1'
        },400)
      }
      else{
        menuItem.forEach((ele,idx) => {
          menuItem[idx].style.opacity='0'
          menuItem[idx].style.transform='translateY(100%)'
        })
        asideLink.style.opacity='0'
        asideLink.style.transform='translateY(100%)'
      }
    })

    menuItem.forEach((ele) => {
      ele.addEventListener('click',function(){
        nav.classList.remove('on')
        hamburger.classList.remove('on')
      })
    })
    
  }
}
</script>

<style>
@import url(../css/menu.css);
</style>