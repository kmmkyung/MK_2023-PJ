// 사각 컴포넌트 - RecCon.js
// CSS
import "../css/reccon.css";
// Data
import rec_con from "../data/RecCon_data";
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
                        rec_con[props.cat][props.num].src !== "" &&
                        <img src={rec_con[props.cat][props.num].src} alt="이미지" />
                    }
                    <div className="reccon-text">
                        <h2>{rec_con[props.cat][props.num].tit}</h2>
                        <p>{rec_con[props.cat][props.num].cont}</p>
                        <button className="reccon-text__btn btn-B">{rec_con[props.cat][props.num].btn}</button>
                    </div>
                </div>
            </section>
            {/* {jqFn()} */}
        </>
    )
} //______________ RecCon _______________//
export default RecCon;