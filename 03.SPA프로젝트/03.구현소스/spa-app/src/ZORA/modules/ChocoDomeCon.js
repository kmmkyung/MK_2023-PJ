//  초콜릿 돔 컴포넌트 - ChocoDomeCon.js
// CSS
import "../css/chocodomecon.css";
// Data
import ChocoDomeCon_data from "../data/ChocoDomeCon_data";
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>[ 
        console.log('chocodomecon로딩')
    ]); //--- JQB ---//
} //_______________ jqFn _______________//

const setcss_wrap=[
    {
        position: "relative"
    },
    {
        top:"100vh",
        position: "absolute",
    },
    {
        top:"200vh",
        position: "absolute",
    },
    {
        top:"300vh",
        position: "absolute",
    },
    {
        top:"400vh",
        position: "absolute",
    }
]
const setcss_bg = [
    {
        height: "480vh",
        backgroundColor:"var(--org)"
    },
    {
        height:"200vh",
        backgroundColor:"var(--blue)"
    },
    {
        height:"200vh",
        backgroundColor:"var(--red)"
    },
    {
        height:"180vh",
        backgroundColor:"var(--yell)"
    },
    {
        height:"100vh",
        backgroundColor:"var(--pink)"
    },
];
// jqFn();


// 컴포넌트 출력용
function ChocoDomeCon(){
  return(
    <>
        <section id="main">
        {
            ChocoDomeCon_data.main.map((v,i)=>
                <div className="ChocoDomeCon__warp" key={i} style={setcss_wrap[i]}>
                    <div className="ChocoDomeCon__con">
                        <div className="ChocoDomeCon__img">
                            <img className="ChocoDomeCon__img-1 chocolatepack" src={v.img1} alt="이미지" />
                            <img className="ChocoDomeCon__img-2  chocolatebreak" src={v.img2} alt="이미지" />
                        </div>
                        <div className="ChocoDomeCon__text">
                            <h2 className="ChocoDomeCon__text-tit">{v.tit}<br/>{v.tit2}</h2>
                            <button className="ChocoDomeCon__text-btn btn-B">{v.btn}</button>
                        </div>
                    </div>
                    {
                        i !== 4 && 
                        <div className="ChocoDomeCon__back" data-seq={i} style={setcss_bg[i]}></div>                
                    }
                    {
                        i === 4 &&
                        <div className="chocolate-5__backwrap">
                            <div className="ChocoDomeCon__back" data-seq={i} style={setcss_bg[i]}></div>
                        </div>
                    }
                </div>
            )
        }
        </section>
    {/* {jqFn()} */}
    </>
  )
} //______________ domCon_______________//
export default ChocoDomeCon;