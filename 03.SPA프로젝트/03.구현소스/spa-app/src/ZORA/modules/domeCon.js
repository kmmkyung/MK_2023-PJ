// 돔 컴포넌트 - domCon.js
// CSS
import "../css/domecon.css";
// Data
import DomeCon_data from '../data/DomeCon_data';
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
    <div className="domecon-wrap">
      <div className="domecon-img">
        <img src={DomeCon_data[props.cat][props.num].src} alt="img"/>
        <p className="domecon-img__cation">
          {DomeCon_data[props.cat][props.num].caption1}
          {DomeCon_data[props.cat][props.num].caption2}
          <strong></strong><br/>
        </p>
      </div>
      <div className="domecon-con">
        <img className="svg_oneshool" src={DomeCon_data[props.cat][props.num].svg}/>
        <h2 className="domecon-con__tit">{DomeCon_data[props.cat][props.num].tit}</h2>
        <p className="domecon-con__text">{DomeCon_data[props.cat][props.num].con1}</p>
        <button className="domecon-con__btn btn-B">{DomeCon_data[props.cat][props.num].btn}</button>
      </div>
    </div>
  </section>
    {/* {jqFn()} */}
    </>
  )
} //______________ domCon_______________//
export default DomeCon;