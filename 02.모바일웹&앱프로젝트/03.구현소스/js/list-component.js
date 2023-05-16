import store from "./listData-women.js";
import { hcode, core } from "./core.js";
console.log("list.js 로딩완료:");
//____________________________________________________________________________

Vue.component("title-comp", {
    template: `
    <div class="main-header">
        <h2 class="main-title">{{$store.state.cat}}</h2>
    </div>
    `,
});

Vue.component("list-comp", {
    template: `
        <div class="list-all">
            <ul class="list-con">
                <li v-for="(v,i) in $store.state[$store.state.cat]">
                    <div class="none_hover">
                        <img class="list-con__img imgMove" v-bind:src="'./imges/'+$store.state.cat+'/women/'+v.img">
                        <div class="list-con__title">
                            <h3>{{v.name}}</h3>
                            <i class="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div class="hover">
                        <img class="list-con__img2 imgMove" v-bind:src="'./imges/'+$store.state.cat+'/women/'+v.img2">
                        <div class="list-con__title2">
                            <h3>{{v.name2}}</h3>
                        </div>
                    </div>
                </li> 
            </ul>
        </div>
        `,
});

core();
console.log(hcode);
let menuCode = `
    <ul class="nav-L__list">
    ${hcode}
    </ul>`;

Vue.component("menu-comp", {
    template: menuCode,
    methods: {
        myFn(pm) {
            // console.log("찍어라!", pm);
            // 스토어 변수 업데이트
            store.state.cat = pm;
            // console.log("변경!", store.state.cat);
        },
    },
});

new Vue({
    el: ".mcont",
    store, // 스토어등록!!!
    mounted() {
        core();
        console.log(hcode)
    },
});

//____________________________________________________________________________
