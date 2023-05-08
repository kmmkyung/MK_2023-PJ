///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
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
    event.preventDefault; // 이거 아닌가봐...ㅠ
    mainImg.classList.add("p1-fullimg");
    setTimeout(() => {
        mainTitle.classList.remove("-hidden")
    },500,"ease-out");
}
window.addEventListener("wheel",FullImg);

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
console.log(vid)
// 영상 크기 구하기
let vidH = vid.offsetHeight/4*3;
console.log(vidH)

const retVal = x => x.getBoundingClientRect().top;

window.addEventListener("scroll",()=>{
    console.log("스크롤중",retVal(vid))

    if(retVal(pg3)<0) {
        vid.style.position="fixed";
        vid.style.top="0";
        vid.play();
    }
    else{
        vid.style.position="relative";
        vid.style.top="0";
        vid.pause();
    }
})
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
    shoes[temp].classList.add("-hidden")
    shoes[idx].classList.remove("-hidden")

}; //////////// setCls ///////////////

txtbx.forEach((ele,idx)=>ele.addEventListener("mouseenter",()=>setCls(ele,idx)));

}); ///////////////////////// load /////////////////////////
