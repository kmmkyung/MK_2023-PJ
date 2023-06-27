import React from "react";
import Bag_data from "../data/Bag_data";
import "../css/bag.css";
// 제이쿼리
import $ from "jquery";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function jqFn() {
  $(() => {});
}

const Bag = (props) => {
  return (
    <>
      <div className="bag-items__con">
        <img src={Bag_data[props.num].src} alt="bag_img" />
        <div className="bag-items-txt">
          <h5>{Bag_data[props.num].tit}</h5>
          <div className="con-btn">
            <span className="con-btn__span" alt="no">
              -
            </span>
            <input
              htmlFor="number"
              className="con-btn__input"
              placeholder="1"
            />
            <span className="con-btn__span" alt="add">
              +
            </span>
          </div>
          <p>$11.86</p>
          <span className="remove">remove</span>
        </div>
      </div>

      {jqFn()}
    </>
  );
};
export default Bag;
