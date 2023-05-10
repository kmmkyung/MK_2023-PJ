window.addEventListener("DOMContentLoaded",()=>{
console.log("list.js 로딩완료")
//____________________________________________________________________________

// 리스트 예시
function list(){
    const a = document.querySelector(".list-con");
    a.innerHTML = ""; 
    for(let i=0; i<9; i++){
        a.innerHTML +=`
        <li>
            <img class="list-con__img" src="./imges/Ready-to-wear/women/01_Utility Cotton Trench Coat.jpg" alt="Ready-To-Wear">
            <div class="list-con__title">
                <h3>Utility Cotton Trench Coat</h3>
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
let subPicLi = document.querySelectorAll(".sublist-con__img-sub-ul-li");
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
const listImg = document.querySelectorAll(".list-con__img")
const listBox = document.querySelector("#sublist");
// console.log(listBox,listImg)
// listBox.addEventListener("mousewheel",(event)=>{
//     event.preventDefault;
//     event.stopPropagation();
//     return false;
// })

listImg.addEventListener("mouseevent",()=>{
    this.classList.add(".imgMove")
})

}); ///////////////////////// load /////////////////////////


