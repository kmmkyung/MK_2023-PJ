// 돔 컴포넌트 - domCon.js
// CSS
import "../css/domecon.css";
// Data
import domeCon_data from "../data/domeCon_data";
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>[ 
        console.log('domeCon로딩')
    ]); //--- JQB ---//
} //_______________ jqFn _______________//


// 컴포넌트 출력용
function domeCon(){
    return(
        <>
        <section className="main">

        {
            domeCon_data.map((v,i)=>
                <div className="domeCon__warp chocolate-warp" key={i}>
                <div className="domeCon__con">
                    <div className="domeCon__img">
                        <img className="domeCon__img-1 chocolatepack" src={v.img1} alt="이미지" />
                        <img className="domeCon__img-2  chocolatebreak" src={v.img2} alt="이미지" />
                    </div>
                    <div className="domeCon__text">
                        <h2 className="domeCon__text-tit -JSmove">{v.tit}+<br/>{v.tit2}</h2>
                        <button className="domeCon__text-btn btn-B">{v.btn}</button>
                    </div>
                </div>
                <div className="domeCon__back"></div>
            </div>

                )
            }
            </section>
            {jqFn()}
        </>
    )
} //______________ domCon_______________//
export default domeCon;