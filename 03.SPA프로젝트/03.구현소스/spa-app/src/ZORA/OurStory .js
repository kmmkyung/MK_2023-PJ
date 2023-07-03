// OurStory 페이지
import React from "react";
import RecBlure from "./modules/RecBlur";
import DomeCon from "./modules/DomeCon";
import RecCon from "./modules/RecCon";
import OurFace from "./modules/OurFace";
import Fade from "react-reveal/Fade";

const OurStory = () => {
  return (
    <>
      <OurFace num="0" />
      <RecBlure num="1" />
      <Fade bottom>
        <DomeCon cat="Our_Story" num="0" />
        <RecCon cat="Our_Story" num="0" />
        <DomeCon cat="Our_Story" num="1" />
        <RecCon cat="Our_Story" num="1" />
        <DomeCon cat="main" num="0" />
        <RecCon cat="Our_Story" num="2" />
      </Fade>
    </>
  );
}; /////////////
export default OurStory;
