window.addEventListener('DOMContentLoaded',()=>{

    // 대상 선정  
    const slide = $(".domeslide-con");
    const slist = slide.find('li');

    // 1. 드래그 설정
    slide.draggable({
      axis: "x" 
  });

  // 윈도크기리턴함수
  const reWin = () => $(window).width();
  // 리사이즈 업데이트
  $(window).resize(() => {
    winW = reWin();
    console.log("reWin:",reWin);
  });

  let winW = reWin();
  // console.log("winW*0.9:",winW*0.9);
  // console.log("winW*1.1:",winW*1.1);
  
  // 드래그 끝난 후 이벤트함수
  slide.on('dragstop',function(){
    // 위치값
    let slideL = slide.offset().left;
    console.log('왼',slideL);

    // 1. 이동제어(왼/오/제자리)
    if(slideL < -winW*1.1){
        goSlide(0);
      }
    else if(slideL > -winW*0.9){
        goSlide(1);
    }
    else{
      slide.animate({
        left:-winW+"px"
      },200)
    }
  })

  // seq 순서
  slist.each((idx, ele) => {
    if(idx===0) $(ele).attr("data-seq",idx);
    else $(ele).attr("data-seq", +idx);
  }); ///////// each ///////////////

  // 이동함수
  function goSlide(dir) {
    // dir - 전달변수 
    console.log("방향:", dir);

// 분기하기
// 오른쪽이동 //////////////
if (dir) {
  slide.animate({left: "0px",},
    () => {
      // 이동후 맨뒤li 맨앞으로 이동하기
      slide.prepend(slide.find("li").last()).css({ left: "-100%" });
    }
    ); 
    addOn(0)
  } 
  // 왼쪽이동 //////////////////
  else {
    slide.animate(
      {
        left: -winW * 2 + "px",
      },
      () => {
        // 이동후 맨앞li 맨뒤이동
        slide.append(slide.find("li").first()).css({ left: "-100%" });
      }
      );
    addOn(2)
} /////////// else /////////////
} //////////////// goSlide함수 ///////////////////

const btn = $('.domeslide-btn li');
function addOn(seq){
  let dseq = slide.find('li').eq(seq).attr("data-seq");
  console.log('dseq',dseq);

btn.eq(dseq).addClass("on").siblings().removeClass("on");
}

})// ---------

//dir = 0-f 1-t