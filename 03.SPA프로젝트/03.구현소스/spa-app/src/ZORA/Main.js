import React from 'react';
import MainFace from './MainFace';
import ChocoDomeCon from "./modules/ChocoDomeCon";
import RecCon from "./modules/RecCon";
import DomeCon from './modules/DomeCon';
import EmailForm from './EmailForm';
import RecBlur from './modules/RecBlur';

const Main = () => {
  return (
      <>
        {/* 1. 메인 main */}
        <MainFace />
        <RecCon cat="main" num="0"/>
        <ChocoDomeCon />
        <RecBlur/>
        <DomeCon cat="main" num="0"/>
        <RecCon cat="main" num="1"/>
        <EmailForm />
      </>
  );
}; /////////// Main //////////////

export default Main;

