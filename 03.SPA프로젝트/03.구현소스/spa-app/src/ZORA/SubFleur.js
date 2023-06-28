// Sub_Dark 페이지
import React from "react";
import {SubItem} from "./modules/SubItem";
import DomeSlide from "./modules/DomeSlide";
import SubNext from "./modules/Subnext";

const SubFleur = () =>{
  return(
    <>
      <SubItem num="1"/>
      <DomeSlide />
      <SubNext num="1" />
    </>
  )
}; /////////////
export default SubFleur;
