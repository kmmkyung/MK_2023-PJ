// 상세페이지 컴포넌트 - SubItem.js
// CSS
import "../css/subitem.css";
// Data
import SubItem_data from "../data/SubItem_data"
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>{
        console.log('Subitem로딩')
  }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function SubItem(props){
    return(
        <>        
          <section id="subface">
            <div className="subface-wrap">
              <img src="./images/Sub_Dark_Bg.jpg" />
              <div className="subface-bgwrap">
                <div className="subface-bg">
                  <img src="./images/oneschool.png" alt="one school day"/>
                </div>
              </div>
            </div>
          </section>
          <main>
            <section>
              <div className="subface-con">
                <h1>{SubItem_data[props.num].tit}</h1>
                <p>{SubItem_data[props.num].con}</p>
                <div className="number-btn">
                  <div className="number-btn__1">
                    <span>-</span>
                    <input htmlFor="number" placeholder="0" />
                    <span>+</span>
                  </div>
                  <button className="number-btn__2">BUY NOW - 11.86$</button>
              </div>
            </div>
            </section>
            <section className="item">
              <div className="item-wrap">
                <div className="item-L">
                  <img src="./images/Sub_Dark_choc.jpg" alt="item img" />
                </div>
                <div className="item-R">
                  <div className="about about-1">
                    <h3>Chocolate we can all feel good about</h3>
                  </div>
                  <div className="about about-2">
                    <p>Every bar you buy helps to support our Women’s Economic Empowerment Program and fund one day of schooling for a girl in rural Ghana.</p>
                  </div>
                  <div className="about about-3">
                    <h4>Ingredients</h4>
                    <p>{SubItem_data[props.num].Ingredients}</p>
                  </div>
                  <div className="about about-4">
                    <h4>Nutrition Facts</h4>
                    <p>{SubItem_data[props.num]["Nutrition Facts"]}</p>
                  </div>
                  <div className="about about-5">
                    <h4>Packaging</h4>
                    <p>Made from FSC certified materials & 100% recyclable.</p>
                  </div>
                </div>
              </div>
            </section>
            <article className="tasting">
              <div className="tasting-wrap">
                <h2>Tasting notes</h2>
                <div className="tasting-con">
                  { // 물어볼것 map 
                    SubItem_data[props.num].tasting.map((v,i)=>
                    <div className={"tasting-"+i}>
                      <img src={SubItem_data[props.num].tasting[i].src} alt="tasting img"/>
                      <h4>{SubItem_data[props.num].tasting[i].tit}</h4>
                      <h5>{SubItem_data[props.num].tasting[i].about}</h5>
                    </div>  
                    )
                  }
                </div>
              </div>
            </article>
          </main>
            {/* {jqFn()} */}
        </>
    )
} //______________ SubItem _______________//
export default SubItem;