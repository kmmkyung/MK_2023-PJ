// OurStory 페이지
import React from "react";
import RecBlure from "./modules/RecBlur"
import DomeCon from './modules/DomeCon';
import RecCon from './modules/RecCon';
import OurFace from "./modules/OurFace";

const OurStory = () => {
  return(
    <>
      <OurFace num='0'/>
      <RecBlure num='1'/>
      <DomeCon cat='Our_Story' num='0'/>
      <RecCon cat='Our_Story' num='0' />
      <DomeCon cat='Our_Story' num='1'/>
      <RecCon cat='Our_Story' num='1'/>
      <DomeCon cat='main' num='0' />
      <RecCon cat='Our_Story' num='2' />
    </>
  )
}; /////////////
export default OurStory;
