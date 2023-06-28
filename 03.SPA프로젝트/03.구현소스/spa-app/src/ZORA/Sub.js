// Sub_Dark 페이지
import React from "react";
import {SubItem} from "./modules/SubItem";
import DomeSlide from "./modules/DomeSlide";
import SubNext from "./modules/Subnext";
import SubItem_data from "./data/SubItem_data";
import { Suball } from "./modules/sub_all";
import { useLocation } from "react-router-dom";

const Sub = (props) =>{
  const loc = useLocation();
  const num = loc.state.num;
  return(
    <>
      <Suball num={num}/>
    </>
  )
}; /////////////
export default Sub;
