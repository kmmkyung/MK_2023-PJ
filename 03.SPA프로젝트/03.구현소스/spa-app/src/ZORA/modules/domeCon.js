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
    <div className="DomeCon-wrap">
      <div className="DomeCon-img">
        <img src={DomeCon_data[props.cat][props.num].src} alt="img"/>
        <p className="DomeCon-img__cation">
          {DomeCon_data[props.cat][props.num].caption1}
          {DomeCon_data[props.cat][props.num].caption2}
          <strong></strong><br/>
        </p>
      </div>
      <div className="DomeCon-con">
        <img className="svg_oneshool" src={DomeCon_data[props.cat][props.num].svg}/>
        <h2 className="DomeCon-con__tit">{DomeCon_data[props.cat][props.num].tit}</h2>
        <p className="DomeCon-con__text">{DomeCon_data[props.cat][props.num].con1}</p>
        <button className="DomeCon-con__btn btn-B">{DomeCon_data[props.cat][props.num].btn}</button>
      </div>
    </div>
  </section>
    {/* {jqFn()} */}
    </>
  )
} //______________ domCon_______________//
export default DomeCon;