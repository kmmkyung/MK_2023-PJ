import MainFace from './MainFace';
import ChocoDomeCon from "./modules/ChocoDomeCon";
import RecCon from "./modules/RecCon";

const Main = () => {
  return (
      <>
        {/* 1. 메인 main */}
        <MainFace />
        <RecCon cat="main" num="0"/>
        <ChocoDomeCon />
        <RecCon cat="main" num="1"/>
      </>
  );
}; /////////// Main //////////////

export default Main;

