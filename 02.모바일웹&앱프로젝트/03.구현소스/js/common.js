///////////////////////// load /////////////////////////
import core from "./core.js";
core();
    console.log("common.jS 로딩!")

    // https://www.kisshouse.co.uk/
// ______________________________page1_____________________________
/******************************
    함수명: FullImg
    기능: 화면 로딩 3초 후 이미지 크기 변화
******************************/

const mainImg = document.querySelector(".img-con>img");
const mainTitle = document.querySelector(".page1-con>.text-con")
// console.log("메인이미지",mainImg);
// console.log("메인텍스트",mainTitle);

function FullImg(event){
    event.preventDefault; 
    mainImg.classList.add("p1-fullimg");
    setTimeout(() => {
        mainTitle.classList.remove("-hidden")
    },500,"ease-out");
}
// window.addEventListener("wheel",FullImg);

// 페이지가 넘어가면 셋팅 원래대로!(이미지 작아지고 글씨 없어짐)
// if(){
//     mainImg.classList.remove("-p1_fullimg")
//     mainTitle.classList.add("-hidden")
// }
// ______________________________page3_____________________________
/******************************
    기능: 영상 포지션 바꾸기(화면 4/3이 내려가면 포지션 변경)
******************************/
const pg3 = document.querySelector(".page3-vidbox")
const vid = document.querySelector(".vid")
const cover = document.querySelector(".page3-vidbox__cover")
// 영상 크기 구하기
// let vidH = vid.offsetHeight/3*2;
// console.log(vidH)

const retVal = x => x.getBoundingClientRect().top;

window.addEventListener("scroll",()=>{
    // console.log("스크롤중",retVal(pg3))
    if(retVal(pg3)<0) {
        vid.style.position="relative";
        vid.style.top="0";
        vid.play();
    }
    else{
        vid.style.position="fixed";
        vid.style.top="0";
        vid.pause();
    }
})

// let scrollTop = 0;
// window.addEventListener("scroll",(e)=>{
//     scrollTop =document.documentElement.scrollTop;
//     cover.style.opacity = .3% + scrollTop /1000;
// })


// ______________________________page5_____________________________
/******************************
    기능: 해당 text에 마우스 오버 시 폰트색 및 이미지 변경
******************************/
const txtbx = document.querySelectorAll(".txtbx")
const shoes = document.querySelectorAll(".shoes")

const setCls = (ele,idx) => {
    let temp;
    idx?temp=0:temp=1;
    // console.log(idx);
    ele.classList.add("paga5-con__text-hover-color");
    ele.classList.remove("paga5-con__text-color");
    txtbx[temp].classList.remove("paga5-con__text-hover-color");
    txtbx[temp].classList.add("paga5-con__text-color");
    shoes[temp].classList.add("-hidden");
    shoes[idx].classList.remove("-hidden");

}; //////////// setCls ///////////////

txtbx.forEach((ele,idx)=>ele.addEventListener("mouseenter",()=>setCls(ele,idx)));



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
    document.querySelector("body").classList.add("xx")
})
})
closeBtn.addEventListener("click",function(){
listBox.classList.add("-hidden");
blurBox.classList.add("-hidden");
document.querySelector("body").classList.remove("xx")
})

