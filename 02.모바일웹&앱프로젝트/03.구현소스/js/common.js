///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("common.jS 로딩!")

// ______________________________page1_____________________________
/******************************
    함수명: FullImg
    기능: 화면 로딩 3초 후 이미지 크기 변화
******************************/

const mainImg = document.querySelector(".img-con>img");
const mainTitle = document.querySelector(".page1-con>.text-con")
// console.log("메인이미지",mainImg);
// console.log("메인텍스트",mainTitle);

function FullImg(){
    // 이미지가 커지는동안은 아래로 스크롤 할 수 없게 하고싶어요
    // event.preventDefault;

    mainImg.classList.add("p1_fullimg");
    setTimeout(() => {
        mainTitle.classList.remove("-hidden")
    }, 2500);
}
window.addEventListener("wheel",FullImg);

// 페이지가 넘어가면 셋팅 원래대로!(이미지 작아지고 글씨 없어짐)
// if(){
//     mainImg.classList.remove("-p1_fullimg")
//     mainTitle.classList.add("-hidden")
// }
// ______________________________page3_____________________________
/******************************
    함수명: posFixed
    기능: 영상 포지션 바꾸기(화면 4/3이 내려가면 포지션 변경)
******************************/
// ______________________________page5_____________________________
/******************************
    함수명: textChange
    기능: 해당 text에 마우스 오버 시 폰트색 및 이미지 변경
******************************/





}); ///////////////////////// load /////////////////////////
