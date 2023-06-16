import DomeCon from "./modules/DomeCon";
import RecCon from "./modules/RecCon";

const Main = () => {
  return (
      <>
        {/* 1. 메인 main */}
        <RecCon cat="main" num="0"/>
        <DomeCon />
        <RecCon cat="main" num="1"/>
        
      </>
  );
}; /////////// Main //////////////

export default Main;

