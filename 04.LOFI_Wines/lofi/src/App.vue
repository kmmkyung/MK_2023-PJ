<template>
  <div>
    <comMenu></comMenu>
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
import comMenu from './components/com-Menu.vue';
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
    comMenu:comMenu
  }
}
</script>

<style>
@import url(./css/reset.css);
@import url(./css/root.css);
@import url(./css/common.css);

main{
  width: 100%;
  height: 100%;
  display: flex;
}

.left{
  width: 50%;
  height: 100vh;
}

.left-content{
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 50px;
}

.left-content h1{
  position: absolute;
  font-size: var(--font-size-L);
  font-family: 'Nanum Myeongjo', serif;
  font-weight: normal;
  text-align: center;
  width: min(40vw,600px);
}

.left-content p{
  width: min(40vw,500px);
  font-size: var(--font-size-S);
  text-align: center;
}

.left-content a{
  margin-top: 80px;
}

.right{
  width: 50%;
  height: 100vh;
}

.right .right-img{
  background-image: url(./assets/images/index.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
