<template>
  <main>
    <div class="headerBG"></div>
    <div class="content">
      <ul class="list-container">

        
        <li class="list" v-for="(ele,idx) in DataWine" :key="idx">
          <ol class="item-container">{{ idx }}
            <li class="item" v-for="(ele,idx) in DataWine[idx]" :key="idx"><a class="btn-underline" href="#">{{ ele }}</a></li>
          </ol>
        </li>

      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name : 'comProducers',
  data(){
    return{}
  },
  components :{
  },
  props:{
    DataWine:Object
  },
  methods:{

  }
}
</script>

<style scoped>
.list-container{
  padding-top: 120px;
  text-align: center;
}

.list{
  font-size: var(--font-size-S);
  margin: 40px 0;
}

.item-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item{
  margin: 5px 0;
  font-size: min(7vw,var(--font-size-L));
  font-family: 'Nanum Myeongjo', serif;
}
</style>