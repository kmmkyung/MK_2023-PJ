import store from "./listData-women.js";
import core from "./core.js";
console.log("list.js 로딩완료")
//____________________________________________________________________________

core();


Vue.component("title-comp",{
    template:
    `
    <div class="main-header">
        <h2 class="main-title">Ready-To-Wear</h2>
    </div>
    `
})

let aa;
Vue.component("list-comp",{
    template:
        `
        <div class="list-all">
            <ul class="list-con">
                <li v-for="(v,i) in $store.state">
                    <div class="none_hover">
                        <img class="list-con__img imgMove" v-bind:src="'./imges/'+i+'/women/'+v[0].img2">
                        <div class="list-con__title">
                            <h3>{{v.name}}</h3>
                            <i class="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div class="hover">
                        <img class="list-con__img2 imgMove" v-bind:src="'./imges/RTW/women/'+v.img2">
                        <div class="list-con__title2">
                            <h3>{{v.name2}}</h3>
                        </div>
                    </div>
                </li> 
            </ul>
        </div>
        `,
        data(){
            return{
                aa:aa,
            }
        },
        methods:{
            test(){
                
                $(".-blur_submenu").on("click",function(){
                    aa = $(this).html()
                })
                console.log("click",aa)
            },
            test2(){
                
            }
        },
        mounted(){
            console.log("aa",this.aa)
            let arr= ['RTW','shoes','bags','bags','Accessories','Fragrances']
            let xxx = store.state.arr[0]
                console.log("xxx",xxx)
        }
    
    }
)
new Vue({
    el:"#title",
    
})
new Vue({
    el:"#list",
    
})



//____________________________________________________________________________
