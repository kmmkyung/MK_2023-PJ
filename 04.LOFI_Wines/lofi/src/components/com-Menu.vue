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
    headerClass:String
  },
  methods :{
    home(){
      this.$router.push('/')
    },
    headerColor(header,color){
      return header.style.backgroundColor = color
    },
    headerBg(){
      const bg = document.querySelector('.headerBG')
      const header = document.querySelector('header')
      const companyPageRight = document.querySelector('.company-right')
      const companyPage = document.querySelector('.company') 
      
    if(header.className == 'contact'){
      this.headerColor(bg,'var(--contact)')
    }
    if(header.className == 'producers' || header.className == 'list' ){
      this.headerColor(bg,'var(--main)')
    }
    if((header.className == '')){
      this.headerColor(bg,'transparent')
    }
    window.addEventListener('scroll',function(){
      if( window.innerWidth > 990 ){
        if(header.className == 'winesList' && window.scrollY >= companyPageRight.scrollHeight){
          this.headerColor(bg,'var(--beige)')
        }
        if(header.className == 'winesList' && window.scrollY < companyPageRight.scrollHeight){
          this.headerColor(bg,'transparent')
        }
        if(header.className == 'about'){
          this.headerColor(bg,'transparent')
        }
      }
      if( window.innerWidth <= 990 ){
        if(header.className == 'winesList' && companyPage.getBoundingClientRect().top <= 0){
          this.headerColor(bg,'var(--beige)')
        }
        if(header.className == 'winesList' && companyPage.getBoundingClientRect().top > 0){
          this.headerColor(bg,'transparent')
        }
        if(header.className == 'about'){
          this.headerColor(bg,'var(--main)')
        }
      }
    })
  }
    
  },
  mounted(){
    this.headerBg()

    // 그냥 여기에 요소가 있는지 없는지 체크해서
    // 스크롤이벤트 분기
    //근데 스크롤이벤트가 비슷한 코드가 많으니까
    // 이걸 메소드에 파라미터받는걸로 해서 만들어놓으면 좋을듯
    // 벗! 처음엔 하드코딩으로하고 축약하는걸 추천 
    




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