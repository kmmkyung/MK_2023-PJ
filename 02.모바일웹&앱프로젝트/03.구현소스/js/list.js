import Women from "./listData-women.js";

console.log("list.js 로딩완료")
console.log("answer:",Women.shoes[1].color)
//경로: 배열. 객체:속성으로! 들어간다
// Women_RTW -> shoes의 두번째 객체의 -> 색상
//____________________________________________________________________________

// 리스트 예시
function list(){
    const a = document.querySelector(".list-con");
    a.innerHTML = ""; 
    for(let i=0; i<Women.length; i++){
        a.innerHTML +=`
        <li>
            <img class="list-con__img imgMove" src=${Women.RTW.img}>
            <div class="list-con__title">
                <h3>${Women.RTW[i].name}</h3>
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </li>
        `;
    }
}
list();
//____________________________________________________________________________

// 오버시 사진 변경
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
console.log(listImg)
console.log(listBox);

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
// listBox.addEventListener("mousewheel",(event)=>{
//     event.preventDefault;
//     event.stopPropagation();
//     return false;
// })



