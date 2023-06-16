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

jqFn();


// 컴포넌트 출력용
function DomeCon(){
    return(
        <>
    
        {/* {jqFn()} */}
        </>
    )
} //______________ domCon_______________//
// export default DomeCon;