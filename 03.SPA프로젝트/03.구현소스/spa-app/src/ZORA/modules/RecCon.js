// 사각 컴포넌트 - RecCon.js
import { Link } from "react-router-dom";
import "../css/reccon.css";
import RecCon_data from "../data/RecCon_data";
// 제이쿼리
import $ from "jquery";
import { useEffect } from "react";

function jqFn() {
  $(() => {
    console.log("RecCon로딩");
  }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function RecCon(props) {
  let content = RecCon_data[props.cat][props.num];

  // console.log(props.sty);

  // function chgimg(props) {
  //   let chgimgnum = 0;
  //   let img = [
  //     "./images/Inspire women_1.jpg",
  //     "./images/Inspire women_2.jpg",
  //     "./images/Inspire women_3.jpg",
  //   ];
  //   if (document.querySelector(".reccon-conmain1 img")) return;

  //   setInterval(() => {
  //     document.querySelector(".reccon-conmain1 img").setAttribute("src", img[chgimgnum]);
  //     if (chgimgnum === img.length - 1) {
  //       chgimgnum = 0;
  //     } else {
  //       chgimgnum++;
  //     }
  //   }, 3000);
  // }

  // useEffect(chgimg, []);

  const setVal = (i) => {
    // return i==0 && props.sty ? props.sty : '';
    if (i == 0) return props.sty;
    // if (v == "main" && i == 1) return props.sty
  };

  return (
    <>
      <section id="reccon">
        <div className={"reccon-con"+content.className}>
          {content.src !== "" && <img src={content.src} alt="reccon" className={content.className}/>}
          <div className="reccon-text">
            {content.tit.split("^").map((v, i) => {
              return (
                <h2 key={i} style={setVal(i)}>
                  {v}
                </h2>
              );
            })}
            <p>{content.cont}</p>
            <Link to="/story">
              <button className="reccon-text__btn btn-B">{content.btn}</button>
            </Link>
          </div>
        </div>
      </section>
      {/* {jqFn()} */}
    </>
  );
} //______________ RecCon _______________//
export default RecCon;
