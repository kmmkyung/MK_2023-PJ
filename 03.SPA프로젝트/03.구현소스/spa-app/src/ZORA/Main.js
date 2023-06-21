import React from 'react';
import MainFace from './MainFace';
import ChocoDomeCon from "./modules/ChocoDomeCon";
import RecCon from "./modules/RecCon";
import DomeCon from './modules/DomeCon';
import EmailForm from './EmailForm';
import RecBlur from './modules/RecBlur';
import DomeSlide from './DomeSlide';
import RotateHand from './modules/RotateHand';


const Main = () => {
  return (
      <>
        {/* 1. 메인 main */}
        <MainFace />
        <RotateHand />
        <RecCon cat="main" num="0"/>
        <ChocoDomeCon />
        <RecBlur num="0"/>
        <DomeCon cat="main" num="0"/>
        <RecCon cat="main" num="1"/>
        <DomeSlide/>
        <EmailForm />
      </>
  );
}; /////////// Main //////////////

export default Main;

