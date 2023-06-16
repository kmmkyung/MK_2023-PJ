import React from 'react';
import page1 from './data/page1.svg';
// CSS
import "./css/mainface.css";
// 제이쿼리
import $ from "jquery"

const MainFace = () => {
  return(
    <>
        <section id="page1">
          <div className="page1-warp">
            <div className="page1-con">
              <div className="page1-con__text">
                <img className ="page1-svg" src={page1} alt="page1 svg" />
                <button className="page1-con__btn btn-W">Buy now</button>
              </div>
              <img className='page1-main__img' src="./images/main.jpg" alt="main"/>
            </div>
          </div>
        </section>
    </>
  )
}

export default MainFace;