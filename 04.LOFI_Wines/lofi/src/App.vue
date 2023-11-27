<template>
  <div>    
    <router-view :DataWineList="DataWineList" :DataWine="DataWine" :DataContact="DataContact"></router-view>
  </div>
</template>

<script>
import DataWineList from './assets/data/DataWineList';
import DataWine from './assets/data/DataWine';
import DataContact from './assets/data/DataContact';

export default {
  name: 'App',
  data(){
    return{
      DataWineList:DataWineList,
      DataWine:DataWine,
      DataContact:DataContact,
    }
  },
  components: {
  },
  methods:{

  
  },
  mounted(){
  }
}
</script>

<style>
@import url(./css/reset.css);
@import url(./css/root.css);
@import url(./css/common.css);

</style>
