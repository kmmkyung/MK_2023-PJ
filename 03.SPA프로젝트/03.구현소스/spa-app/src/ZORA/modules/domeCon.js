// 돔 컴포넌트 - domCon.js
// CSS
// import "../css/chocodomecon.css";
// Data
// import domeCon_data from "../data/ChocoDomeCon_data";
// 제이쿼리
// import $ from "jquery"

function jqFn(){
    $(()=>[ 
        console.log('domeCon로딩')
    ]); //--- JQB ---//
} //_______________ jqFn _______________//

<<<<<<< HEAD
jqFn();

=======
>>>>>>> parent of f5b47c2 (s)

// 컴포넌트 출력용
function DomeCon(){
    return(
        <>
<<<<<<< HEAD
    
        {/* {jqFn()} */}
=======
        <section id="main">
        {
            domeCon_data.main.map((v,i)=>
                <div className="domeCon__warp chocolate-warp" key={i}>
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
                <div className="domeCon__back"></div>
            </div>

                )
            }
            </section>
            {jqFn()}
>>>>>>> parent of f5b47c2 (s)
        </>
    )
} //______________ domCon_______________//
// export default DomeCon;