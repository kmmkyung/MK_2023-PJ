import React, { useEffect, useState } from "react";
import "../css/bag.css";
// 제이쿼리
import $ from "jquery";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bag_data from "../data/Bag_data";

function jqFn() {
  $(() => {});
}
// 위에서 리턴이 되던가... 로컬 기능이 뭐가 있을것...? 예상했었다... <- 정찬예상
const Bag = () => {
  // let localArray=[];
  // function aaa() {
  // let localData = JSON.parse(localStorage.getItem("cart"))

  // let aa = Object.keys(localData);
  // aa = aa.map(v=>localData[v])
  // console.log(typeof(Array.from(aa, x=>x)));

  // }
  // useEffect(() => {
  //   aaa();
  // });

  return (
    <>
      {/* {JSON.parse(localStorage.getItem("cart")).map((v,i) => {
        return (
          <div className="bag-items__con" key={i}>
            <img src={v.src} alt="bag_img" />
            <div className="bag-items-txt">
              <h5>{v.tit}</h5>
              {console.log("oooo")}
              <div className="con-btn">
                <span className="con-btn__span" alt="no">
                  -
                </span>
                <input
                  htmlFor="number"
                  className="con-btn__input"
                  defaultValue={v.num}
                />
                <span className="con-btn__span" alt="add">
                  +
                </span>
              </div>
              <p>$11.86</p>
              <span className="remove">remove</span>
            </div>
          </div>
        );
      })} */}

      {jqFn()}
    </>
  );
};
export default Bag;
