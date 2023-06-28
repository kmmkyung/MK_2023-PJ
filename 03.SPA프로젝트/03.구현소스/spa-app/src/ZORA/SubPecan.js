// Sub_Pecan 페이지
import React from "react";
import DomeSlide from "./modules/DomeSlide";
import {SubItem} from "./modules/SubItem";
import SubNext from "./modules/Subnext";

const SubPecan = () =>{
  return(
    <>
      <SubItem num="2"/>
      <DomeSlide/>
      <SubNext num="2" />
    </>
  )
}; /////////////
export default SubPecan;
