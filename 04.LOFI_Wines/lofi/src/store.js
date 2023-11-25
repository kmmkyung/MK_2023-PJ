import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      width:0,
      headerClass : ['producers','winesList','contact','about'],
    }
  },
  mutations: {
    
    // if 메인의 클래스가 ㅁㅁ이면 헤더의 클래스를 ㅁㅁ로 넣어줘
    // 1. 메인 클래스 데이터 받기
    // 2. 헤더에 클래스 넣기
    

  },
})

export default store