import React from 'react';
import MainFace from './MainFace';
import {ChocoDomeCon} from "./modules/ChocoDomeCon";
import RecCon from "./modules/RecCon";
import DomeCon from './modules/DomeCon';
import { EmailForm } from './modules/EmailForm';
import RecBlur from './modules/RecBlur';
import DomeSlide from './modules/DomeSlide';
import RotateHand from './modules/RotateHand';
import Fade from "react-reveal/Fade"



const Main = () => {
  return (
      <>
        {/* 1. 메인 main */}
        <MainFace />
        <RotateHand />
        <Fade bottom>
          <RecCon cat="main" num="0"/>  
        </Fade>
          <ChocoDomeCon />
          <RecBlur num="0"/>
        <Fade bottom>
          {/* <DomeCon cat="main" num="0"/> */}
          <RecCon cat="main" num="1" sty={{position:"absolute",top:"min(-2vw,-30px)"}} />
          <DomeSlide/>
          <EmailForm />
        </Fade>
      </>
  );
}; /////////// Main //////////////

export default Main;

