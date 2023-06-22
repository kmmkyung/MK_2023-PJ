// 돌아가는 손 - RotateHand.js
// CSS
import "../css/rotatehand.css";
import rounde_cricle from '../data/svg/rounde_cricle.svg';
import rounde_hand from '../data/svg/rounde_hand.svg';
// 제이쿼리
import $ from "jquery"

function jqFn(){
    $(()=>{ 
        console.log('RotateHand로딩')

  // rounde SVG scroll rotate ______________________________________
  roundSvgMove(); //---- 호출
  function roundSvgMove(){
    const RC = document.querySelector(".svg__1")
    
    window.addEventListener('scroll' ,function(){
      let WinscrollY = window.scrollY
      // console.log('scrollY',WinscrollY); // ok
      RC.style.transform="rotate("+WinscrollY/10+"deg)";
    })
  } //---- roundSvgMove 함수 ----//

    }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function RotateHand(){
    return(
        <>        
        {/* 움직이는 원 svg */}
        <aside>
          <div className="svg">
            <img className ="svg__1" src={rounde_cricle} alt="logo" />
            <img className ="svg__2" src={rounde_hand} alt="logo" />
          </div>
        </aside>
            {/* {jqFn()} */}
        </>
    )
} //______________ RecCon _______________//
export default RotateHand;