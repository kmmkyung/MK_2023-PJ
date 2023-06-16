// 돔 컴포넌트 - domCon.js
// CSS
import "../css/domecon.css";
// Data
import dome_con from '../data/DomeCon_data';
// 제이쿼리 
import $ from "jquery"

function jqFn(){
    $(()=>[ 
        console.log('DomeCon로딩')
    ]); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();


// 컴포넌트 출력용
function DomeCon(props){
  return(
    <>
  <section id='domecon'>
    <div className="DomeCon-wrap">
      <div className="DomeCon-img">
        <img src={dome_con[props.cat].src} alt="img"/>
        <p className="DomeCon-img__cation">
          <strong></strong><br/>
          <strong></strong>
        </p>
      </div>
      <div className="DomeCon-con">
        <div className="svg_oneshool"></div>
        <h2 className="DomeCon-con__tit">{dome_con[props.cat].tit}</h2>
        <p className="DomeCon-con__text"></p>
        <button className="DomeCon-con__btn"></button>
      </div>
    </div>
  </section>
    {/* {jqFn()} */}
    </>
  )
} //______________ domCon_______________//
export default DomeCon;