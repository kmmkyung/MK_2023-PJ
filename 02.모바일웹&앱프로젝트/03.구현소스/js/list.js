import store from "./listData-women.js";

console.log("list.js 로딩완료")
//____________________________________________________________________________

// 리스트 예시
function list(){
    const a = document.querySelector(".list-con");
    let hcode = ""; 
    for(let i=0; i<Women.RTW.length; i++){
        hcode +=` 
                <li>
                    <div class="none_hover">
                    <img class="list-con__img imgMove" src=./imges/RTW/women/${Women.RTW[i].img}>
                        <div class="list-con__title">
                        <h3>${Women.RTW[i].name}</h3>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div class="hover">
                <img class="list-con__img2 imgMove" src=./imges/RTW/women/${Women.RTW[i].img2}>
                    <div class="list-con__title2">
                    <h3>${Women.RTW[i].name2}</h3>
                </div>
            </li> 
        `;
    }
    a.innerHTML = hcode;
}
// list();

Vue.component("list-comp",{
    template:
        `<div class="list-all">
                <ul class="list-con">
                    <li v-for="(v,i) in $store.state.RTW">
                        <div class="none_hover">
                            <img class="list-con__img imgMove" v-bind:src="'./imges/RTW/women/'+v.img">
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
            </div>`
    
})
new Vue({
    el:"#list",
    store
})

//____________________________________________________________________________

// 서브페이지 오버시 사진 변경
    const mainLi2 = document.querySelectorAll(".none_hover")
    const mainLiH = document.querySelectorAll(".hover")
    console.log("메인이미지",mainLi2)
    console.log("호버이미지",mainLiH)

    mainLiH.forEach((ele,idx)=>{
        ele.addEventListener("mouseenter",function(){
            this.style.opacity = 1;
            mainLi2[idx].style.opacity =0;
        });
        ele.addEventListener("mouseout", function(){
            this.style.opacity = 0;
            mainLi2[idx].style.opacity =1;
        })
    })
//____________________________________________________________________________
//____________________________________________________________________________

// 상세페이지 오버시 사진 변경
const mainPic = document.querySelector(".sublist-con__img-main>img");
let subPic = document.querySelectorAll(".sublist-con__img-sub-ul-li>img");
// let subPicLi = document.querySelectorAll(".sublist-con__img-sub-ul-li");
// console.log(mainPic,subPic);

for(let i=0; i<subPic.length; i++){
    subPic[i].addEventListener("mouseover",chgPic);
}
function chgPic(){
    let subPicAttribute = this.getAttribute("src");
    mainPic.setAttribute("src",subPicAttribute)
}
//____________________________________________________________________________

// 이미지 클릭시 상세페이지 보기
// 스크롤 막기...?????????
const listBox = document.querySelector("#sublist");
const blurBox = document.querySelector(".blur_box");
const listImg = document.querySelectorAll(".list-con li");
const closeBtn = document.querySelector(".sublist_close");
// console.log(listImg)
// console.log(listBox);

listImg.forEach((ele, idx /* ,(객체 자신) */) =>{
    ele.addEventListener("click",function(){
        listBox.classList.remove("-hidden");
        blurBox.classList.remove("-hidden");
    })
})
closeBtn.addEventListener("click",function(){
    listBox.classList.add("-hidden");
    blurBox.classList.add("-hidden");
})

// 일단 상태이상 변수 줄거 - 하지만 실패했습니다.
// let aaa = 0;
// $('.footer-latter h5').on('click',function(){
//     console.log('클릭')
//     aaa = 1
// })

// $(window).on('wheel',(e)=>{
//     console.log('스크롤',aaa)
//     if(aaa){
//         console.log(e)
//         e.preventDefault();
//     }
// })

// bbb()
