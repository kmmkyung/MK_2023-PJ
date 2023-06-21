// 상세페이지 컴포넌트 - SubItem.js
// CSS
import "../css/subnext.css";
// Data
// import SubItem_data from "../data/"
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>{
        console.log('Subnext로딩')
  }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function SubNext(){
    return(
      <>
          <section id="subnext">
            <h2 class="subnext-tit">You may also enjoy</h2>
            <div class="subnext-wrap">
              <div class="subnext-con">
                <div class="subnext-L">
                  <div class="subnext-L-wrap">
                    <div class="subnext-L-con">
                      <div class="subnext-img">
                        <img class="chocolatepack" src="./images/Pecan_cherry_1.png" alt=""/>
                        <img class="chocolatebreak" src="./images/Pecan_cherry_2.png" alt=""/>
                      </div>
                      <h3>Recan+ Cherry</h3>
                      <button class="btn-B">Buy now</button>
                    </div>
                    <div class="subnext-bg"></div>
                  </div>
                </div>
                <div class="subnext-R">
                  <div class="subnext-R-wrap">
                    <div class="subnext-R-con">
                      <div class="subnext-img">
                        <img class="chocolatepack" src="./images/Fleur_de_Sel_1.png" alt=""/>
                        <img class="chocolatebreak" src="./images/Fleur_de_Sel_2.png" alt=""/>
                      </div>
                      <h3>Fleur de Sel</h3>
                      <button class="btn-B">Buy now</button>
                    </div>
                    <div class="subnext-bg"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* {jqFn()} */}
        </>
    )
} //______________ SubItem _______________//
export default SubNext;