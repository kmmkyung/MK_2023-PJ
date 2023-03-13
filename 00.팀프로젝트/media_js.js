window.addEventListener("DOMContentLoaded",linkFn);

function linkFn(){
  // console.log("링크 로딩완료!");

  // 로고 대상 선정
  const logo = document.querySelectorAll(".logo a");
  for(let x of logo){
    x.onclick = (e) => {
        e.preventDefault();
        location.href = "main_page.html";
    }; //////// click ///////////
  }
} ////////// linkFn함수 //////////////
