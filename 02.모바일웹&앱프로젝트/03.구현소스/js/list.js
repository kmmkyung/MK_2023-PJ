window.addEventListener("DOMContentLoaded",()=>{

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
    }/////for/////
}
list();

// 커서 올리면 사ㄴ ㅂ


})


