// 사각 컴포넌트 - RecCon.js
// CSS
import "../css/reccon.css";
// Data
import RecCon_data from "../data/RecCon_data";
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>{ 
        console.log('RecCon로딩')
        
        
    }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function RecCon(props){

    let content = RecCon_data[props.cat][props.num]

    return(
        <>        
            <section id="reccon">
                <div className="reccon-con">
                    {
                        content.src !== "" &&
                        <img src={content.src} alt="이미지" />
                    }
                    <div className="reccon-text">
                        {
                        content.tit.split("^").map((v,i)=>{
                            return <h2 key={i}>{v}</h2> 
                        })
                        }
                        <p>{content.cont}</p>
                        <button className="reccon-text__btn btn-B">{content.btn}</button>
                    </div>
                </div>
            </section>
            {/* {jqFn()} */}
        </>
    )
} //______________ RecCon _______________//
export default RecCon;