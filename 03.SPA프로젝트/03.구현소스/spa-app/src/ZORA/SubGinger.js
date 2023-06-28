// Sub_Ginger 페이지
import React from "react";
import DomeSlide from "./modules/DomeSlide";
import {SubItem} from "./modules/SubItem";
import SubNext from "./modules/Subnext";

const SubGinger = () =>{
  return(
    <>
      <SubItem num="3"/>
      <DomeSlide/>
      <SubNext num="3" />
    </>
  )
}; /////////////
export default SubGinger;
