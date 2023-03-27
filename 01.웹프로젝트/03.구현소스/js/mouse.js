// -- 마우스 따라다니는 로고 -- //

///////////////////////// load /////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    // console.log("mouse-JS 로딩완료!")

    // 대상: #cursor
    const mouseCursor = document.querySelector("#cursor");
    // console.log("마우스",mouseCursor);

    // 마우스 커서 이미지 절반 크기 (이미지 마우스 가운데 위치해야해서 알아봄)
    const Msize = mouseCursor.clientWidth/2;
    // console.log("커서 사이즈",Msize);

    // 이벤트 대상: body
    // 이벤트 종류: onmousemove (마우스가 대상 위에서 움직임)
    ///// EVNET-FN__onmousemove /////
    document.body.onmousemove = function(){

        //마우스 위치 확인! (pageX,Y는 전체 웹문서에의 위치)
        // console.log("x",event.pageX,"y",event.pageY);

        // 위치값 보정 (clientX, clientY는 브라우저 화면에서의 위치)
        let positionX = event.clientX-Msize;
        let positionY = event.clientY-Msize;

        // 커서 이미지 위치값 이동(가운데 위치 보정)
        mouseCursor.style.top = positionY + "px";
        mouseCursor.style.left = positionX + "px";

    }///// EVNET-FN__onmousemove /////

});///////////////////////// load /////////////////////////
