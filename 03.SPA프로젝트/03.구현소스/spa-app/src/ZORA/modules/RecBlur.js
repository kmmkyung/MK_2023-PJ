// 사각 컴포넌트 - RecCon.js
// CSS
import "../css/recblur.css";
// Data
import RecCon_data from "../data/RecBlur_data";
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>[ 
        console.log('RecBlur로딩')
    ]); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function RecBlur(){
    return(
        <>        
            <section id="recblur">
                <div className="recblur-con">
                    <img src="" alt="이미지"  />
                    <div className="recblur-text">
                        <h2></h2>
                        <p></p>
                        <button className="recblur-text__btn btn-B"></button>
                    </div>
                </div>
            </section>
            {/* {jqFn()} */}
        </>
    )
} //______________ RecCon _______________//
export default RecBlur;