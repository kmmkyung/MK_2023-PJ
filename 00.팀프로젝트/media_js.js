window.addEventListener("DOMContentLoaded",linkFn);

function linkFn(){
  console.log("링크 로딩완료!");

  // 로고 대상 선정
  const logo = document.querySelector(".logo a");
  console.log(logo);
    logo.onclick = (e) => {
       console.log(222);
        e.preventDefault();
        location.href = "main_page.html";
    }; //////// click ///////////
} ////////// linkFn함수 //////////////
