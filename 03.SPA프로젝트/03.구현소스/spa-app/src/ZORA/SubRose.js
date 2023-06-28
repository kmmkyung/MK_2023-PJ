// Sub_Rose 페이지
import React from "react";
import DomeSlide from "./modules/DomeSlide";
import {SubItem} from "./modules/SubItem";
import SubNext from "./modules/Subnext";

const SubRose = () =>{
  return(
    <>
      <SubItem num="4"/>
      <DomeSlide></DomeSlide>
      <SubNext num="4" />
    </>
  )
}; /////////////
export default SubRose;
