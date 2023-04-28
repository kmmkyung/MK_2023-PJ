///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("core.js 로딩완료")

  /********************
    gnb에 로고 넣기
  ********************/
  const logoSVG1 = document.querySelector(".nav_Logo1");
  const logoSVG2 = document.querySelector(".nav_Logo2");
  // console.log(logoSVG1,logoSVG2)

  logoSVG1.innerHTML = svgData.logo_1;
  logoSVG2.innerHTML = svgData.logo_2;


  /********************
    gnb 메뉴 넣기
  ********************/
  // 1. 대상 선정
  const nav = document.querySelectorAll(".nav_L--menu");
  console.log(nav);

  // // 2. 변수
  let hcode =""

  nav.forEach(ele=>{

    let mtit = ele.innerText;
    console.log(mtit);
    
    let tgdata = gnbdata[mtit];
    console.log(tgdata);

    


  })

  console.log(hcode);
;

  // const letVal = obj => {
  //   console.log(obj);
  //   let smallH = "";
  //   for(let x in obj){
  //           smallH += `
  //             <li><a class="-blur_submenu" href="#">${obj[x]}</a></li>
  //           `
  //         }

  //   return smallH;
  // }

  // // // 3. 구조화
  // hcode += `<ul>`;
  // for(let sm in gnbdata){
  //   console.log(gnbdata[sm]["Ready-to-wear"]);
  //   hcode += `
  //     <li class="nav_L--submenu"><a class="-blur_submenu" href="#">Ready-to-wear</a>
  //       <ol class="submenu_list">
  //         ${letVal(gnbdata[sm]["Ready-to-wear"])}
  //       </ol>
  //   </li>
  //   `;
  // }
  // hcode += `</ul>`;

  //     // 4. GNB 박스에 출력하기
  //     nav.innerHTML = hcode;

}) ///////////////////////// load /////////////////////////

