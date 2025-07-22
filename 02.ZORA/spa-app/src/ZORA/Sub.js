// Sub_Dark 페이지
import React from "react";
import { SubAll } from "./modules/Sub_all";
import { useLocation, useOutletContext } from "react-router-dom";

const Sub = (props) =>{
  const loc = useLocation();
  const { setCart } = useOutletContext();

  const num = loc.state.num;
  return(
    <>
      <SubAll num={num} setCart={setCart} />
    </>
  )
}; /////////////
export default Sub;
