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
const vid = document.querySelector(".vid")
// console.log(vid)
// 영상 크기 구하기
// let vidH = document.
window.addEventListener("scroll",()=>{
    // console.log("스크롤중")
    let scTop = window.scrollY;
    console.log(scTop);
})
// ______________________________page5_____________________________
/******************************
    기능: 해당 text에 마우스 오버 시 폰트색 및 이미지 변경
******************************/
const text1 = document.querySelector(".text-1")
const img1 = document.querySelector(".page5-con__img1")
const text2 = document.querySelector(".text-2")
const img2 = document.querySelector(".page5-con__img2")
// console.log(text1,text2,img1,img2)


}); ///////////////////////// load /////////////////////////
