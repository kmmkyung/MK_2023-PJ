// 상세페이지 컴포넌트 - SubItem.js
// CSS
import "../css/subitem.css";
// Data
import SubItem_data from "../data/SubItem_data"
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>{
        console.log('RecCon로딩')
  }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function SubItem(props){
    return(
        <>        
          <section id="subface">
            <div class="subface-wrap">
              <div class="subface-bgwrap">
                <div class="subface-bg">
                  <img src="./images/oneschool.png" alt="one school day"/>
                </div>
              </div>
            </div>
          </section>
          <main>
            <section>
              <div class="subface-con">
                <h1>Dark</h1>
                <p>Rich, herbaceous aromas with hints of honey, raisins and sweet caramel notes, for a long finish, reminiscent of warm fudge baked brownies.</p>
                <div class="number-btn">
                  <div class="number-btn__1">
                    <span>-</span>
                    <input htmlFor="number" placeholder="0" />
                    <span>+</span>
                  </div>
                  <button class="number-btn__2">BUY NOW - 11.86$</button>
              </div>
            </div>
            </section>
            <section class="item">
              <div class="item-wrap">
                <div class="item-L">
                  <img src="./images/Sub_Dark_choc.jpg" alt="item img" />
                </div>
                <div class="item-R">
                  <div class="about about-1">
                    <h3>Chocolate we can all feel good about</h3>
                  </div>
                  <div class="about about-2">
                    <p>Every bar you buy helps to support our Women’s Economic Empowerment Program and fund one day of schooling for a girl in rural Ghana.</p>
                  </div>
                  <div class="about about-3">
                    <h4>Ingredients</h4>
                    <p>Organic Cocoa, Cane Sugar, Cocoa Butter.
                    </p>
                  </div>
                  <div class="about about-4">
                    <h4>Nutrition Facts</h4>
                    <p>1 oz, Servings: 2, Calories: 170
                      Total Fat: 11g (14% DV), Saturated Fat: 7g (35%), Total Carb: 13g (5%), Dietary Fiber: 3g (11% DV), Total Sugars: 9g, Inc. Added Sugars:, 8g (16%DV), Protein: 3g, Calcium: 20mg (2% DV), Iron: 1.3mg (8% DV),
                      % Daily Value (DV) based on a 2,000 calorie diet.
                    </p>
                  </div>
                  <div class="about about-5">
                    <h4>Packaging</h4>
                    <p>Made from FSC certified materials & 100% recyclable.</p>
                  </div>
                </div>
              </div>
            </section>
            <article class="tasting">
              <div class="tasting-wrap">
                <h2>Tasting notes</h2>
                <div class="tasting-con">
                  <div class="tasting-1">
                    <img src="./images/Sub_sesame.jpg" alt="tasting img"/>
                    <h4>Terroir</h4>
                    <h5>Suhum, Ghana</h5>
                  </div>
                  <div class="tasting-2">
                    <img src="./images/Sub_sesame.jpg" alt="tasting img"/>
                    <h4>Terroir</h4>
                    <h5>Suhum, Ghana</h5>
                  </div>
                  <div class="tasting-3">
                    <img src="./images/Sub_sesame.jpg" alt="tasting img"/>
                    <h4>Terroir</h4>
                    <h5>Suhum, Ghana</h5>
                  </div>
                  <div class="tasting-4">
                    <img src="./images/Sub_sesame.jpg" alt="tasting img"/>
                    <h4>Terroir</h4>
                    <h5>Suhum, Ghana</h5>
                  </div>
                </div>
              </div>
            </article>
          </main>
            {/* {jqFn()} */}
        </>
    )
} //______________ SubItem _______________//
export default SubItem;