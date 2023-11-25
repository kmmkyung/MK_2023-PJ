<template>
  <div>
    
    <comMenu :headerClass="headerClass"></comMenu>
    <router-view :DataWineList="DataWineList" :DataWine="DataWine" :DataContact="DataContact"></router-view>
    
  </div>
</template>

<script>
import DataWineList from './assets/data/DataWineList';
import DataWine from './assets/data/DataWine';
import DataContact from './assets/data/DataContact';
import comMenu from './components/com-Menu.vue'

export default {
  name: 'App',
  data(){
    return{
      DataWineList:DataWineList,
      DataWine:DataWine,
      DataContact:DataContact,
      headerClass : ['producers','winesList','contact','about'],
    }
  },
  components: {
    comMenu:comMenu
  },
  methods:{

  headerBG(){
    const bg = document.querySelector('.headerBG')
    const header = document.querySelector('header')
    const companyPageRight = document.querySelector('.company-right')
    const companyPage = document.querySelector('.company')

    if(header.className == 'contact'){
      bg.style.backgroundColor = 'var(--contact)' 
    }
    if(header.className == 'producers' || header.className == 'list' ){
      bg.style.backgroundColor = 'var(--main)'
    }
    else{
      bg.style.backgroundColor = 'transparent'
    }
    window.addEventListener('scroll',function(){
      if( window.innerWidth > 990 ){
        if(header.className == 'winesList' && window.scrollY >= companyPageRight.scrollHeight){
          bg.style.backgroundColor = 'var(--beige)'
        }
        if(header.className == 'winesList' && window.scrollY < companyPageRight.scrollHeight){
          bg.style.backgroundColor = 'transparent'
        }
        if(header.className == 'about'){
          bg.style.backgroundColor = 'transparent'
        }
      }
      if( window.innerWidth <= 990 ){
        if(header.className == 'winesList' && companyPage.getBoundingClientRect().top <= 0){
          bg.style.backgroundColor = 'var(--beige)'
        }
        if(header.className == 'winesList' && companyPage.getBoundingClientRect().top > 0){
          bg.style.backgroundColor = 'transparent'
        }
        if(header.className == 'about'){
          bg.style.backgroundColor = 'var(--main)'
        }
      }
    })
  }

  },
  mounted(){
    this.headerBG()
  }
}
</script>

<style>
@import url(./css/reset.css);
@import url(./css/root.css);
@import url(./css/common.css);

</style>
