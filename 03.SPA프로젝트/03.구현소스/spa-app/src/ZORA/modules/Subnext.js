// 상세페이지 컴포넌트 - SubItem.js
// CSS
import "../css/subnext.css";
// Data
import SubNext_data from "../data/SubNext_data"
// 제이쿼리 
import $ from "jquery"

function jqFn(){
    $(()=>{
        console.log('Subnext로딩')
  }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function SubNext(props){
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
                      <img class="chocolatepack" src={SubNext_data[props.num].src1_L} alt=""/>
                      <img class="chocolatebreak" src={SubNext_data[props.num].src2_L} alt=""/>
                    </div>
                    <h3 className='tit_LT'>{SubNext_data[props.num].tit_L.split("^")[0]}</h3>
                    <h3 className='tit_LB'>{SubNext_data[props.num].tit_L.split("^")[1]}</h3>
                    <button class="btn-B">{SubNext_data[props.num].btn_L}</button>
                  </div>
                  <div class="subnext-bg" style={{backgroundColor:SubNext_data[props.num].bgc_L}}></div>
                </div>
              </div>
              <div class="subnext-R">
                <div class="subnext-R-wrap">
                  <div class="subnext-R-con">
                    <div class="subnext-img">
                      <img class="chocolatepack" src={SubNext_data[props.num].src1_R} alt=""/>
                      <img class="chocolatebreak" src={SubNext_data[props.num].src2_R} alt=""/>
                    </div>
                    <h3 className='tit_RT'>{SubNext_data[props.num].tit_R.split("^")[0]}</h3>
                    <h3 className='tit_RB'>{SubNext_data[props.num].tit_R.split("^")[1]}</h3>
                    <button class="btn-B">{SubNext_data[props.num].btn_R}</button>
                  </div>
                  <div class="subnext-bg" style={{backgroundColor:SubNext_data[props.num].bgc_R}}></div>
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