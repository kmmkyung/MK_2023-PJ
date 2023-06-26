// OurImpact 페이지
import React from "react";
import DomeCon from './modules/DomeCon';
import OurFace from "./modules/OurFace";
import RecCon from './modules/RecCon';

const OurImpact = () =>{
  return(
    <>
      <OurFace num='1'/>
      <RecCon cat='Our_Impact' num='0'/>
      <DomeCon cat='Our_Impact' num='0'/>
      <DomeCon cat='Our_Impact' num='1'/>
      <DomeCon cat='Our_Impact' num='2'/>
    </>
  )
}; /////////////
export default OurImpact;
