// 돔 컴포넌트 - domCon.js
import { Link } from "react-router-dom";
import "../css/domecon.css";
import DomeCon_data from "../data/DomeCon_data";
// 제이쿼리
import $ from "jquery";

function jqFn() {
  $(() => {
    console.log("DomeCon로딩");
  }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

// 컴포넌트 출력용
function DomeCon(props) {
  let content = DomeCon_data[props.cat][props.num];

  return (
    <>
      <section id="domecon">
        <div className={"domecon-wrap domecon-wrap__"+content.class}>
          <div className="domecon-img">
            {content.src !== "" && <img src={content.src} alt="img" />}
            <p className="domecon-img__cation">
              <strong>{content.caption1.split("^")[0]} </strong>
              <span>{content.caption1.split("^")[1]}</span>
              <br />
              <strong>{content.caption2.split("^")[0]} </strong>
              <span>{content.caption2.split("^")[1]}</span>
            </p>
          </div>
          <div className="domecon-con">
            {content.svg !== "" && (
              <img className="svg_oneshool" src={content.svg} alt="oneschool" />
            )}
            <h2 className="domecon-con__tit">
              {content.tit.split("^").map((v, i) => {
                return <div key={i}>{v}</div>;
              })}
            </h2>
            {content.src2 !== "" && (
              <img className="src2" src={content.src2} alt="img" />
            )}
            {
              content.con1.split("^").length === 1 &&
              <p className="domecon-con__text">{content.con1}</p>
            }
            {
              content.con1.split("^").length !== 1 &&
              <>
                {
                  content.con1.split("^").map((v,i)=>{
                    return (
                      <p className="domecon-con__text" key={i}>{v}</p>
                    )
                  })
                }
              </>
            }
            {content.btn !== "" && (
              <Link to="/impact">
                <button className="domecon-con__btn btn-B">
                  {content.btn}
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
      {/* {jqFn()} */}
    </>
  );
} //______________ domCon_______________//
export default DomeCon;
