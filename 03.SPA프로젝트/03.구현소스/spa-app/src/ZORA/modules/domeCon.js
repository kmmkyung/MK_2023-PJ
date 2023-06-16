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


// 컴포넌트 출력용
function DomeCon(){
    return(
        <>
        <section id="main">
        {
            domeCon_data.main.map((v,i)=>
                <div className="domeCon__warp chocolate-warp" key={i} style={setcss_wrap[i]}>
                    <div className="domeCon__con">
                        <div className="domeCon__img">
                            <img className="domeCon__img-1 chocolatepack" src={v.img1} alt="이미지" />
                            <img className="domeCon__img-2  chocolatebreak" src={v.img2} alt="이미지" />
                        </div>
                        <div className="domeCon__text">
                            <h2 className="domeCon__text-tit">{v.tit}<br/>{v.tit2}</h2>
                            <button className="domeCon__text-btn btn-B">{v.btn}</button>
                        </div>
                    </div>
                    {
                        i !== 4 && 
                        <div className="domeCon__back" data-seq={i} style={setcss_bg[i]}></div>                
                    }
                    {
                        i===4 &&
                        <div className="chocolate-5__backwrap">
                            <div className="domeCon__back" data-seq={i} style={setcss_bg[i]}></div>
                        </div>
                    }
                </div>
            )
        }
        </section>
        {jqFn()}
        </>
    )
} //______________ domCon_______________//
export default DomeCon;