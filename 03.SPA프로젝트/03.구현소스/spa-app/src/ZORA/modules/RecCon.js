// 사각 컴포넌트 - RecCon.js
// CSS
import "../css/reccon.css";
// Data
import RecCon_data from "../data/RecCon_data";
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>[ 
        console.log('RecCon로딩')
    ]); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function RecCon(props){
    return(
        <>        
            <section id="reccon">
                <div className="reccon-con">
                    {
                        RecCon_data[props.cat][props.num].src !== "" &&
                        <img src={RecCon_data[props.cat][props.num].src} alt="이미지" />
                    }
                    <div className="reccon-text">
                        <h2>{RecCon_data[props.cat][props.num].tit}</h2>
                        <p>{RecCon_data[props.cat][props.num].cont}</p>
                        <button className="reccon-text__btn btn-B">{RecCon_data[props.cat][props.num].btn}</button>
                    </div>
                </div>
            </section>
            {/* {jqFn()} */}
        </>
    )
} //______________ RecCon _______________//
export default RecCon;